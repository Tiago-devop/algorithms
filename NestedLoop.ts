function NestedLoop(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        console.log("Outer loop i", i)
        for (let j = 0; j < arr.length; j++) {
            console.log("Inner loop j", j)
        }
    }
}

const arr: number[]  =  Array.from({length: 3}, (_, num) => num + 1 )

NestedLoop(arr);