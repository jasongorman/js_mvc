export function Clockcontroller(clock){
    this.clock = clock;

    this.reset = event => {
        this.clock.reset();
    }
}