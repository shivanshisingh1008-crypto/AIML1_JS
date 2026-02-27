/*console.log("hello world");
document.write("hello world");

var num=10
console.log(num);
console.log(typeof(num));
num=false;
console.log(num);
console.log(typeof(num));
num="riya malik";
console.log(num);
console.log(typeof(num));
num=null;
console.log(num);
console.log(typeof(num));
num=undefined;
console.log(num);
console.log(typeof(num));
const sym1=Symbol(4);
console.log(sym1);
const sym2=Symbol(4);
console.log(sym2);
if(sym1==sym2){
  console.log("true");
}
else{
  console.log("false");
}

var a=100; var b=13; var c=10; var linebreak="<br>";
document.write("a+b+c");
result= a+b+c;
document.write(Result);
document.write(linebreak);

var a= 10;
var b= 20;
var linebreak= "<br/>";

document.write("(a==b)=>");
result=(a==b);
document.write(result);
document.write(linebreak);

document.write("(a!=b)=>");
result=(a==b);
document.write(result);
document.write(linebreak);

document.write("(a>=b)=>");
result=(a==b);
document.write(result);
document.write(linebreak);

document.write("(a<=b)=>");
result=(a==b);
document.write(result);
document.write(linebreak);

document.write("(a>b)=>");
result=(a==b);
document.write(result);
document.write(linebreak);

document.write("(a<b)>=>");
result=(a==b);
document.write(result);
document.write(linebreak);

var count;
document.write("strating loop" + "<br/>");
for(count=0; count<10; count++){
  document.write("current count:"+count);
  document.write("<br/>")

}
document.write("loop stopped");*/



/*const person={
  fname:"AJAY",
  lname:"SINGH",
  age:25,
};
for (let x in person){
  console.log("personal details:"+ x +":" + person[x]);
}

const person={
  fname:"AJAY",
  lname:"SINGH",
  age:25,
};
for (let x in person){
  console.log("personal details:"+ x +":" + person.x);
}*/


/*var count =0;
console.log("starting loop");

while(count<10){
  console.log("current count :" + count +"<br/>");
  count++;
}
console.log("loop stopped");*/



/*var age=20;

if(age>18){
  console.log("<b> you are eligible to cast the vote.</b>");
}
else{
  console.log("not eligible to vote");
}*/


/*let age=20;
if (age>18){
  console.log("you are not minor");
}
else{
  console.log("you are minor");
}


var grade='B';
console.log("entering switch block<br/>");
switch(grade){
  case 'A': console.log("good job<br/>");
  break;
  case 'B': console.log("pretty good<br/>");
  break;
  case 'C': console.log("passed<br/>");
  break;
  case 'D': console.log("not so good <br/>");
  break;
  case 'F': console.log("failed<br/>");
  break;
  default: console.log("unknown grade<br/>")
}
console.log("exiting switch block");

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
