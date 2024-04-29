const student1 = {
  name: "kartikey",
  printName: function () {
    console.log(this);
  },
};
student1.printName()

const student2 = {
  name: "Adarsh",
  sapid: 500121084
};

student1.printName.call(student2); //value of this = student2

const obj1={
  a:10,
  x:()=>{
   console.log(this.a);// lexical=>how it is written in code
   
  },
};
obj1.x();

const obj2={
  a:15,
  x:function(){
    console.log(this.a)
  },
}

obj2.x()

const obj3={
  a:20,
  x:function(){
    // enclosing lexical context
    const y=()=>{
       console.log(this)
    };
    y();
  },
};
obj3.x()