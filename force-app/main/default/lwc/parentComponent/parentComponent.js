import { LightningElement } from 'lwc';


 

export default class parentComponent extends LightningElement {

    visible=true;

    toggleChild() {

        this.visible = !this.visible;

    }

    // 1. constructor() works only with private properties

    constructor() {

        super(); // Always call super() in constructor

        console.log('constructor() called: Component is being created');

    }

 

    // 2. connectedCallback() public property, event registration, calling imperative methods,

    connectedCallback() {

        console.log('connectedCallback() called: Component is inserted into the DOM');

        // Example: Fetching data when the component is inserted into the DOM

        this.fetchData();

    }

 

    // 3. renderedCallback()

    renderedCallback() {

        console.log('renderedCallback() called: Component has been rendered');

        // Example: Perform actions that require DOM manipulation after render

    }

 

    // 4. disconnectedCallback()

    disconnectedCallback() {

        console.log('disconnectedCallback() called: Component is removed from the DOM');

        // Example: Clean up listeners or timers when the component is removed

    }

 

    // 5. errorCallback(error, stack)

    errorCallback(error, stack) {

        console.error('errorCallback() called: An error occurred');

        console.error('Error:', error.message);

        console.error('Stack:', stack);

    }

 

   

    // Example method simulating data fetching when connected to the DOM

    fetchData() {

        console.log('Fetching data...'); // Simulate data fetching process

        // Simulate an asynchronous operation like an API call here

    }

   

}