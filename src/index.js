module.exports = function solveEquation(equation) {
  let a = equation.split(' ')[0]
  
  let b =equation.split(' ')[3] +equation.split(' ')[4]
  let c = equation.split(' ')[7]+equation.split(' ')[8]

let dec = Math.pow(b,2)-4*a*c;
let mas = []
if (dec>0) {
	let a1 =Math.round((-b+Math.sqrt(dec))/(2*a));
	mas.push(a1)
	console.log('a1 '+ a1)
	let a2 =Math.round((-b-Math.sqrt(dec))/(2*a));
	console.log('a2 '+a2);
	mas.push(a2)
	// console.log(mas.sort((a,b) => a-b))

}
return mas.sort((a,b) => a-b)}
// solveEquation('294 * x^2 - 141195558 * x - 1600964090384736')
