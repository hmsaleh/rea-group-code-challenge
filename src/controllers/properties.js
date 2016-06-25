'use strict';

module.exports = ($scope, Properties) => {

    /**
     *
     * get properties data
     */
    Properties.get().then(function(res) {
        $scope.properties = res.data;
    });

    /**
     *
     * @param property: Object
     */
    $scope.addProperty = (property) => {
        if(!$scope.isPropertySaved(property)) {
            $scope.properties.saved.push(property);
        }
    };

    /**
     *
     * @param property: Object
     */
    $scope.removeProperty = (property) => {
        let propertyIndex = $scope.properties.saved.indexOf(property);
        if(-1 !== propertyIndex) {
            $scope.properties.saved.splice(propertyIndex, 1);
        }
    };

    /**
     *
     * @param property: Object
     * @returns {boolean}
     */
    $scope.isPropertySaved = (property) => {
        return -1 !== $scope.properties.saved.indexOf(property);
    };
};