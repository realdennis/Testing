var assert = require('assert');
var equal = assert.equal;

var nd = require('../nextDate/nextDate');
describe('Next Date test',()=>{
    describe('Boundary Value',()=>{
        it('Weak normal',()=>{
            equal(nd(1900,6,15),'1900/6/16');
            equal(nd(1901,6,15),'1901/6/16');
            equal(nd(1962,6,15),'1962/6/16');
        });
        it('Strong normal',()=>{
            equal(nd(1900,6,15),'1900/6/16');
            equal(nd(1962,1,15),'1962/1/16');
            equal(nd(1962,6,1),'1962/6/2');
        });
        it('Weak robust',()=>{
            equal(nd(1899,6,15),'Out of range value');
            equal(nd(1900,6,15),'1900/6/16');
            equal(nd(1901,6,15),'1901/6/16');
        })
    }),
    describe('Path Testing',()=>{
        it('c0',()=>{
            equal(nd(1811,1,0),'Out of range value');
            equal(nd(2000,2,29),'2000/3/1');
            equal(nd(2004,2,28),'2004/2/29');
            equal(nd(2005,2,28),'2005/3/1');
            equal(nd(2004,2,20),'2004/2/21');
            equal(nd(2012,12,31),'2013/1/1');
            equal(nd(2004,12,31),'2005/1/1')
        })
        it('c1',()=>{
            equal(nd(2004,12,31),'2005/1/1');
            equal(nd(2004,3,30),'2004/3/31');
            equal(nd(2004,4,22),'2004/4/23');
            equal(nd(2004,6,10),'2004/6/11');
            equal(nd(2004,9,14),'2004/9/15');
            equal(nd(2004,11,29),'2004/11/30');
            equal(nd(2004,1,31),'2004/2/1');
            equal(nd(2004,1,29),'2004/1/30');
        });
        it('c2',()=>{
            equal(nd())
        });
        it('MCDC',()=>{
        })
    })
})


