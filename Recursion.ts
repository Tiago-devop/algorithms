let count = 0
function foo(n: number):number {
    console.log('called', ++count)
    // Base case
    if (n === 1) {
        return 1;
    }
    return n = foo(n - 1);
}
console.log(foo(10))