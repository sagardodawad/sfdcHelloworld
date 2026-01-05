import { LightningElement } from 'lwc';

 

export default class childComponent extends LightningElement {

    // 1. constructor()

    constructor() {

        super(); // Always call super() in constructor

        console.log('constructor() called: Child Component is being created');

    }

 

    // 2. connectedCallback()

    connectedCallback() {

        console.log('connectedCallback() called: Child Component is inserted into the DOM');

        // Example: Fetching data when the component is inserted into the DOM

     

    }

 

    // 3. renderedCallback()

    renderedCallback() {

        console.log('renderedCallback() called: Child Component has been rendered');

        // Example: Perform actions that require DOM manipulation after render

    }

 

    // 4. disconnectedCallback()

    disconnectedCallback() {

        console.log('disconnectedCallback() called: Child Component is removed from the DOM');

        // Example: Clean up listeners or timers when the component is removed

    }

 

    // 5. errorCallback(error, stack)

    errorCallback(error, stack) {

        console.error('errorCallback() called: An error occurred');

        console.error('Error:', error.message);

        console.error('Stack:', stack);

    }

}