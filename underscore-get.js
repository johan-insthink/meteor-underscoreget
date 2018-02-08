
_.get = function(object, path, defaultValue) {
    const value = path.split('.').reduce((nestedObj, nestedPath) => {
        try {
            if (nestedObj && nestedPath in nestedObj) {
                return nestedObj[nestedPath];
            }
        } catch(err) {}
        return undefined;
    }, object);

    if (typeof value === "undefined" && typeof defaultValue !== "undefined") {
        return defaultValue;
    }
    return value;
}   

// To expose for testing
export const get = _.get;