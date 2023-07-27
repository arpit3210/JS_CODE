function isfunction(myobj)
{
    myobj.make= "William";
}

const obj ={

make: "James",
model: 3432,
brand : "Bata",

};

console.log(obj.make);

isfunction(obj);

console.log(obj.make);