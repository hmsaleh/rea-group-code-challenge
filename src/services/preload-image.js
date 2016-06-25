'use strict';

module.exports = ($q) => {
    return (src) => {
        let timeout = 5000;
        var deferred = $q.defer();
        try {
            let img = new Image();
            img.onload = () => {
                deferred.resolve();
            };
            img.onerror = () => {
                deferred.reject('image loading failed: ' + src);
            };
            img.src = src;
            setTimeout(function () {
                deferred.reject('image loading timed out after ' + timeout + ' ms');
            }, timeout);
        } catch (error) {
            deferred.reject('image loading failed: ' + src);
        }
        return deferred.promise;
    };
};