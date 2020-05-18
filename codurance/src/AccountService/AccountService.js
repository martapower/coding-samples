var TransactionRepository = require('../TransactionRepository/TransactionRepository');

class AccountService {
  constructor() {
    this.transactionRepository = new TransactionRepository();
  }

  deposit(amount) {
    this.transactionRepository.storeTransaction(amount);
  }

  withdraw(amount) {
    this.transactionRepository.storeTransaction(-amount);
  }

  print() {
    console.log(this.transactionRepository.getAllTransactions());
  }
}

module.exports = AccountService;
