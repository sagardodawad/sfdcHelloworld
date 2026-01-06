
import { LightningElement,wire,api } from 'lwc';

 

//Dynamic schema vs Static schema

//Applying static schema

//Applying LDS adapters - uiRecordApi

//One more utility function

//Wire dynamic - reactive

 

//Import fields for static schema approach

import CITY from '@salesforce/schema/Account.BillingCity';

import COUNTRY from '@salesforce/schema/Account.BillingCountry';

 

import { getRecord } from 'lightning/uiRecordApi';

import { _getValue } from 'c/utility';

 

export default class AccountMap extends LightningElement {

 

  //Define a public property to receive record Id from accountDetail

 @api

 selectedAccountId;

accountMapMarkers;

  //Wire dynamic - reactive - by using '$propertyName' approach

  @wire(getRecord,{recordId: '$selectedAccountId',fields: [CITY,COUNTRY]})

  loadRecord(response)

  {

     if(response.data){

       //alert(JSON.stringify(response.data));

       const City = _getValue(response.data,CITY);

       const Country = _getValue(response.data,COUNTRY);  

 

        this.accountMapMarkers = [

          {

            title:'Account Address',

            location: { City,Country},

            description: `You are viewing ${City} in ${Country}`

          }

      ];      

     }

  }




  //  connectedCallback() {

  //     this.accountMapMarkers = [

  //         {

  //           title:'Accenture Bangalore',

  //           location: {

  //               City: 'Bangalore',

  //               Country: 'India'

  //           },

  //           description: 'Accenture Solutions Pvt Ltd'

  //         }

  //     ];

  //  }

 

}

