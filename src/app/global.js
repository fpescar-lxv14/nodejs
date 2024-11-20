export const d = document;
export const root = d.getElementById('root');
export const canvas = d.createElement('canvas');
export const bufferCanvas = d.createElement('canvas');
export const btx = bufferCanvas.getContext('2d');
export const ctx = canvas.getContext('2d');
export const config = {
    isDrawing: false,
    x1:0, y1:0, x2:0, y2:0,
    shape: "freeHand",
    color: "#000",
    lineWidth: 1
}
export const options = ["freeHand", "line", "rect", "circle"]
export const controls = [
    {
        id: "shape",
        className: "form-select col-12 col-md",
        innerHTML: options.map(opt => `<option value="${opt}">${opt}</option>`).join(""),
        callback: ({target}) => config.shape = target.value
    },
    {   
        id: "color",
        className: "form-control-color col-4",
        type: "color",
        callback: ({target}) => config.strokeStyle = target.value
    },
    {   
        id: "stroke",
        className: "col col-md",
        type: "range",
        value: 1,
        min: 1,
        max: 20,
        callback: ({target}) => config.lineWidth = target.value
    }
]