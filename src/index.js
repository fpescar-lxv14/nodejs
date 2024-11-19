const d = document;
const root = d.getElementById('root');
const canvas = d.createElement('canvas');
const ctx = canvas.getContext('2d');
const config = {
    isDrawing: false,
    x1:0,  y1:0, x2:0,  y2:0,
    shape: "freeHand",
    color: "#000",
    lineWidth: 1
}
const controls = [
    {
        id: "shape",
        type: "select",
        options: ["freeHand", "line", "rect", "circle"],
        callback: ({target}) => config.shape = target.value
    },
    {   id: "color",
        type: "color",
        callback: ({target}) => config.strokeStyle = target.value
    },
    {   id: "stroke",
        type: "range",
        min: 1,
        max: 20,
        callback: ({target}) => config.lineWidth = target.value
    }
]
d.addEventListener("DOMContentLoaded", () => {
    // Declaraciones
    const box = (k) => canvas.getBoundingClientRect()[k]
    const resize = () => {
        canvas.width = window.innerWidth - 24;
        canvas.height = window.innerHeight - 72;
    }
    canvas.style.border = "2px solid #333";
    controls.map( ctrl => {
        let tag; 
        if (ctrl.type !== "select") {
            tag = Object.assign(d.createElement("input"),{...ctrl})
        } 
        else {
            tag = d.createElement("select"),
            tag.id = ctrl.id;
            tag.innerHTML = `${ctrl.options.map(opt => `
                <option value="${opt}">${opt}</option>`)}`
        }
        tag.addEventListener('input', ctrl.callback)
        root.append(tag)
    })
    const setConfig = () => {
        ctx.lineWith = config.lineWidth;
        ctx.strokeStyle = config.strokeStyle;
    }
    // Figuras
    const freeHand = ({x1,y1,x2,y2}) => {
        setConfig()
        ctx.lineTo(x2,y2)
        ctx.stroke()
    }
    const rect = ({x1,x2,y1,y2}) => {
        ctx.beginPath();
        setConfig()
        ctx.strokeRect(x1,y1, x2 - x1, y2 - y1); // x y width height
        ctx.closePath();
    }
    const line = ({x1,x2,y1,y2}) => {
        ctx.beginPath();
        setConfig()
        ctx.lineTo(x2,y2);
        ctx.stroke();
        ctx.closePath();
    }
    const Hypo = ({x1, y1, x2, y2}) => {
        const cat1 = (x2 - x1)**2
        const cat2 = (y2 - y1)**2
        const hyp = Math.sqrt(cat1 + cat2)
        return hyp
    }
    const circle = ({x1,y1,x2,y2}) => {
        const r = Hypo({x1,x2,y1,y2})
        ctx.beginPath()
        setConfig()
        ctx.arc(x1,y1,r,0,2 * Math.PI)
        ctx.stroke()
        ctx.closePath()
    }
    // Anidacion
    root.append(canvas);
    // Eventos
    canvas.addEventListener('mousedown', (e) => {
        config.isDrawing = true;
        config.x1 = e.clientX - box("x")
        config.y1 = e.clientY - box("y")
    })
    canvas.addEventListener('mousemove', (e) => {
        if (config.isDrawing) {
            config.x2 = e.clientX
            config.y2 = e.clientY
            if (config.shape === "freeHand") freeHand(config)
        }
    })
    canvas.addEventListener('mouseup', (e) => {
        config.isDrawing = false;
        circle(config)
    })
    window.addEventListener('load', resize)
    window.addEventListener('resize', resize)
})