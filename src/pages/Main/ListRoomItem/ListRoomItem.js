import React from 'react'
import RoomItem from '../../../components/roomitem/RoomItem'
import { connect as reactReduxConnect } from '../../../redux';
import {Load_data} from './action'
import type { Dispatch } from 'redux';
import {setCookie, getCookie} from '../../../redux'
import axios from 'axios'
function _mapStateToProps(state) {
    return {
        rooms:state['Main/ListRoom'].rooms
    };
}
function _mapDispatchToProps(dispatch: Dispatch<any>) {
    return {
        
        load_data(){
            axios({
                url:"http://45.32.252.246:8000/api/token/",
                headers:{
                    "Content-Type":'application/json'
                },
                method:'POST',
                data:JSON.stringify({
                    "username":"admin",
                    "password":"123456aA@"
                })
            })
            .then(res=>{
                // console.log(res.data)
                setCookie("app-token",JSON.stringify(res.data),1);
            })
            .catch(error => {
            })
            console.log(JSON.parse(getCookie("app-token")).access)
            axios({
                url:"http://45.32.252.246:8000/api/courses/",
                method:'GET',
                headers:{
                    'Authorization': "Bearer "+JSON.parse(getCookie("app-token")).access
                }
            })
            .then(res => {
                console.log(res)
                if(res.error) {
                    throw(res.error);
                }
                var rooms=[]
                function gettag(categories){
                    var tags=[]
                    categories.map(item=>{
                        tags.push(item.name)
                    })
                    return tags
                }
                res.data.map(item=>{
                    rooms.push({
                        img: item.logo,
                        title: item.name,
                        content: item.description,
                        tag: gettag(item.categories),
                    })
                })
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