const PUBLIC_FILES = {
    "index.html": /^\/$|index|home/,
    "styles/default.css": /styles|default/,
    "scripts/index.js": /script|main|app/,
    "assets/data.json": /request|api$/,
}
export default function getFile(file){
    Object.entries(PUBLIC_FILES).forEach(([f,regEx]) => {
        if (regEx.test(file)) file = f
    })
    return file;
}