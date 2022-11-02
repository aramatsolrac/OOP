import State from "./classes/State.js";
import Observer from "./classes/Observer.js";
import Subject from "./classes/Subject.js";

const subjectOne = new Subject();
const subjectTwo = new Subject();

const observerOne = new Observer("Observer One firing");
const observerTwo = new Observer("Observer Two firing");

subjectOne.setState(new State("Subject One State"));

