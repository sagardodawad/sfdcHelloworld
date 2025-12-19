public interface IBankServiceProvider {

   BankAccount getAccountByNumber(Integer accountNumber);
   Boolean deposit(Integer accountNumber, Double amount); 
   Boolean withdraw(Integer accountNumber, Double amount); 
   Boolean transfer(Integer fromAccount, Integer toAccount, Double amount);
}