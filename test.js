const missNumber = (arr) =>{
    const miss = arr.sort().filter((e,i)=> e!==i );
    return miss[0]-1 || arr.length
}

missNumber([9,6,4,2,3,5,7,0,1]); // ==> 8
missNumber([3,0,1]); // ==> 2
missNumber([0,1]); // ==> 2