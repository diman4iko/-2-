export const get = (object_for_start, param) => {
    return param.reduce((a, b) => a && Object.hasOwn(a, b) ? a[b] : null, object_for_start);}
export default get;
