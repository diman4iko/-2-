export const cloneShallow = (object) => {
    if (!object || typeof object !== 'object') return object;
    let newobject = {};
    for (let key in object) {
        newobject[key] = cloneShallow(object[key]);
    }
    return newobject;}
export default cloneShallow;








//END