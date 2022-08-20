import axios from 'axios';

const apiServiceAgent = "http://jwh9456.asuscomm.com:5000/flow-assigns/"

export const getData = async (param) => {
    try {
        return await axios.get(apiServiceAgent + param).then(res => res.data)
       
    }
    catch (error) {
        return error;
    }
}