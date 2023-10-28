const a = "2+2/4";
const b = Function("return " +a)();
console.log(b)