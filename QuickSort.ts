function qs(arr: number[], lo: number, hi: number): void {
    if (lo >= hi) {
        return;
    }

    const pivotIdx = partition(arr, lo, hi);
    qs(arr, lo, pivotIdx - 1);
    qs(arr, pivotIdx + 1, hi);
}

function partition(arr: number[], lo: number, hi: number):number {
    const pivot = arr[hi];
    let idx = lo - 1;

    for (let i = lo; i < hi; ++i) {
        if(arr[i] <= pivot) {
            idx++;
            const tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }
    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;

    return idx;
}
function QuickSort(arr: number[]): void {
    qs(arr, 0, arr.length - 1)
    console.log(arr)
}

const array1 = [5,2,946,9,6,3,99,21,400];
QuickSort(array1)
