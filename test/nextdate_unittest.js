var assert = require('assert');
var equal = assert.equal;

var nd = require('../NextDate/nextDate');
describe('Next Date test',()=>{
    /* Home work 1
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
    */
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
            // Actually NextDate Problem doesn't have a Loop
            /*
            equal(nd(1900,2,28),'1900/2/29');
            equal(nd(2000,2,29),'2000/3/1');
            equal(nd(2000,5,31),'2000/6/1');
            equal(nd(2000,6,30),'2000/7/1');
            equal(nd(2000,8,31),'2000/9/1');
            equal(nd(2000,9,30),'2000/10/1');
            equal(nd(2000,8,25),'2000/8/26');
            */
        });
        it('MCDC',()=>{
            //action to Year + 1, Month = 1, Day = 1
            equal(nd(2013,12,31),'2014/1/1');
            equal(nd(2014,12,31),'2015/1/1');

            //action to Year, Month + 1, Day = 1
            equal(nd(2013,1,31),'2013/2/1');
            equal(nd(2013,4,30),'2013/5/1');
            equal(nd(2014,2,28),'2014/3/1');
            equal(nd(2012,2,29),'2012/3/1');

            //action to Year, Month, Day + 1
            equal(nd(2015,1,1),'2015/1/2');
            equal(nd(2015,2,1),'2015/2/2');


            //Date out of range
            equal(nd(1900,8,0),'Out of range value');
            equal(nd(1900,6,31),'Invalid date');
            equal(nd(2001,2,29),'Invalid date');
            equal(nd(1900,2,30),'Invalid date');

        })
    })
})


