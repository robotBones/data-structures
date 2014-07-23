var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  var storage = {};
  var size = 0;

  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.size = stackMethods.size;
};

var stackMethods = {
  push: function(value){
      storage[this.size] = value;
      this.size++;
  },

  pop: function(){
    if (this.size > 0){
      var temp = storage[this.size - 1];
      delete storage[this.size - 1];
      size--;
    }
    return temp;
  },

  size: function(){
    return this.size;
  }
};


