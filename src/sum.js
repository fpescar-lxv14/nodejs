export function sum (a,b){
    const result =  Number(a) + Number(b)
    if(isNaN(result)){
        return ({
            code: 403,
            message: "operacion no permitida",
        })
    }
    return result
}