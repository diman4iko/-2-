export const is = (object_one, object_two) => {
    if (object_one.name == object_two.name && object_one.state == object_two.state && object_one.website == object_two.website) {
        return true;}
    return false;}
export default is;
