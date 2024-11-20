import { d, controls } from "./global";
export const Controls = () => {
        const container = Object.assign(d.createElement('div'),{
            className: "d-flex flex-wrap gap-1 p-2 col-12 col-lg-6"
        })
        controls.forEach( ctrl => {
        const tag = Object.assign(d.createElement(ctrl.type ? "input" : "select"), ctrl)
        ctrl.options?.map(opt => tag.innerHTML += `<option value="${opt}">${opt}</option>`)
        tag.addEventListener('input', ctrl.callback)
        container.append(tag)
    })
    root.append(container)
}