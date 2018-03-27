import { InvoiceItem } from './invoice-item.model';
import { Customer } from './customer.model';

export class Invoice{
  id:number;
  customer: Customer;
  invoiceItems: InvoiceItem[];
  invoiceNumber: number;
  itemsPriceTotal: number;
  paymentType: string;
  invoiceDate: Date;
  paymentDate: Date;
  accounted: boolean;
}