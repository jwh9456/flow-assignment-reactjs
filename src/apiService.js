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
        axios.get(apiServiceAgent).then(res => {
            var delkey = _.find(res.data, { ExtName: param })
            axios.delete(apiServiceAgent + delkey.id).then(console.log("deled"))
        })

    }
    catch (error) {
        return error;
    }
}

export const addData = (param) => {
    try {
        axios.get(apiServiceAgent + 'count').then(
            res => res.data >= 207 ?
                alert("커스텀 확장자는 200개를 초과할 수 없습니다") :
                (axios.post(apiServiceAgent, { ExtName: param, ExtType: 'custom' }))
                // 다른 사용자들로 인해 이미 추가된 경우
        )
    }
    catch (error) {
        console.log(error)
    }
}

export const putData = (param, bool) => {
    try {
        axios.get(apiServiceAgent).then(res => {
            var postkey = _.find(res.data, { ExtName: param })
            axios.put(apiServiceAgent + postkey.id,
                {
                    isChecked: bool
                }
            ).then(console.log("putd"))
        })
    }
    catch (error) {
        return error;
    }
}