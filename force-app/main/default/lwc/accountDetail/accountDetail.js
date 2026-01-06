import { LightningElement, wire } from 'lwc';

 

//Import fields for static schema approach

import CITY from '@salesforce/schema/Account.BillingCity';

import COUNTRY from '@salesforce/schema/Account.BillingCountry';

 

//LMS: 1 & 2 imports

import ASC from '@salesforce/messageChannel/AccountSearchChannel__c';

import { subscribe, MessageContext } from 'lightning/messageService';

 

//Navigations purpose

import { NavigationMixin } from 'lightning/navigation';

 

export default class AccountDetail extends NavigationMixin(LightningElement) {

 

    city = CITY;

    country = COUNTRY;

 

    //LMS: 3 Wire MessageContext

    @wire(MessageContext) msgCtx;

 

    //Define a property to store the salesforce Id coming from accountSearchResult

    accountId;

 

    connectedCallback() {

        subscribe(this.msgCtx, ASC, (message) => {

            this.accountId = message.sid;

        });

    }

 

    editRecord() {

        this[NavigationMixin.Navigate]({

            type: 'standard__recordPage',

            attributes: {

                recordId: this.accountId,

                objectApiName: 'Account',

                actionName: 'edit'

            }

        });

    }

 

    viewRecord() {

        this[NavigationMixin.Navigate]({

            type: 'standard__recordPage',

            attributes: {

                recordId: this.accountId,

                objectApiName: 'Account',

                actionName: 'view'

            }

        });

 

    }

}

 

