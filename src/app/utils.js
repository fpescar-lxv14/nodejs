import { config, ctx, canvas } from "./global"
export const box = (k) => canvas.getBoundingClientRect()[k]
export const getCoords = (e) => ({
    x: e.clientX - box("x"),
    y: e.clientY - box("y")
})
export const setCoords = (e,n) => Object.entries(getCoords(e)).map(([k,v]) => config[k+n] = v)
export const setConfig = () => {
    ctx.lineWidth = config.lineWidth;
    ctx.strokeStyle = config.strokeStyle;
}
export const Hypo = ({x1, y1, x2, y2}) => {
    const cat1 = (x2 - x1)**2;
    const cat2 = (y2 - y1)**2;
    const hyp = Math.sqrt(cat1 + cat2);
    return hyp
}
export const resize = () => {
    let imgData = ctx.getImageData(0,0, canvas.width, canvas.height);
    canvas.width = window.innerWidth - 24;
    canvas.height = window.innerHeight - 72;
    ctx.putImageData(imgData,0,0);
}