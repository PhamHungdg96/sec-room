import {combineReducers} from 'redux';
import type {Reducer} from 'redux';

declare type NameReducerMap<S, A> = {[name: string]: Reducer<S, A>};

class ReducerRegistry{
    _element: NameReducerMap<*, *>;
    constructor(){
        this._elements=[]
    }
    combineReducers(additional: NameReducerMap<*, *> = {}) {
        // $FlowExpectedError
        return combineReducers({
            ...this._elements,
            ...additional
        });
    }
    register(name: string, reducer: Reducer<*, *>) {
        this._elements[name] = reducer;
    }
}
export default new ReducerRegistry();