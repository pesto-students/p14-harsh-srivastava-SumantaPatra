// Write the function divideArray() that has a single numbers parameter containing an array of integers. The function should divide numbers into two arrays, evenNums for even numbers and oddNums for odd numbers. Then the function should sort the two arrays and output the array values to the console.
function divideArray(nums){
 const evenArray = nums.sort((a,b)=>a-b).filter((num)=>num%2 === 0)
 const oddArray = nums.filter((num)=> num %2 !== 0)
 
 return {
    evenArray,
    oddArray
 }
 
}
const splitArray = divideArray([31,24,56,73,12]);

if(!splitArray?.evenArray?.length){
    console.log("even: None")
}else{
    console.log(`even:`)
    splitArray?.evenArray?.forEach((element)=>{
        console.log(element)
    })
}

if(!splitArray?.oddArray?.length){
    console.log(`odd: None`)
}else{
    console.log(`odd:`)
    splitArray?.oddArray?.forEach((element)=>{
        console.log(element)
    })
}