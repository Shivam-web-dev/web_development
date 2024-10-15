
// Write a for loop that reverses an array.

function reverse(arr){
    let newReverse =[]
    for(let i=arr.length-1 ;i>=0 ;i--){
        newReverse.push(arr[i])
    }
    console.log(newReverse)
}
reverse([11,2,3,4,5,6,7,8,9,10])