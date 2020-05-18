var TransactionRepository = require('./TransactionRepository');

describe('TransactionRepository', () => {
  var transactionRepository;
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();

  beforeEach(() => {
    transactionRepository = new TransactionRepository();
  });

  it('should store a transaction with amount and date', () => {

    transactionRepository.storeTransaction(100);

    expect(transactionRepository.getLastTransaction()).toEqual(
      {
        date: `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`,
        amount: 100,
      });
  });

  it('should return a list with all the transactions', () => {
    
  });
});
