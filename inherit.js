function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.speak = function () {
  console.log('hello')
}

function Student(score,name,age) {
  Person.call(this,name,age);
  this.score = score;
}

Student.prototype = new Person();

Student.prototype.exam = function () {
  console.log(this.score);
}

var st = new Student(90,'lihua',26);
console.log(st)