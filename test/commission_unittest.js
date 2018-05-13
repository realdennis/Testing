var assert = require('assert');
var equal = assert.equal;

var com = require('../Commission/Commission');
describe('Next Date test',()=>{
    describe('Boundary Value',()=>{
        it('Weak normal',()=>{
            equal(com(1,1,1),10);
            equal(com(1,1,2),12.5);
            equal(com(18,18,18),220);
        });
        it('Weak robust',()=>{
            equal(com(0,48,48),'Out of range value');
            equal(com(48,0,48),'Out of range value');
            equal(com(48,48,0),'Out of range value');
        })
    }),
    describe('Path Testing',()=>{
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


