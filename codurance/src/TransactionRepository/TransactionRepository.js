class TransactionRepository {
  constructor() {
    this.transactions = [];
  }

  storeTransaction(amount) {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    this.transactions.push({
      date: `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`,
      amount,
    });
  }

  getLastTransaction() {
    return this.transactions[this.transactions.length - 1];
  }
}

module.exports = TransactionRepository;
