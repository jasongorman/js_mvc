function Observable(){

    this.observers = [];

    this.notify = () => {
        for (var observer of this.observers) {
            observer.update();
        }
    }

    this.addObserver = (observer) => {
        this.observers.push(observer);
    }
}

export function Clock() {

    this.hours = 0;
    this.mins = 0;
    this.secs = 0;
    this.observable = new Observable();

    this.reset = () => {
        this.hours = 0;
        this.mins = 0;
        this.secs = 0;
        this.observable.notify();
    }

    this.tick = () => {
        this.secs++;
        if (this.secs == 60) {
            this.secs = 0;
            this.mins++;
        }
        if (this.mins == 60) {
            this.mins = 0;
            this.hours++;
        }
        this.observable.notify();
    };

    this.totalSeconds = () => {
        return (this.hours * 60 * 60) + (this.mins * 60) + this.secs;
    }

    this.addObserver = (observer) => {
        this.observable.addObserver(observer);
    }
}
