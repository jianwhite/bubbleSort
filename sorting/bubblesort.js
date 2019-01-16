function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            //compare stuff
            let tmp = arr[j];     
            if(arr[j] > arr[j+1]){
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
                
            }
        }
    }
    
    return arr;
}