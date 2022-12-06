// Link: https://www.codewars.com/kata/javascript-class-like-objects

/*

For this exercise you should create a JavaScript class like object called "Animal"
that takes in "name" and "type" arguments. It should have a toString method that
returns a human readable string indicating the argument information passed in. It
should also allow the name property to be set.

The following is an example of how the final code would be used and what the expected
return values should be:

    var dog = new Animal('Max', 'dog');
    dog.toString(); // should return 'Max is a dog'
    dog.type; // should == 'dog'
    dog.name; // should == 'Max'
    dog.name = 'Lassie'; // should set name to 'Lassie'

*/

class Animal {
  constructor(name, type) {
    this._name = name;
    this._type = type;
  }

  toString() {
    return `${this._name} is a ${this._type}`;
  }

  get type() {
    return this._type;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }
}

/* Top 3 solutions: (sorted by best practices)

===

var Animal = function(name, type) {
  this.name = name;
  this.type = type;
}
Animal.prototype.toString = function() {
  return this.name + ' is a ' + this.type;
}

===

class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  toString() {
    return `${this.name} is a ${this.type}`;
  }
}

===

Animal = function(name, type){
  this.name = name;
  this.type = type;
  this.toString = function(){return this.name+" is a "+this.type};
};

*/
