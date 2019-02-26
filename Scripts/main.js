/**
 * Just a place to practice TS from the PluralSight course

class Muffin {
    flavorType: string;
    constructor(flavor: string) {
        this.flavorType = flavor;
    }
}  */
var Scone = /** @class */ (function () {
    function Scone(kind) {
        this.flavor = kind;
    } //for when it's initialized 
    Scone.prototype.bake = function () {
        alert("You started baking " + this.flavor + " scones.");
    }; //function
    Scone.prototype.eat = function () {
        alert("Time to eat some " + this.flavor + " scones.");
    };
    return Scone;
}());
//add window on load capability
window.onload = function () {
    var Scone = new Scone('orange cranberry');
    Scone.bake();
    Scone.eat();
};
