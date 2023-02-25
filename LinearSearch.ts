function LinearSearch(haystack: number[], needle: number):boolean {
    for (let i = 0; i < haystack.length; i++) {
        if(haystack[i] === needle) {
            return true;
        }
    }
    return false;
}

const array1 = [1,2,3,4,5,6,7,8,9]

console.log(LinearSearch(array1, 5))
console.log(LinearSearch(array1, 10))
