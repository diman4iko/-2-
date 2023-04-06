export const make = (string, data = {}) => {
    let obj_one = {
        name: string,
        state: "moderating"
    };
    return {...obj_one, ...data, createdAt: Date.now() };
}
export default make;
