import {ReducerRegistry} from '../../../redux'
import {LOAD_DATA} from './actionType'

const DEFAULT_STATE = {
    rooms:[{
        img:'/images/plant.jpg',
        title:'Introductory Researching',
        content:'A brief introduction to research skills for pentesting.',
        tag:['linux']
    }]
};

ReducerRegistry.register('Main/ListRoom',(state=DEFAULT_STATE, action)=>{
    switch(action.type){
        case LOAD_DATA:
            const rooms = action.payload
            return {...state, rooms}
    }
    return state
})