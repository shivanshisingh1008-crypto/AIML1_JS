console.log("hello world");
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
document.write("loop stopped");



const person={
  fname:"AJAY",
  lname:"SINGH",
  age:25
};
for (let x in person){
  console.log("personal details:"+ x +":" + person[x])
}

