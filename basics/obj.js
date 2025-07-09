let x = {name:"Shreya" , age : 20};
let y = {name:"Sharma" , age : 18};

console.log(x["name"]);
console.log(y.name); 


y.name="Tanmay";
console.log(y);


//how to add new property to an already created object?
x.marks = 100;
x["company"] = "Google";
console.log(x);


//delete a key value pair 
//use delete operator alonh with object.key
delete x.name;
console.log(x);