export function ClockController(clock){
    this.clock = clock;

    this.reset = event => {
        this.clock.reset();
    }
}