import getBankAccountRecords from '@salesforce/apex/BankAccountController.getBankAccountRecords';
import getCurrentAccountRecords from '@salesforce/apex/BankAccountController.getCurrentAccountRecords';
import getSalaryAccountRecords from '@salesforce/apex/BankAccountController.getSalaryAccountRecords';
import getSavingsAccountRecords from '@salesforce/apex/BankAccountController.getSavingsAccountRecords';
import { LightningElement } from 'lwc';

export default class BankAccountComponentV2 extends LightningElement {

    accList;
    accError;

    connectedCallback(){
        this.getAllAccounts();
    }
    getAllAccounts(){
        getBankAccountRecords()
        .then(res=>{this.accList=res;})
        .catch(issue=>{
            this.accList=issue.body.message;
        })
    }
    getSavingAccounts(){
        getSavingsAccountRecords()
        .then(res=>{this.accList=res;})
        .catch(issue=>{
            this.accList=issue.body.message;
        })
    }
    getSalaryAccounts(){
        getSalaryAccountRecords()
        .then(res=>{this.accList=res;})
        .catch(issue=>{
            this.accList=issue.body.message;
        })
    }
    getCurrentAccounts(){
        getCurrentAccountRecords()
        .then(res=>{this.accList=res;})
        .catch(issue=>{
            this.accList=issue.body.message;
        })
    }
}