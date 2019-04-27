import {Clock} from "./model/clock.js"
import {HoursMinsSecsView} from "./views/hoursminssecsview.js"
import {TotalSecondsView} from "./views/totalsecondsview.js";
import {Clockcontroller} from "./controllers/clockcontroller.js";

const clock = new Clock();

const controller = new Clockcontroller(clock);

document.getElementById("reset").addEventListener("click", controller.reset);

const hoursMinsSecsView = new HoursMinsSecsView(clock, document.getElementById("hms_view"));
const totalSecondsView = new TotalSecondsView(clock, document.getElementById("total_seconds_view"));

setInterval(clock.tick, 1000);
