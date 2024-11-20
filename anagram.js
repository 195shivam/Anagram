const input= ["eat", "tea", "tan", "ate", "nat", "bat"]
const ansObj={}

for(let val of input){
    const asciiVal=sumAsciiValue(val)
    if(!ansObj[asciiVal]){
        ansObj[asciiVal]=[val]
    }
    else{
        ansObj[asciiVal].push(val)
    }
    
}

let ans=Object.values(ansObj);

console.log(ans)
function sumAsciiValue(value){
    let n=0;
    for(let i=0; i<value.length; i++){
        n+=value.charCodeAt(i)
    }
    return n;
}

// const output=[]
// let k=0;
// console.log(input[0]^input[5])
// while(input.length>0){
//     let n=sumAsciiValue(input[0])
//     output[k]=[input[0]]
//     console.log('this is n',input[0])
    
//     for(let j=1; j<input.length; j++){
//         console.log('this in n', n)
//         const c=sumAsciiValue(input[j])
//         console.log(c,input[j])
//         if(n==c){
//             output[k].push(input[j])
//             input.splice(j,1)
//         }
//     }
//     input.splice(0,1)
//     k++;
// }


// console.log(output)