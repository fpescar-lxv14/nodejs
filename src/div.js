export function div(a,b){
    const [A,B] = [Number(a), Number(b)];
    const message = "operacion no permitida"
    if (isNaN(A) || isNaN(B)) return ({ message, code: 405 })
    if (!B) return ({ message, code: 0 })
    return A / B
}