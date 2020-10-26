// Code your solutions in this file



function writeCards(e, x){
    let array = []
    for (let i = 0; i < e.length; i++){
        
        array.push(`Thank you, ${e[i]}, for the wonderful ${x} gift!`)
    }
    return array;
}



function countDown(e){
    while (e > 0){
        console.log(e)
        e -= 1;
    }
    console.log(e) 
}