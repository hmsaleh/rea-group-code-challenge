'use strict';

module.exports = ($http) => {
    /**
     *
     * request properties data
     */
    let properties = $http.get('data/properties.json').success((response) => {
        return response;
    });
    return {
        /**
         *
         * @returns {*}
         */
        get: () => {
            return properties;
        }
    };
};