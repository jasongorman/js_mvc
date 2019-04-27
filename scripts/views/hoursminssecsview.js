export function HoursMinsSecsView(clock, element) {

    clock.addObserver(this);
    this.clock = clock;
    this.element = element;

    this.on_update = () => {
        this.element.innerHTML = "    <div class=\"row\">\n" +
            "        <div class=\"col-sm-4\">\n" +
            "            <p>Hours: </p> " + this.clock.hours + "\n" +
            "        </div>\n" +
            "        <div class=\"col-sm-4\">\n" +
            "            <p>Minutes: </p> " + this.clock.mins + "\n" +
            "        </div>\n" +
            "        <div class=\"col-sm-4\">\n" +
            "            <p>Seconds: </p> " + this.clock.secs + "\n" +
            "        </div>\n" +
            "    </div>\n"
    };
}