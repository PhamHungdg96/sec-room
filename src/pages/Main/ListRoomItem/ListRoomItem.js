import React from 'react'
import RoomItem from '../../../components/roomitem/RoomItem'
import { connect as reactReduxConnect } from '../../../redux';
import {Load_data} from './action'
import type { Dispatch } from 'redux';
import axios from 'axios';
function _mapStateToProps(state) {
    return {
        rooms:state['Main/ListRoom'].rooms
    };
}

const apiUrl = 'http://45.32.252.246:8000'

axios.interceptors.request.use(
    config => {
        const { origin } = new URL(config.url);
        const allowedOrigins = [apiUrl];
        const token = localStorage.getItem('user_token');
        if (allowedOrigins.includes(origin)) {
            config.headers.authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
  );

function _mapDispatchToProps(dispatch: Dispatch<any>) {
    return{
        load_data(){
            const { data } = axios.get(`${apiUrl}/api/courses/`)
            .then(res => res.data)
            .then(data => {
                return dispatch(Load_data(data));
            })
            .catch(error => {
                console.log(error)
            });
        }
    } 
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