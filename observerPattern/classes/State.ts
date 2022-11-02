import Subject from "./Subject";

 // State maintains a current state and notifies observers when its state changes
class State extends Subject {
  state: any;
  constructor() {
    // super calls the constructor of the parent class (Subject)
    super();
    this.state = {};
  }

  getState() {
    // return a copy of the state
    return this.state;
  }

  setState(state: any) {
    // set the state
    this.state = state;
    // notify observers of the change
    this.notifyAll(state);
  }
}

export default State;
