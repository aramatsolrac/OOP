import Subject from "./Subject";

 // State maintains a current state and notifies observers when its state changes
class State extends Subject {
  state: any;
  constructor() {
    super();
    this.state = {};
  }

  getState() {
    return this.state;
  }

  setState(state: any) {
    this.state = state;
    this.notifyAll(state);
  }
}

export default State;
