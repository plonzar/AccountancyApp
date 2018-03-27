export class InvoiceItem{
  id: string;
  name: string;
  amount: number;
  tax: number;
  unitPriceWithoutTax: number;
  totalPriceWithoutTax: number;
  totalPriceWithTax: number;
}