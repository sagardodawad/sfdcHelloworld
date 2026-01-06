//Import ShowToastEvent to display a toast message

import { ShowToastEvent} from 'lightning/platformShowToastEvent';

//Import LDS adapters

import { getFieldValue,getFieldDisplayValue } from 'lightning/uiRecordApi';

 

const _toastMessage = function(thisArg,title,message,variant){

    const eventRef = new ShowToastEvent({title,message,variant});

    thisArg.dispatchEvent(eventRef);  

 

}

 

//condition?true:false;

 

//uiRecordApi

const _getValue = (data,field)=>{

                return    getFieldDisplayValue(data,field)?

                    getFieldDisplayValue(data,field) :

                    getFieldValue(data,field);

}

 

export{

    _toastMessage,_getValue

}