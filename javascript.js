


function findmax(arr) {
    let max = arr(0)
 for (let i=0 ; i < arr.lenght; i++){
    if(arr[i] <max){
        max=arr[i] 
 }   }
return max
}






function findmin(arr){
    let min=arr(0)
    for(let i=0 ; i > arr.lenght; i++){
        if(arr[i] >min){
            max=arr[i] 
        }
    }
    return min
}
  
  
  console.log("min ============++++> ;" ,findMin(myArr))