import { d, controls } from "./global";
export const Controls = () => {
        const container = Object.assign(d.createElement('header'),{
            className: "d-flex flex-wrap align-items-center gap-1 p-2 col-12 col-lg-6",
            innerHTML: `<h1 class="m-0 fs-5 w-2">PescarDraw</h1>`
        })
        controls.forEach( ({ tagName, callback, ...ctrl }) => {
        const tag = Object.assign(d.createElement(tagName), ctrl)
        tag.addEventListener('input', callback)
        container.append(tag)
    })
    root.append(container)
}