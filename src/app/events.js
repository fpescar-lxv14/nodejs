import { config, ctx, canvas } from "./global";
import * as shape from "./shape"
import { resize, setCoords } from "./utils";

export function Events(){
    canvas.addEventListener('mousedown', (e) => {
        config.isDrawing = true;
        setCoords(e,1)
    })
    canvas.addEventListener('mousemove', (e) => {
        if (config.isDrawing) {
            setCoords(e,2)
            if (config.shape === "freeHand") shape.freeHand(config)
        }
    })
    canvas.addEventListener('mouseup', (e) => {
        config.isDrawing = false;
        if (config.shape !== "freeHand") Object.entries(shape)
            .map(([k,fn]) => config.shape === k && fn(config))
    })
    window.addEventListener('load', resize)
    window.addEventListener('resize', resize)
}