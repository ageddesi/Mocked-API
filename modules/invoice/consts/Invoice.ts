type Invoice = {
  id: string;
  invoiceNumber: string;
  title: string;
  reference: string;
  invoiceDate: Date;
  note: string;
  amount: {
    currencyCode: string;
    value: string;
  };
  recipient: {
    name: string;
    email: string;
  };
  invoicer: {
    id: string;
    name: string;
    email: string;
    address: string;
    phoneNumber: string;
  };
};

export default Invoice;
