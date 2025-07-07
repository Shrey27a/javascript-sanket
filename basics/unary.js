//pOSTFIX
let a=10;
let y=a++;// first value of 'a' which is 10 assigned to y so y=10 then only value od 'a's incremented so 'a'=11;--------- a=11,y=10
console.log(a,y);
a++;// here no assignment occurs only value of 'a' gets incremented --- as 'a'= 11 above so after incrementing the value of 'a' =12 and y is sill = 10;
console.log(a,y);


//PREFIX
let b = 10;
let c = ++b; // firstly value of 'b' gets incremented b=11 --- and then assigned to c=11--------- b=11,c=11
console.log(b, c)
b++ // here no assignment occurs only value of 'b' gets incremented --- as 'b'= 11 above so after incrementing the value of 'b' =12 and c is sill = 11;
console.log(b, c) ;