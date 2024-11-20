import { d, controls } from "./global";
export const Controls = () => controls.map( ctrl => {
    let tag; 
    if (ctrl.type !== "select") tag = Object.assign(d.createElement("input"),{...ctrl})
    else {
        tag = d.createElement("select"),
        tag.id = ctrl.id;
        tag.innerHTML = `${ctrl.options.map(opt =>`<option value="${opt}">${opt}</option>`)}`
    }
    tag.addEventListener('input', ctrl.callback)
    root.append(tag)
})