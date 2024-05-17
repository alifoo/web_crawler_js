function normalizeURL(url) {
    const prefix1 = "http://";
    const prefix2 = "https://";
    if (typeof url !== 'string' || (!url.startsWith(prefix1) && !url.startsWith(prefix2))) {
        throw new Error("Invalid input");
    };

    let normalizedURL;
    
    if (url.startsWith(prefix1)) {
        normalizedURL = url.replace(prefix1, '');
        if (normalizedURL.endsWith('/')){
            return normalizedURL.slice(0, -1);
        }
        return normalizedURL;
    };

    if (url.startsWith(prefix2)) {
        normalizedURL = url.replace(prefix2, '');
        if (normalizedURL.endsWith('/')){
            return normalizedURL.slice(0, -1);
        }
        return normalizedURL;
    };
}


export { normalizeURL };