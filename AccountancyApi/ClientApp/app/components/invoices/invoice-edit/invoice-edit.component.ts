//#region import
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import {map} from 'rxjs/operators/map';

import { InvoiceFormOperations } from './helpClasses/invoice-form-operations';
import { GettingFormDataOperations } from './helpClasses/getting-form-data-operations';
import { PriceCalculation } from './helpClasses/price-calculation';

import { TaxValue } from '../../../enums/tax-value.enum';
import { Invoice } from '../../../models/invoice.model';
import { Customer } from '../../../models/customer.model';
import { InvoiceItem } from '../../../models/invoice-item.model';

import { InvoiceServices } from '../../../services/invoice services/invoice.services';
import { CustomerServices } from '../../../services/customer services/customer.services';
import { UserServices } from '../../../services/user services/user.services';
//#endregion

@Component({
  selector: 'app-invoice-edit',
  templateUrl: './invoice-edit.component.html',
  styleUrls: ['./invoice-edit.component.css'],
  providers: [InvoiceFormOperations, GettingFormDataOperations, TaxValue, PriceCalculation]
})
export class InvoiceEditComponent implements OnInit {

  constructor(private formOperations: InvoiceFormOperations,
    private priceCalculation: PriceCalculation, 
    private gettingFormData: GettingFormDataOperations,
    private invoiceService: InvoiceServices,
    public customerService: CustomerServices,
    private activRoute: ActivatedRoute, 
    private router: Router, 
    private userService: UserServices,
    public taxValues: TaxValue){
      this.userService.CheckTokenExpired();
    }

  //#region Properites
  public title:string;
  sum: number = 0;
  public invoice:Invoice = new Invoice();
  public customer: Customer = new Customer();
  public workMode:string = "Dodaj Fakutę";
  public editMode: boolean = false;
  private index: number;
  public invoiceItems: InvoiceItem[] = [];
  public invoiceForm: FormGroup;
  public filteredResult: Observable<string[]>
  public selected = false;
  //#endregion
  
  ngOnInit() {
    //getting edited invoice data if exist
    this.activRoute.params.subscribe(
      (params: Params) => {
      this.index = params['id'];
      if(this.index !== undefined){
        this.invoice = this.invoiceService.GetInvoiceByNumber(+this.index);
        if(this.invoice != null){
          this.customer = this.invoice['customer'];
          this.workMode = "Zapisz zmiany";
          this.editMode = true
        }
        else{
          alert("Nie można znaleść faktury");
          this.router.navigate(['/invoice']);
        }
      }

      if(this.workMode == "Zapisz zmiany"){
        this.title = "Edycja faktury nr " + this.invoice['invoiceNumber'];
      }
      else{
        this.title = "Dodawanie faktury:"
      }     
      this.InitializeForm();
    });
    //price sum change subscribing
    this.CalculateSum();
    this.invoiceForm.get('invoiceItems').valueChanges.subscribe(
      () =>{
        this.CalculateSum()
    });
    //filter subscribing
    this.filteredResult = this.invoiceForm.get('customerName').valueChanges.pipe(map(param =>param == ''? [] : this.Filter(param)));
    this.invoiceForm.get('customerName').valueChanges.subscribe(
      () => {
        this.selected = false;
      }
    );
  }

  //#region Methods which operates form

  SubmitInvoice(){
    let paymentDate: Date = this.gettingFormData.getPaymentDate(this.invoiceForm);
    let paymentType = this.gettingFormData.getPaymentType(this.invoiceForm);
    this.gettingFormData.getCustomerData(this.invoiceForm, this.customer);
    this.gettingFormData.getInvoiceItems(this.invoiceForm, this.invoiceItems);
    if(this.workMode == "Zapisz zmiany"){
      this.invoiceService.UpdateInvoice(this.invoice, this.customer, this.invoiceItems, paymentDate, paymentType, this.index);
      this.router.navigate(['/invoice']);
    }
    else{
      this.invoiceService.AddInvoice(this.customer, this.invoiceItems, paymentDate, paymentType);
      this.router.navigate(['/invoice']);
    }
  }

  ClearForm(){
    this.invoiceForm.reset();
    this.formOperations.ClearInvoiceFormArray(this.invoiceForm);
  }

  AddItemRow(){
    this.formOperations.AddItemRow(this.invoiceForm);
  }  
  
