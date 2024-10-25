const CONTENT_TYPES = {
    text: ["html","css","js"],
    application: ["json", "xml", "xhtml", "pdf"],
    image: ["jpg", "png", "gif", "tiff", "webp", "svg"],
    audio: ["mp3", "ogg", "wav", "weba", "aac"],
    video: ["mp4", "ogv", "3gp", "webm"],
    font: ["eot", "otf", "ttf", "woff"],
}
export default function mapTypes(file){
    let format, content;
    Object.entries(CONTENT_TYPES).forEach(([t, formats]) => {
    formats.forEach(f => { 
        if (file.includes('.'+f)){ 
            format = f; content = t; 
        }}) 
    })
    return format ? `${content}/${format}` : "text"
}