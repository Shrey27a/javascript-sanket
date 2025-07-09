function solve(a,b,c){
    let sqrtValue = Math.sqrt(b*b - (4*a*c));
    let root1 = (-b + sqrtValue)/(2*a);
    let root2 = (-b - sqrtValue) / (2*a);

    console.log('Root 1:', root1)
    console.log('Root 2:', root2)
  
}

solve(2,5,3);


 

