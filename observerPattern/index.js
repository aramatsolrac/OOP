import State from "./classes/State.ts";
import Observer from "./classes/Observer.ts";
import Subject from "./classes/Subject.ts";

const subjectOne = new Subject();
const subjectTwo = new Subject();

const observerOne = new Observer("Observer One firing");
const observerTwo = new Observer("Observer Two firing");

subjectOne.setState(new State("Subject One State"));

