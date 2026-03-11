var person={
  name: "John Mac",
  age:30,
  isMarried:true,
  address:{
    street:'vijay nagar',
    flatno: 201
  }
};
console.log(person)



var person1={
  name: "John Mac",
  age:30,
  isMarried:true,
  address:{
    street:'vijay nagar',
    flatno: 201
  }
};
for (let x in person){
  console.log("person details:"+ x +":" + person1[x]);
}
