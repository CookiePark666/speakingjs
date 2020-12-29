// do if-then-else as a statement
var x;
if(y >= 0){
  x = y;
} else {
  x = -y;
}

// do if-then-else as an expression
var x = y >= 0 ? y : -y

// you can use the latter as a function argument
myFunction(y >= 0 ? y : -y)
