import { LightningElement, wire } from 'lwc';

//LMS: 1 & 2 imports

import ASC from '@salesforce/messageChannel/AccountSearchChannel__c';

import {publish, MessageContext } from 'lightning/messageService';

 

import getAccounts from '@salesforce/apex/CaseStudyController.getAccounts';

export default class AccountSearchResult extends LightningElement {

 

    //LMS: 3 Wire MessageContext

    @wire(MessageContext) msgCtx;

   

    searchText;

    searchResult;

 

    handleSearch(event){

           this.searchText = event.detail.searchText;

            //imperative call

           getAccounts({searchText: this.searchText})

           .then((result)=>{

           // alert(JSON.stringify(result));

            this.searchResult = result;

           })

           .catch(()=>{

               

           })

 

    }

 

    handleClick(event){

            //Get the reference of the tr

            const trRef = event.currentTarget;

 

            //Get the attribute value - data-sid

            const sid = trRef.getAttribute('data-sid');

            console.log('You have clicked on '+sid);

           

            //LMS: 4

            publish(this.msgCtx,ASC,{sid});

 

    }




}