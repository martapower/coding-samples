var AccountService = require('./AccountService');
// var TransactionRepository = require('../TransactionRepository/TransactionRepository');

describe('Print a bank statement', () => {
  var accountService = new AccountService();
  console.log = jest.fn();

  it('should print a bank statement in reverse order after some deposits and withdraws', () => {
    accountService.deposit(1000);
    accountService.withdraw(100);
    accountService.deposit(500);

    accountService.print();

    expect(console.log).toBeCalledWith(
      `DATE | AMOUNT | BALANCE
      18/01/2018 | 500.00 | 1400.0
      18/01/2018 | -100.00 | 900.0
      18/01/2018 | 1000.00 | 1000.0`);
  });
});

describe('AccountService', () => {
  var accountService;
  var transactionRepository;

  beforeEach(() => {
    accountService = new AccountService();
    accountService.transactionRepository.storeTransaction = jest.fn();
  });

  it('should deposit a certain amount', () => {
    accountService.deposit(100);

    expect(accountService.transactionRepository.storeTransaction).toBeCalledWith(100);
  });

  it('should withdraw a certain amount', () => {
    accountService.withdraw(100);

    expect(accountService.transactionRepository.storeTransaction).toBeCalledWith(-100);
  });

  it('should print an statement', () => {
    accountService.print();

    expect(console.log).toBeCalledWith(
      accountService.transactionRepository.getAllTransactions()
    );
  });
});
