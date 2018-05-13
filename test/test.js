var assert = require('assert');
var equal = assert.equal;

var tri = require('../tri');
describe('Triangle test',()=>{
    describe('Code Coverage',()=>{
        it('c0',()=>{
            equal(tri(5,5,5),'Equilateral');
        })
        it('c1',()=>{
            equal(tri(5,5,5),'Equilateral');
            equal(tri(-1,-1,-1),'Not a triangle');
            equal(tri(5,5,10),'Not a triangle');
        });
        it('c1',()=>{
            equal(tri(5,5,5),'Equilateral');
            equal(tri(-1-1-1),'Not a triangle');
            equal(tri(5,5,10),'Not a triangle');
        })
    })
})


tri(1,2,3)
