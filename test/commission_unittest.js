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
            equal(com(-1,20,20),'Out of range value');
            equal(com(0,20,20),'Out of range value');
            equal(com(71,20,20),'Out of range value');
            equal(com(20,0,20),'Out of range value');
            equal(com(20,20,91),'Out of range value');
            equal(com(1,1,1),10.0);
            equal(com(1,20,20),121.75);
            equal(com(20,20,20),260.0);
        })
        it('c1',()=>{
            equal(com(-1,20,20),'Out of range value');
            equal(com(0,20,20),'Out of range value');
            equal(com(0,20,20),'Out of range value');
            equal(com(71,20,20),'Out of range value');
            equal(com(20,0,20),'Out of range value');
            equal(com(20,20,91),'Out of range value');
            //sales <= 1000
            equal(com(1,1,1),10.0);
            //sales >1000 & sales <=1800;
            equal(com(1,20,20),121.75);
            //sales>1800
            equal(com(20,20,20),260.0);
        });
        it('c2',()=>{
            //terminated
            equal(com(-1,20,20),'Out of range value');
            //invalid
            equal(com(0,20,20),'Out of range value');
            equal(com(0,20,20),'Out of range value');
            equal(com(71,20,20),'Out of range value');
            equal(com(20,0,20),'Out of range value');
            equal(com(20,20,91),'Out of range value'); 
            //sales <= 1000
            equal(com(1,1,1),10.0);
            //sales >1000 & sales <=1800;
            equal(com(1,20,20),121.75);
            //sales>1800
            equal(com(20,20,20),260.0);

        });
        it('MCDC',()=>{            
            //terminated
            equal(com(-1,20,20),'Out of range value');
            //invalid
            equal(com(0,20,20),'Out of range value');
            equal(com(0,20,20),'Out of range value');
            equal(com(71,20,20),'Out of range value');
            equal(com(20,0,20),'Out of range value');
            equal(com(20,20,91),'Out of range value'); 
            //sales <= 1000
            equal(com(1,1,1),10.0);
            //sales >1000 & sales <=1800;
            equal(com(1,20,20),121.75);
            //sales>1800
            equal(com(20,20,20),260.0);
        })
    })
})


