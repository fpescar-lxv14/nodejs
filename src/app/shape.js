import { ctx } from "./global"
import { setConfig, Hypo } from "./utils"

export const freeHand = ({x1,y1,x2,y2}) => {
    setConfig()
    ctx.lineTo(x2,y2)
    ctx.stroke()
}
export const rect = ({x1,x2,y1,y2}) => {
    ctx.beginPath();
    setConfig()
    ctx.strokeRect(x1,y1,x2 - x1, y2 - y1); // x y width height
    ctx.closePath();
}
export const line = ({x1,x2,y1,y2}) => {
    ctx.beginPath();
    setConfig()
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    ctx.closePath();
}
export const circle = ({x1,y1,x2,y2}) => {
    const r = Hypo({x1,x2,y1,y2})
    ctx.beginPath()
    setConfig()
    ctx.arc(x1,y1,r,0,2 * Math.PI)
    ctx.stroke()
    ctx.closePath()
}