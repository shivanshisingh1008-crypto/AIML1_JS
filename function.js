function myFunction(){
  alert("hello world")
}

function sayHello(name,age){
  console.log(name + " is " + age +" year old");
}*/


var res=mul(12,30);
function mul(x,y){
  return x*y;
}
console.log(res);

//normal function
function add (a,b){
  console.log(a+b);
}
add(10,20);

//arrow function
var add2=(a,b)=>{
  console.log(a+b);
};
add2(102,20);

//arrow function for single line parameters
var add3=(a,b)=> console.log(a+b);
add(30,20);