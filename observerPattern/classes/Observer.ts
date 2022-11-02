import Subject from "./Subject";

// Observer provides an update interface for objects that need to be notified of a Subject’s changes of state
class Observer {
  // update is called when the Subject changes
  public update(subject: Subject): void {
  }
}

export default Observer;
