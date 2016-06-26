'use strict';

let chai = require('chai');
let expect = chai.expect;
let clone = require('clone');

let inputSample = require('./input-sample');
let ValidateProperty = require('../src/services/validate-property')();

describe('Testing Property Validator', () => {

    let cases = [
        {
            desc: 'return false if property is not an object',
            getInput: () => {
                return inputSample.invalidObject;
            }
        },
        {
            desc: 'return false if price is not a valid currency',
            getInput: () => {
                let input = clone(inputSample.validProperty);
                input.price = inputSample.invalidCurrency;
                return input;
            }
        },
        {
            desc: 'return false if agency is not an object',
            getInput: () => {
                let input = clone(inputSample.validProperty);
                input.agency = inputSample.invalidObject;
                return input;
            }
        },
        {
            desc: 'return false if brandingColors is not an object',
            getInput: () => {
                let input = clone(inputSample.validProperty);
                input.agency.brandingColors = inputSample.invalidObject;
                return input;
            }
        },
        {
            desc: 'return false if primary is not a valid hex color',
            getInput: () => {
                let input = clone(inputSample.validProperty);
                input.agency.brandingColors.primary = inputSample.invalidHexColor;
                return input;
            }
        },
        {
            desc: 'return false if logo is not a valid URI',
            getInput: () => {
                let input = clone(inputSample.validProperty);
                input.agency.logo = inputSample.invalidURI;
                return input;
            }
        },
        {
            desc: 'return false if id is not a valid number',
            getInput: () => {
                let input = clone(inputSample.validProperty);
                input.mainImage = inputSample.invalidNumber;
                return input;
            }
        },
        {
            desc: 'return false if mainImage is not a valid URI',
            getInput: () => {
                let input = clone(inputSample.validProperty);
                input.price = inputSample.invalidURI;
                return input;
            }
        }
    ];

    cases.forEach((c) => {
        it(c.desc, () => {
            expect(
                ValidateProperty(c.getInput())
            ).to.be.false;
        });
    });

    it('return true if property is valid', () => {
        expect(
            ValidateProperty(inputSample.validProperty)
        ).to.be.true;
    });

});