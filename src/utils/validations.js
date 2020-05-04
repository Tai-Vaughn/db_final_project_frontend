let required = (property) => {
    return v => v && v.length > 0 || `You must input a ${property}`
}

let maxlength = (property,maxlength) => {
    return v => v && v.length <= maxlength || `${property} must be less than ${maxlength} character`
}

let emailFormat = () => {
    let regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return v => v && regex.test(v) || 'Invalid Email format'

}


export default {
    required,
    maxlength,
    emailFormat
}