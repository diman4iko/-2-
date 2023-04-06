//BEGIN
import crc32 from "crc-32";
export const make = (capacity = 1000) => {
    let obj = [];
    obj.length = capacity;
    return obj;}
export const set = (obj, key, value) => {
    let index = crc32.str(key) % obj.length;
    if (obj[index] && obj[index][0] != key) {
        return false;
    } else {
        obj[index] = [key, value];
    }
    return true;}
export const get = (obj, key, value = null) => {
    let index = crc32.str(key) % obj.length;
    return obj[index] && obj[index][0] == key ? obj[index][1] : value;}
export default { make, set, get };





//END