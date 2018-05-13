function isTriangle(a,b,c){
    if(a<(b+c) && b<(a+c) && c<(a+b)) return 1;
    return 0;
}

function typeOfTriangle(a,b,c){
    if(a!=b && b!=c && c!=a) return 'Scalene';
    else if(a==b & b==c) return 'Equilateral';
    return 'Isosceles';
}

function tri(a,b,c){
    if(isTriangle(a,b,c)) return typeOfTriangle(a,b,c);
    return 'Not a triangle';
}

//For test
module.exports = tri;
