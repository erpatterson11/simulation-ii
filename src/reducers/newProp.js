import axios from 'axios'

const initialState = {
    name: "",
    desc: "",
    imgUrl: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    loan: "",
    monthlyMortgage: "",
    desiredRent: "",
    submitPending: false
}

const STEP_ONE = 'STEP_ONE'
const STEP_TWO = 'STEP_TWO'
const STEP_THREE = 'STEP_THREE'
const STEP_FOUR = 'STEP_FOUR'
const STEP_FIVE = 'STEP_FIVE'
const SUBMIT_NEW_PROP = 'SUBMIT_NEW_PROP'


export default function(state = initialState, action) {
    switch(action.type) {
        case STEP_ONE: 
            return Object.assign({}, state, {name: action.payload.name, desc: action.payload.desc})
        case STEP_TWO: 
            return Object.assign({}, state, {address: action.payload.address, city: action.payload.city, state: action.payload.state, zip: action.payload.zip})
        case STEP_THREE: 
            return Object.assign({}, state, {imgUrl: action.payload.imgUrl})
        case STEP_FOUR: 
            return Object.assign({}, state, {loan: action.payload.loan, monthlyMortgage: action.payload.monthlyMortgage})
        case STEP_FIVE: 
            return Object.assign({}, state, {desiredRent: action.payload.desiredRent})
        case SUBMIT_NEW_PROP + 'PENDING': 
            return Object.assign({}, state, {submitPending: true})
        case SUBMIT_NEW_PROP + 'FULFILLED': 
            return Object.assign({}, initialState)
        default: 
            return state
    }
}

export function submitStepOne({name, desc}) {
    return {
        type: STEP_ONE,
        payload: {
            name,
            desc
        }
    }
}

export function submitStepTwo({address, city, state, zip}) {
    return {
        type: STEP_TWO,
        payload: {
            address,
            city,
            state,
            zip
        }
    }
}

export function submitStepThree({imgUrl}) {
    return {
        type: STEP_THREE,
        payload: {
            imgUrl
        }
    }
}

export function submitStepFour({loan, monthlyMortgage}) {
    return {
        type: STEP_FOUR,
        payload: {
            loan,
            monthlyMortgage
        }
    }
}

export function submitStepFive({desiredRent}) {
    return {
        type: STEP_FIVE,
        payload: {
            desiredRent
        }
    }
}

const postNewProp = (prop) => {
    axios.post('/api/properties', prop).then( res => {
        console.log(res)
    })
}

export function submitNewProp(property) {
    return {
        type: SUBMIT_NEW_PROP,
        payload: postNewProp(property)
    }
}