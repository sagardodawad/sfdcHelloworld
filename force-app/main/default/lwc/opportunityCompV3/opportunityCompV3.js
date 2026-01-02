import { LightningElement } from 'lwc';

import getWonOpportunities from '@salesforce/apex/OpportunityController.getWonOpportunities';

import getLostOpportunities from '@salesforce/apex/OpportunityController.getLostOpportunities';

import getAllOpportunities from '@salesforce/apex/OpportunityController.getAllOpportunities';

 

export default class OpportunityCompV3 extends LightningElement {

    //properties

    oppList;  // list of opportunity records

    oppError; // error message

 

   connectedCallback() {   // life cycle hooks

     this.loadAllDeals(); //Prefetch via imperative approach

   }

 

   loadAllDeals(){

        //Use Imperative approach to call the apex method

       

        getAllOpportunities() //Calling the Apex method explicitly, it returns a JS Promise

        .then((result)=>{

            this.oppList = result;

        })

        .catch((issue)=>{

           this.oppError = issue.body.message; //System.debug(ex.getMessage());

        })

    }

 

    loadWonDeals(){

        //Use Imperative approach to call the apex method

        getWonOpportunities() //Calling the Apex method explicitly, it returns a JS Promise

        .then((result)=>{

            this.oppList = result;

        })

        .catch((issue)=>{

           this.oppError = issue.body.message; //System.debug(ex.getMessage());

        })

    }

 

     loadLostDeals(){

        getLostOpportunities() //Calling the Apex method explicitly, it returns a JS Promise

        .then((result)=>{

            this.oppList = result;

        })

        .catch((issue)=>{

           this.oppError =issue.body.message;

        })

    }

 

}

 