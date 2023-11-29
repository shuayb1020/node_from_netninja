console.log(__dirname);
console.log(__filename);

function sayHi() {
    console.log('Hi')
    
}
sayHi()

// function expression
var sayBye = function(){
    console.log('Bye')
};

sayBye();

var stuffs = require('./stuff');

console.log(stuffs.counter(['ade','bayo','bola']));
console.log (stuffs.adder(6,5));
console.log(stuffs.pi)

/* Event Emitters*/
var events = require('events');

var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(msg){
    console.log(msg);
})

myEmitter.emit('someEvent', 'the event was emitted');

// uttilities
var util = require('util');

var Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter);
var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');
var people =  [james, mary, ryu];

people.forEach(function(Person){

    Person.on('speak', function(msg){
        console.log(Person.name + ' said: ' +msg);
    });
});

james.emit('speak', 'hey dudes');