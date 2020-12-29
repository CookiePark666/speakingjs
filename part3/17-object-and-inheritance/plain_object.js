/* js object literals allow you to directly create plain objects
the object has 2 properties : name and describe
describe is a method
*/
var jane = {
  name : 'Jane',
  describe : function(){
    return 'Person named' + this.name; // (1)
    },// (2)
   
};
