var assert = require('assert');
var equal = assert.equal;

var tri = require('../Triangle/tri');
describe('Triangle test',()=>{
    describe('Path Testing',()=>{
        it('c0',()=>{
            equal(tri(5,5,5),'Equilateral');
            equal(tri(5,5,10),'Not a triangle');
            equal(tri(10,10,10),'Equilateral');
            equal(tri(13,12,5),'Scalene');
            equal(tri(10,10,5),'Isosceles');
            equal(tri(10,9,8),'Scalene')
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
            //Actually Triangle Problem doesn't have a loop
            /*
            equal(tri(5,5,5),'Equilateral');
            equal(tri(-1-1-1),'Not a triangle');
            equal(tri(5,5,10),'Not a triangle');
            equal(tri(3, 3, 5), "Isosceles");
            equal(tri(3, 5, 3), "Isosceles");
            equal(tri(5, 3, 3), "Isosceles");
            equal(tri(3, 4, 5), "Scalene");
            */
        });
        it('MCDC',()=>{
            //MCDC: a == b && b == c, FF, FT, TF, TT
            equal(tri(2,3,4),'Scalene');
            equal(tri(4,5,5),'Isosceles');
            equal(tri(5,5,4),'Isosceles');
            equal(tri(6,6,6),'Equilateral');
            //MCDC: a != b && b == c, FF, FT, TF, TT
            equal(tri(5, 5, 5), "Equilateral");
            equal(tri(0, 5, 5), "Not a triangle");
            equal(tri(201, 5, 5), "Not a triangle");
            equal(tri(5, 0, 5), "Not a triangle");
            equal(tri(5, 201, 5), "Not a triangle");
            equal(tri(5, 5, 0), "Not a triangle");
            equal(tri(5, 5, 201), "Not a triangle");
            equal(tri(-1, -1, -1), "Not a triangle");

            equal(tri(5, 5, 10), "Not a triangle");
            equal(tri(5, 10, 5), "Not a triangle");
            equal(tri(10, 5, 5), "Not a triangle");

            equal(tri(3,3,5),'Isosceles');
            equal(tri(3,5,3),'Isosceles');
            equal(tri(5,3,3),'Isosceles');
        })
    })
})


