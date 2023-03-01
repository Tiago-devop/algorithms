const numbers: number[] = [5,2,3,6,4,57,7,2,3,4,5,7,9,5,23,4,6,8,5,3]

function UniqueSort(arr: number[]): void {
    const unique = [...new Set(arr)]
    console.log(unique.sort((a,b) => a - b))
}

UniqueSort(numbers)