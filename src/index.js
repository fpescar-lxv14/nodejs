const d = document;
const root = d.getElementById('root');
const canvas = d.createElement('canvas');
const ctx = canvas.getContext('2d');
const config = {
    isDrawing: false,
    x1:0,  y1:0, x2:0,  y2:0,
    shape: "rect"
}
d.addEventListener("DOMContentLoaded", () => {
    // Declaraciones
    const box = (k) => canvas.getBoundingClientRect()[k]
    const resize = () => {
        canvas.width = window.innerWidth - 24;
        canvas.height = window.innerHeight - 72;
    }
    canvas.style.border = "2px solid #333";
    // Figuras
    const rect = ({x1,x2,y1,y2}) => {
        ctx.beginPath();
        ctx.strokeRect(x1,y1,x2,y2); // x y width height
        ctx.closePath();
    }
    const line = ({x1,x2,y1,y2}) => {
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.stroke();
        ctx.closePath();
    }
    // Anidacion
    root.append(canvas);
    // Eventos
    d.addEventListener('mousedown', (e) => {
        config.isDrawing = true;
        config.x1 = e.clientX - box("x")
        config.y1 = e.clientY - box("y")
    })
    d.addEventListener('mousemove', (e) => {
        if (config.isDrawing) {
            config.x2 = e.clientX
            config.y2 = e.clientY
        }
    })
    d.addEventListener('mouseup', (e) => {
        config.isDrawing = false;
        rect(config)
        console.log(config)
    })
    window.addEventListener('load', resize)
    window.addEventListener('resize', resize)
})