console.log("hellooooo");
function greet(name)
{
    return 'hello ${name}!!'
}
const arrowFunc=(name)=>{
    return 'hello ${name}!!'
}
console.log(greet("muthoot"));
console.log(arrowFunc("muthoot arrow function"));
const greetDeepak = greet("deepak");
console.log(greetDeepak)
document.getElementById("demo").innerHTML="value";
function fun(...input)
{
    let sum=0;
    for(let i of input)
        {
            sum += i;
        }
        return sum;
}
console.log(fun(1,2));
console.log(fun(1,2,3));
console.log(fun(1,2,3,4,5));
const promise = new Promise((resolve,reject) =>{
    setTimeout(() =>
        {
            reject("failed the task");
        }, 5000);
});
promise.then((data)=>{console.log("res:",data)},(err)=>{console.log("failed")})