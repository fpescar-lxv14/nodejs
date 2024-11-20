export const d = document;
export const root = d.getElementById('root');
export const canvas = d.createElement('canvas');
export const bufferCanvas = d.createElement('canvas');
export const btx = bufferCanvas.getContext('2d');
export const ctx = canvas.getContext('2d');
export const config = {
    isDrawing: false,
    x1:0,  y1:0, x2:0,  y2:0,
    shape: "freeHand",
    color: "#000",
    lineWidth: 1
}
export const controls = [
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