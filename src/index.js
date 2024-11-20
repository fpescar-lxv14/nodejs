import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/styles.scss";
import { d, canvas, root } from "./app/global";
import { Controls } from "./app/controls"
import { Events } from "./app/events";

d.addEventListener("DOMContentLoaded", () => {
    Controls();
    Events();
    root.append(canvas);
})