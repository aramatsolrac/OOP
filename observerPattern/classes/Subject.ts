import Observer from "./Observer";

// Subject maintains a list of observers, facilitates adding or removing observers
class Subject {
  private observers: Observer[] = [];

  public addObserver(observer: Observer): void {
    console.log('Subject: Attached an observer.');

    this.observers.push(observer);
  }

  public removeObserver(observer: Observer): void {
    console.log('Subject: Removed an observer.');

    const observerIndex = this.observers.indexOf(observer);
    this.observers.slice(observerIndex, 1);
  }

  public notifyAll(data: any): void {
    console.log('Subject: Notifying observers...');

    this.observers.forEach(observer => observer.update(data));
  }
}

export default Subject;
