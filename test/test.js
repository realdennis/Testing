var assert = require('assert');
var equal = assert.equal;

//Triangle
var tri = require('../tri/tri');
describe('Triangle test',()=>{
    describe('Code Coverage',()=>{
        it('c0',()=>{
            equal(tri(5,5,5),'Equilateral');
        })
        it('c1',()=>{
            equal(tri(5,5,5),'Equilateral');
            equal(tri(-1,-1,-1),'Not a triangle');
            equal(tri(5,5,10),'Not a triangle');
            equal(tri(3, 3, 5), "Isosceles");
            equal(tri(3, 5, 3), "Isosceles");
            equal(tri(5, 3, 3), "Isosceles");
            equal(tri(3, 4, 5), "Scalene");
        });
        it('c2',()=>{
            equal(tri(5,5,5),'Equilateral');
            equal(tri(-1-1-1),'Not a triangle');
            equal(tri(5,5,10),'Not a triangle');
        });
        it('MCDC',()=>{
            equal(tri(3,3,5),'Isosceles');
            equal(tri(3,5,3),'Isosceles');
            equal(tri(5,3,3),'Isosceles');
        })
    })
})


tri(1,2,3)
