class Transaction {
    constructor({id, date, payee, categoryId, inflow, outflow, note}) {
        this.id = id;
        this.date = date;
        this.payee = payee;
        this.categoryId = categoryId;
        this.inflow = inflow;
        this.outflow = outflow;
        this.note = note;
    }

    validate = () => this.id != null && this.date != null;
}

export default Transaction;