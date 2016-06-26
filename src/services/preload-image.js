'use strict';

module.exports = ($q) => {
    return (src) => {
        const TIMEOUT = 5000;
        var deferred = $q.defer();
        try {
            let img = document.createElement('img');
            img.onload = () => {
                deferred.resolve();
            };
            img.onerror = () => {
                deferred.reject('image loading failed: ' + src);
            };
            img.src = src;
            setTimeout(() => {
                deferred.reject('image loading timed out after ' + TIMEOUT + ' ms');
            }, TIMEOUT);
        } catch (error) {
            deferred.reject('image loading failed: ' + src);
        }
        return deferred.promise;
    };
};