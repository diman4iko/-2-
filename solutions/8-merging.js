export const fill = (object, keys, data) => {
    if (keys.length) {
        return keys.reduce((a, b) => {
            a[b] = data[b];
            return a;
        }, object);
    } else {
        for (let key in data) {
            object[key] = data[key];
        }
        return object;}}
export default fill;




//END