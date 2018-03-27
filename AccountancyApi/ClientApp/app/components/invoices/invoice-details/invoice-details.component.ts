import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Invoice } from '../../../models/invoice.model';
import { InvoiceServices } from '../../../services/invoice services/invoice.services';
import { UserServices } from './../../../services/user services/user.services';
import { UserModel } from './../../../models/user.model';
import * as jsPDF from 'jspdf';


@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.css']
})
export class InvoiceDetailsComponent implements OnInit {

  invoice:Invoice;
  invoiceNumber:number;
  user: UserModel = new UserModel();
  @ViewChild('invoiceContent') invoiceContent: ElementRef;

  constructor(private activRoute: ActivatedRoute,private router: Router, private invoiceService: InvoiceServices, private userService: UserServices) {
    this.userService.CheckTokenExpired();
    this.user = this.userService.userData;
   }

  
   ngOnInit() {
    this.activRoute.queryParams.subscribe(
      (params: Params) => {
        this.invoiceNumber = +params['number'];
        this.invoice = this.invoiceService.GetInvoiceByNumber(this.invoiceNumber)
        if(this.invoice == null){
          alert("Nie można znaleść faktury, prosze spróbować ponownie");
          this.router.navigate(['/invoice']);
        }
      });
  }

  DeleteInvoice(){
    this.invoiceService.DeleteInvoice(this.invoiceNumber);
    this.router.navigate(['/']);
  }

  GeneratePDF(){
    var signatureElement = document.createElement('div');
    signatureElement.classList.add('col-sm-6');
    signatureElement.innerHTML = '<div class="col-sm-4 signature-element pull-right" ><h4>Wystawił</h4><br><br><p>...................</p></div>'
    this.invoiceContent.nativeElement.appendChild(signatureElement);

    let doc = new jsPDF('p','mm','a4');
    doc.addHTML(this.invoiceContent.nativeElement, () =>{
      doc.save('Faktura_nr_'+this.invoice.invoiceNumber+'.pdf');
    });

    setTimeout(()=>{
      this.invoiceContent.nativeElement.removeChild(signatureElement);
    }, 10);
  }
}