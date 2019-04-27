export function TotalSecondsView(clock, element) {

    clock.addObserver(this);
    this.clock = clock;
    this.element = element;

    this.update = () => {
        this.element.innerHTML = "    <div class=\"row\">\n" +
            "        <div class=\"col-sm-4\">\n" +
            "            <p>Total Seconds: </p> " + this.clock.totalSeconds() + "\n" +
            "        </div>\n" +
            "    </div>\n"
    };
}