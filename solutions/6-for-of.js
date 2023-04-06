export const pick = (obj, param) => {
    let newobject = {};
    for (let key in obj) {
        if (param.includes(key)) {
            newobject[key] = obj[key];}}
    return newobject;}
export default pick;
