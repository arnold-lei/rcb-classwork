'use strict';

var Nightmare = require('nightmare');
var should = require('chai').should();

var add = require('../sum');

describe('Amazon', function(){
    it('Add item to cart', function(){
        var nightmare = new Nightmare({
            show: true
        });
        nightmare.goto('https://www.amazon.com/')
            .click('a[href*="/gp/goldbox/ref=nav_cs_gb"]')
            .run()
    })

})
