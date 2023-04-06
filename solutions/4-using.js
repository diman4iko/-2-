export const getDomainInfo = (website) => {
    let schemeindex = website.search("://");
    let object = {
        scheme: schemeindex != -1 ? website.slice(0, schemeindex) : "http",
        name: website.slice(schemeindex != -1 ? schemeindex + 3 : 0),
    };
    return object;}
export default getDomainInfo;
