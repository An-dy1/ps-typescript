/**
 * Just a place to practice TS from the PluralSight course

class Muffin {
    flavorType: string;
    constructor(flavor: string) {
        this.flavorType = flavor;
    }
}  */

/* *****************************************
Declaring a class

//this, for some reason, is not working; error in browser: "TypeError: Scone is not a constructor"
class Scone {
    flavor: string; //variable
    constructor(kind: string) { 
        this.flavor = kind;
    } //for when it's initialized 
    bake() { 
        alert("You started baking " + this.flavor + " scones.");
    } //function
    eat() {
        alert("Time to eat some " + this.flavor + " scones.");
    }
}

//add window on load capability
window.onload = function() {
    var Scone = new Scone('orange cranberry');
    Scone.bake();
    Scone.eat();
}

****************************************/

// Type inference, ts infers that 2 is a number bc the initialized value is a number:
var digit = 2;

//Type annotation:
var digit: number = 2; 

//Type inference, ts assigns type: any:
var someThing;

//Type annotation, without assignment:
var someOne: string;

//Type inference:
var anotherDigit = digit + 3;