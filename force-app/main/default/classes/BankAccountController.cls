public with sharing class BankAccountController {
    @AuraEnabled(cacheable=true)
    public static List<Bank_Account__c> getBankAccountRecords(){
        try {
            return [
                SELECT Account_Name__c,Name,Account_Type__c,Balance__c,Bank__r.Bank_Name__c
                FROM Bank_Account__c 
                WITH SECURITY_ENFORCED
            ];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled(cacheable=true)
    public static List<Bank_Account__c> getSavingsAccountRecords(){
        try {
            return [
                SELECT Account_Name__c,Name,Account_Type__c,Balance__c,Bank__r.Bank_Name__c
                FROM Bank_Account__c 
                WHERE Account_Type__c='Saving'
                WITH SECURITY_ENFORCED
            ];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled(cacheable=true)
    public static List<Bank_Account__c> getSalaryAccountRecords(){
        try {
            return [
                SELECT Account_Name__c,Name,Account_Type__c,Balance__c,Bank__r.Bank_Name__c
                FROM Bank_Account__c 
                WHERE Account_Type__c='Salary'
                WITH SECURITY_ENFORCED
            ];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled(cacheable=true)
    public static List<Bank_Account__c> getCurrentAccountRecords(){
        try {
            return [
                SELECT Account_Name__c,Name,Account_Type__c,Balance__c,Bank__r.Bank_Name__c
                FROM Bank_Account__c 
                WHERE Account_Type__c='Current'
                WITH SECURITY_ENFORCED
            ];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}