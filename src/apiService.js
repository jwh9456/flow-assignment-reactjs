import axios from 'axios';
import _ from 'lodash';

const apiServiceAgent = "http://jwh9456.asuscomm.com:5000/flow-assigns/"

export const getData = async (param) => {
    try {
        return await axios.get(apiServiceAgent + param).then(res => res.data)
    }
    catch (error) {
        return error;
    }
}

export const delData = (param) => {
    try {
        axios.get(apiServiceAgent).then(res=>{
            var delkey = _.find(res.data,{ExtName:param})
            axios.delete(apiServiceAgent + delkey.id).then(console.log("deled"))
        })
        
    }
    catch (error) {
        return error;
    }
}

export const addData = (param) => {
    try {
        axios.post(apiServiceAgent,
            {
                ExtName: param,
                ExtType: 'custom'
            },
        ).then(res => {
            console.log(res)
        })
    }
    catch (error) {
        return error;
    }
}

export const putData = (param,bool) => {
    try {
        axios.get(apiServiceAgent).then(res=>{
            var postkey = _.find(res.data,{ExtName:param})
            axios.put(apiServiceAgent + postkey.id,
                {
                    isChecked:bool
                }
                ).then(console.log("putd"))
        })
    }
    catch (error) {
        return error;
    }
}