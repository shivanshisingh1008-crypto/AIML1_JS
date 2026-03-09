var myinfo= new Array();
var myinfo1 = Array();
console.log(myinfo , myinfo1);



let collection=[
  {},
  [],
  true,
  "john",
  function() {},
  90005627071008,
  undefined,
  null,
  new String("abc"),
  new Date(),
];
console.log(collection);
collection.teachername= "john Mac";
collection.phoneno= 3647499303;
console.log(collection);
  

var trainerinfo=["mahesh",32,"ghaziabad",{isMarried: true}];
console.log(trainerinfo);

console.log(trainerinfo[0]);
console.log(trainerinfo[1]);
console.log(trainerinfo[2]);
console.log(trainerinfo[trainerinfo.length-1]);// access last elements

console.log(trainerinfo.length);//length of the array
trainerinfo.contact=979475636;// value added
console.log(trainerinfo);
trainerinfo[0]="suhani"; //modify the value
console.log(trainerinfo);
console.log(trainerinfo.length);//length of the array