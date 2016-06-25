'use strict';

module.exports = function ($http) {
    /**
     *
     * request properties data
     */
    let properties = $http.get('data/properties.json').success(function (response) {
        return response;
    });
    return {
        /**
         *
         * @returns {*}
         */
        get: function () {
            return properties;
        }
    };
};