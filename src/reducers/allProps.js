import axios from 'axios'


const initialState = {
    props: [],
    loading: false
}

const GET_PROPERTIES = 'GET_PROPERTIES'

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_PROPERTIES + 'PENDING':
            return Object.assign({}, state, {loading: true})
         case GET_PROPERTIES + 'FULFILLED':
            return Object.assign({}, state, {loading: false, props: action.payload})
        default: 
            return state
    }
}

const getPropertiesApiCall = () => {
    axios.get('/api/properties').then( res => {
        console.log(res.data);
        res.data 
    })
}

export function getProperties() {
    return {
        type: GET_PROPERTIES,
        payload: getPropertiesApiCall()
    }
}