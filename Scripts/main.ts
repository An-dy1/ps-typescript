/**
 * Just a place to practice TS from the PluralSight course

class Muffin {
    flavorType: string;
    constructor(flavor: string) {
        this.flavorType = flavor;
    }
}  */

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