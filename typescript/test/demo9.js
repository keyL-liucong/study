var Person = (function () {
    function Person() {
    }
    return Person;
}());
var p1 = new Person();
p1.name = 'test';
console.log(p1.name);
