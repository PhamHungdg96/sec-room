import React from 'react'
import RoomItem from '../../../components/roomitem/RoomItem'
import { connect as reactReduxConnect } from '../../../redux';
import {Load_data} from './action'
import type { Dispatch } from 'redux';

function _mapStateToProps(state) {
    return {
        rooms:state['Main/ListRoom'].rooms
    };
}
function _mapDispatchToProps(dispatch: Dispatch<any>) {
    return {
        load_data(){
            fetch('https://exampleapi.com/products')
            .then(res => res.json())
            .then(res => {
                if(res.error) {
                    throw(res.error);
                }
                return dispatch(Load_data(rooms));
            })
            .catch(error => {
            })
            // const rooms=[{
            //     img:'/images/plant.jpg',
            //     title:'Introductory Hung',
            //     content:'A brief introduction to Hung new store',
            //     tag:['linux']
            // }]
            
        }
    };
}

class ListRoomItem extends React.Component{
    // eslint-disable-next-line
    constructor(props){
        super(props)

    }
    componentWillMount() {
        const {load_data} = this.props;
        load_data();
    }
    render(){
        const {rooms}=this.props
        return (
                    <>
                        {rooms.map((r, id) => <RoomItem key={id} {...r}/>)}
                    </>
                )
    }
}

// function ListRoomItem(props){
//     const {rooms, load_data}=props
//     React.useEffect(()=>{
//         return () => load_data()
//     })
//     console.log("HUNG_LOG", rooms)
//     return (
//         <>
//             {rooms.map((r, id) => <RoomItem key={id} {...r}/>)}
//         </>
//     )
// }
export default reactReduxConnect(_mapStateToProps, _mapDispatchToProps)(ListRoomItem)