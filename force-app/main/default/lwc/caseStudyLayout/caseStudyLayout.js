import { LightningElement } from 'lwc';

export default class CaseStudyLayout extends LightningElement {

 

    selectedItem;

 

    handleNavigation(event){

       this.selectedItem = event.detail.item;

       console.log('Layout has received '+this.selectedItem);

    }

 

    //Define getter methods to check what is there in selectedItem and return accordingly

    get isSearch(){

        return this.selectedItem === 'search';

    }

 

    get isCalculator(){

        return this.selectedItem === 'calc';

    }

 

    get isDeal(){

        return this.selectedItem === 'deal';

    }

 

     get isGraph(){

        return this.selectedItem === 'graph';

    }

 

}

 