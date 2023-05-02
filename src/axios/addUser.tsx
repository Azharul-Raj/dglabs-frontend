import axios from 'axios';
import { userProps } from '../types/type';


const addUser=(data:userProps)=>{
    axios.post(`https://dglabs-server.vercel.app/add_user`,data)
    .then(res=>{
        console.log(res.data);
        if(res.data){
            return res.data;
        }
    })
    .catch(err=>console.log(err))
}
export default addUser;