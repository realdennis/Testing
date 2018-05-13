var assert = require('assert');
var equal = assert.equal;

var nd = require('../nextDate/nextDate');
describe('Next Date test',()=>{
    describe('Boundary Value',()=>{
        it('Weak normal',()=>{
            equal(nd(1900,6,15),'1900/6/16');
            equal(nd(1901,6,15),'1901/6/16');
            equal(nd(1962,6,15),'1962/6/15');
        });
        it('Strong normal',()=>{
            equal(nd(1900,6,15),'1900/6/16');
            equal(nd(1962,1,15),'1962/1/16');
            equal(nd(1962,6,1),'1962/6/2');
        });
        it('Weak robust',()=>{
            equal(nd(1899,6,15),'1899/6/16');
            equal(nd(1900,6,15),'1900/6/16');
            equal(nd(1901,6,15),'1901/6/16');
        })
    }),
    describe('Code Coverage',()=>{
        it('c0',()=>{
        })
        it('c1',()=>{
        });
        it('c2',()=>{
        });
        it('MCDC',()=>{
        })
    })
})


