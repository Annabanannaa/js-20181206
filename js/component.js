export default class Component {
    constructor({ element }){
        this._element = element;
    }

    hide(){
        this._element.hidden = true;
    }
    show(){
        this._element.hidden = false;
    }
    subscribe(eventName, callback){
        let eventCallbacks = this.callbackMap[eventName] || [];

        eventCallbacks.push(callback);

        this._callbackMap[eventName] = eventCallbacks;
    },

    emit(eventName, data){
        let eventCallbacks = this.callbackMap[eventName] || [];
        eventCallbacks.forEach(callback =>{
            callback(data);
        });
    },
}