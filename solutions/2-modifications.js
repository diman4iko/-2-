export const normalize = (object) => {
    object.name = object.name[0] ? object.name[0].toUpperCase() + object.name.slice(1).toLowerCase() : "";
    object.description = object.description.toLowerCase();}
export default normalize;
