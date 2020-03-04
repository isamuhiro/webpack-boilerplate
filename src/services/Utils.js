const Utils = {
    parseRequestURL: () => {
        let url = window.location.hash.slice(1).toLowerCase() || '/';
        let r = url.split("/")
        let request = {
            resource: null,
            id: null,
            verb: null
        }
        request.resource = r[1]
        request.id = r[2]
        request.verb = r[3]

        return request
    },
    sleep: (ms) => {
        return new Promise(resolve => window.setTimeout(resolve, ms));
    }
}

export default Utils;