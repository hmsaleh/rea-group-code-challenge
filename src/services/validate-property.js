'use strict';

let validator = require('validator');

module.exports = () => {
    return (property) => {
        try {
            if ('object' !== typeof property ||
                !validator.isCurrency(property.price) ||
                'object' !== typeof property.agency ||
                'object' !== typeof property.agency.brandingColors ||
                !validator.isHexColor(property.agency.brandingColors.primary) ||
                !validator.isURL(property.agency.logo) ||
                !validator.isNumeric(property.id) ||
                !validator.isURL(property.mainImage)
            ) {
                return false;
            }
            return true;
        }
        catch (error) {
            return false;
        }
    };
};