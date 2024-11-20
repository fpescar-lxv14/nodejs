interface ErrorMsg {
	code: number,
	message: string,
	operation:any
}
function sum(a:string,b:string):number|ErrorMsg{
	const [A,B] = [Number(a), Number(b)]
	if (isNaN(A) || isNaN(B)){
		return {
			code: 400,
			message: "no se pudo realizar la operacion",
			operation: `${a} + ${b}`
		}
	}
	return A + B;
}
const [exe, file, a, b] = process.argv
console.log(sum(a,b))