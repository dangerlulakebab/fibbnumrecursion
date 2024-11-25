// First up create a file and tackle the fibonacci sequence:

// Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the Fibonacci sequence. Using an example
//  input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].
// Now write another function fibsRec which solves the same problem recursively.
// Test both versions of your functions by passing in various lengths as arguments.


function fibs(n) {
    if (n <= 0) return []
    if (n === 1) return [0]

    let f1 = 0, f2 = 1;
    let result = [f1, f2]

    for(let i = 2; i < n; i++){
        let next = f1 + f2;
        f1 = f2;
        f2 = next;

        result.push(next);
    }

    return result
}

console.log(fibs(8))