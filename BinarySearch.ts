function BinarySearch(array: number[], needed: number): boolean {
    let lower = 0;
    let higher = array.length;

    do {
        const middle = Math.floor(lower + (higher - lower) / 2);
        const value = array[middle];

        if (value === needed) {
            return true;
        } else if (value > needed) {
            higher = middle;
        } else {
            lower = middle + 1;
        }
    }   while (lower < higher)

    return false;
}

const arrayOfNumbers = [11,2,3,10,4,7,6,5,8,9,1];
arrayOfNumbers.sort((a,b) => a -b)

console.log(BinarySearch(arrayOfNumbers, 5))
console.log(BinarySearch(arrayOfNumbers, 12))
