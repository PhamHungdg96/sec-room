import {MiddlewareRegistry} from '../../../redux'
import {Load_data} from './action'
import {LOAD_DATA} from './actionType'

MiddlewareRegistry.register(store=>next=>action=>{
    const result = next(action);
    switch (action.type) {
        case LOAD_DATA:
            console.log("HUNG_MIDDLE")
            
            return result
    }
})