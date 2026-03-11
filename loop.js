var count;
document.write("strating loop" + "<br/>");
for(count=0; count<10; count++){
  document.write("current count:"+count);
  document.write("<br/>")

}
document.write("loop stopped");*/



const person={
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
}


var count =0;
console.log("starting loop");

while(count<10){
  console.log("current count :" + count +"<br/>");
  count++;
}
console.log("loop stopped");



var age=20;

if(age>18){
  console.log("<b> you are eligible to cast the vote.</b>");
}
else{
  console.log("not eligible to vote");
}


let age=20;
if (age>18){
  console.log("you are not minor");
}
else{
  console.log("you are minor");
}