"use strict";
exports.__esModule = true;
// Subject maintains a list of observers, facilitates adding or removing observers
var Subject = /** @class */ (function () {
    function Subject() {
        this.observers = [];
    }
    Subject.prototype.addObserver = function (observer) {
        console.log('Subject: Attached an observer.');
        this.observers.push(observer);
    };
    Subject.prototype.removeObserver = function (observer) {
        console.log('Subject: Removed an observer.');
        var observerIndex = this.observers.indexOf(observer);
        this.observers.slice(observerIndex, 1);
    };
    Subject.prototype.notifyAll = function (data) {
        console.log('Subject: Notifying observers...');
        this.observers.forEach(function (observer) { return observer.update(data); });
    };
    return Subject;
}());
exports["default"] = Subject;
