import getPositionRecords from '@salesforce/apex/PositionController.getPositionRecords';
import getNewPositionRecords from '@salesforce/apex/PositionController.getNewPositionRecords';
import getOpenPositionRecords from '@salesforce/apex/PositionController.getOpenPositionRecords';
import getClosePositionRecords from '@salesforce/apex/PositionController.getClosePositionRecords';

import { LightningElement } from 'lwc';

export default class PositionCompV3 extends LightningElement {
    posList;
    posError;

connectedCallback(){
    this.loadAllPositions();
}
loadAllPositions(){
    getPositionRecords()
    .then((res)=>{this.posList=res;})
    .catch((issue)=>{this.posError=issue.body.message;})

}
loadAllOpenPositions(){
    getOpenPositionRecords()
     .then((res)=>{this.posList=res;})
    .catch((issue)=>{this.posError=issue.body.message;})


}
loadAllNewPositions(){

    getNewPositionRecords()
     .then((res)=>{this.posList=res;})
    .catch((issue)=>{this.posError=issue.body.message;})


}
loadAllClosePositions(){

    getClosePositionRecords()
     .then((res)=>{this.posList=res;})
    .catch((issue)=>{this.posError=issue.body.message;})


}
   
}