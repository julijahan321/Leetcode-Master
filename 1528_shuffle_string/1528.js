//problem name shufflestring

var restoreString = function(s, indices) {
    let outPut=[]
    for(let i=0;i<s.length;i++){
        for(let j=0;j<s.length;j++){
            if([i]==indices[j]){
                outPut[i]=s[j]
            }
        }
    }
    const y=outPut.toString()
    let ff=outPut.join("")
    return ff
    };

    
    let test_1=restoreString("codeleet",[4,5,6,7,0,2,1,3])
    let test_2=restoreString("abc",[0,1,2])
    console.log(test_1)
    console.log(test_2)
