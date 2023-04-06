
export const getSortedNames = (object) => {
    let newarray = [];
    for (let key in object) {
        let { name: name } = object[key];
        newarray.push(name);
    }
    return newarray.sort();}
export default getSortedNames;
