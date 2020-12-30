var jane ={
  name: 'Jane',
  sayHelloTo: function(otherName){
    'use strick';
     console.log(this.name + 'says hello to' + otherName);
     }
};


/* function.prototype.call(thisValue,arg1?,arg2?,...)
thisValue : "this" will have inside the invoked function
arg1/arg2 : arguments to the invoked function

jane.sayHelloTo('Tarzan');
jane.sayHelloTo.call(jane,'Tarzan');

var func = jane.sayHelloTo;
func.call(jane,'Tarzan');


/* function.prototype.apply(thisValue,argArray)

*/
