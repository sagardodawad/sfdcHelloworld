public with sharing class BankAccount {
    public Integer accountNumber{get; set;}
    public String accountHolderName{get; set;}
    public Double balance{get; set;}
    public String accountType{get; set;}
    public BankAccount() {}
    public BankAccount(Integer accountNumber, String accountHolderName, Double balance, String accountType) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
        this.accountType = accountType;
    }
}