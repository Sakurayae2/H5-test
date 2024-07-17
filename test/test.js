function removeSpace(str){
    let a  = []
    for(let i of str){
        if(i!=' ')
            a.push(i)
    }
    return a.join('')
}

console.log(removeSpace('12 3    s m  w2       '));