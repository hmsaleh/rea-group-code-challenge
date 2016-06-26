'use strict';

const DEFAULT_LOGO = 'http://placehold.it/170X32';
const DEFAULT_MAIN_IMAGE = 'http://placehold.it/640X480';

module.exports = ($scope, $q, Properties, ValidateProperty, PreloadImage) => {

    $scope.showSpinner = true;

    Properties.get().then((res) => {

        //1) get properties data
        let properties = res.data;

        //2) validate the existence of 'results' and 'saves' arrays
        if (!properties || !Array.isArray(properties.results) || !Array.isArray(properties.saved)) {
            console.error('properties response is not valid');
            return;
        }

        //3) validate properties data & preload images
        let imagesPromise = [];
        properties.results.forEach((property) => {
            imagesPromise = imagesPromise.concat($scope.prepareProperty(property, properties.results));
        });
        properties.saved.forEach((property) => {
            imagesPromise = imagesPromise.concat($scope.prepareProperty(property, properties.saved));
        });

        //4) serve data
        $q.all(imagesPromise)
            .finally(() => {
                $scope.properties = properties;
                $scope.showSpinner = false;
            });
    });

    /**
     *
     * @param property: Object
     */
    $scope.saveProperty = (property) => {
        if ('object' === typeof property && !$scope.isPropertySaved(property)) {
            $scope.properties.saved.push(property);
        }
    };

    /**
     *
     * @param property: Object
     * @param arr: Array
     */
    $scope.removeProperty = (property, arr) => {
        let propertyIndex = arr.indexOf(property);
        if (-1 !== propertyIndex) {
            arr.splice(propertyIndex, 1);
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

    /**
     *
     * @param property: Object
     * @param arr: Array
     * @returns {Array}
     */
    $scope.prepareProperty = (property, arr) => {
        let imagesPromise = [];
        if (ValidateProperty(property)) {
            imagesPromise.push(PreloadImage(property.agency.logo)
                .catch(() => {
                    property.agency.logo = DEFAULT_LOGO;
                }));
            imagesPromise.push(PreloadImage(property.mainImage)
                .catch(() => {
                    property.mainImage = DEFAULT_MAIN_IMAGE;
                }));
            if('#' !== property.agency.brandingColors.primary[0]) {
                property.agency.brandingColors.primary = '#' + property.agency.brandingColors.primary;
            }
        } else {
            $scope.removeProperty(property, arr);
            console.error('invalid property', property);
        }
        return imagesPromise;
    };
};