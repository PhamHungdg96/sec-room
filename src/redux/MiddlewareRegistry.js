import {applyMiddleware} from 'redux';
import type {Middleware} from 'redux';

class MiddlewareRegistry {
    _elements:Array<Middleware<*, *>>;
    constructor(){
        this._elements=[]
    }
    applyMiddleware(...additional: Array<Middleware<*, *>>) {
        // $FlowExpectedError
        return applyMiddleware(...this._elements, ...additional);
    }
    register(middleware: Middleware<*, *>) {
        this._elements.push(middleware);
    }
}

export default new MiddlewareRegistry();