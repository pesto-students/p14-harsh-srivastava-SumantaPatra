// print the astrict(*) like https://apps.pesto.tech/developer/classroom/9aa22e9e-26cc-4b24-a0a5-67da51311ecf/topic/751ae6b0-e547-463e-b276-6b9aa34c64ff/assignments/frontend/6b986876-168a-46c6-9693-81c2217171b8

function drawTriangle(maxStars){
   for(let i=0; i<maxStars; i++){
    const arr=[]
    for(let j=0; j<=i; j++){
        arr.push("*")
    }
    console.log(...arr)
   }
}
drawTriangle(4)