  RemoveItemRow(index: number){
    this.formOperations.RemoveItemRow(this.invoiceForm, index);
    this.invoice.invoiceItems.splice(index,1);
  }
  //autocomplete customer section
  AutocompleteForm(name: string){
    if(this.customerService.GetCustomerByName(name) != null){
      this.customer = this.customerService.GetCustomerByName(name);
      this.invoiceForm.patchValue({
        'customerName': this.customer['name'],
        'customerCity':this.customer['city'],
        'customerPostCode':this.customer['postCode'],
        'customerStreet':this.customer['address'],
        'customerNIP':this.customer['nip']
      });
      this.selected = true
    }
  }
  //#endregion
  
  //#region Methods refers to invoiceItem's inputs changes

  ItemUnitPriceWithoutTaxChanged(priceFormGroup: FormGroup){
    this.priceCalculation.calculateTotalPriceWithoutTax(priceFormGroup, 'UnitPriceWithoutTax');
    this.priceCalculation.calculateTotalPriceWithTax(priceFormGroup, 'UnitPriceWithoutTax');
  }

  ItemAmountChanged(priceFormGroup: FormGroup){
    this.priceCalculation.calculateTotalPriceWithoutTax(priceFormGroup, 'itemAmount');
    this.priceCalculation.calculateTotalPriceWithTax(priceFormGroup, 'itemAmount');
  }

  ItemTaxChanged(priceFormGroup: FormGroup){
    this.priceCalculation.calculateTotalPriceWithTax(priceFormGroup, 'itemTax');
  }

  ItemTotalPriceWithoutTaxChanged(priceFormGroup: FormGroup){
    this.priceCalculation.calculateUnitPriceWithoutTax(priceFormGroup, 'itemTotalPriceWithoutTax');
    this.priceCalculation.calculateTotalPriceWithTax(priceFormGroup, 'itemTotalPriceWithoutTax');
  }

  ItemTotalPriceWithTaxChanged(priceFormGroup: FormGroup){
    this.priceCalculation.calculateTotalPriceWithoutTax(priceFormGroup, 'itemTotalPriceWithTax');
    this.priceCalculation.calculateUnitPriceWithoutTax(priceFormGroup, 'itemTotalPriceWithTax');
  }
  //#endregion

  //#region Private methods

  private CalculateSum(){
    this.sum = this.priceCalculation.calculateSum(this.invoiceForm);
  }

  private InitializeForm(){
    let paymentDate;
    if(this.editMode){
      let date =  new Date(this.invoice['paymentDate']);
      paymentDate = this.SetDate(date);
    }
    else{
      let now =  new Date();
      paymentDate = this.SetDate(now);
    }
    let invoiceItems = new FormArray([]);
    this.formOperations.InitializeFormArray(invoiceItems, this.editMode, this.invoice)
    this.invoiceForm = new FormGroup({
      'customerName': new FormControl(this.customer.name, Validators.required),
      'customerCity': new FormControl(this.customer.city, Validators.required),
      'customerPostCode': new FormControl(this.customer.postCode, [Validators.required, Validators.pattern('[0-9]{2}-[0-9]{3}')]),
      'customerStreet': new FormControl(this.customer.address, Validators.required),
      'customerNIP': new FormControl(this.customer.nip, [
        Validators.required, 
        Validators.pattern('[0-9]{10}'), 
        Validators.maxLength(10),
        Validators.minLength(10)]),
      'invoiceItems': invoiceItems,
      'paymentDate': new FormControl( paymentDate, Validators.required),
      'paymentType': new FormControl(this.invoice['paymentType'], Validators.required)
    })
  }

  private Filter(param: string){
    return this.customerService.customers
      .map(c => c.name)
      .filter(name => name.toLocaleLowerCase().includes(param.toLocaleLowerCase()));
  }

  private SetDate(date: Date){
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let dayFormat: string;
    let monthFormat: string;
    let yearFormat: string = String(year);
    let today: string;

    if(day < 10)
      dayFormat = '0' + day;
    else
      dayFormat = day.toString();
    if(month < 10)
      monthFormat = '0' + month;
    else
      monthFormat = month.toString();
    return today = yearFormat + '-' + monthFormat + '-' + dayFormat;
  }
  //#endregion
}