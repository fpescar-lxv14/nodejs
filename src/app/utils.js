import { config, ctx, canvas } from "./global"
export const getCoords = (e) => ({
    x: e.clientX - box("x"),
    y: e.clientY - box("y")
})
export const setCoords = (e,n) => {
    Object.entries(getCoords(e))
    .map(([k,v]) => config[k+n] = v)
}
export const setConfig = () => {
    ctx.lineWith = config.lineWidth;
    ctx.strokeStyle = config.strokeStyle;
}
export const Hypo = ({x1, y1, x2, y2}) => {
    const cat1 = (x2 - x1)**2
    const cat2 = (y2 - y1)**2
    const hyp = Math.sqrt(cat1 + cat2)
    return hyp
}
export const box = (k) => canvas.getBoundingClientRect()[k]
export const resize = () => {
    canvas.width = window.innerWidth - 24;
    canvas.height = window.innerHeight - 72;
}