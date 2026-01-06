import { LightningElement } from 'lwc';

export default class CaseStudyNavigation extends LightningElement {

 

   handleSelect(event){

     const item = event.detail.name;

     console.log('You have selected '+item);

     this.notifyParent(item);

 

   }

 

   //child to parent communication

    notifyParent(item){

        const eventRef = new CustomEvent('navigation',{detail : {item}});

        this.dispatchEvent(eventRef);

    }

 

}