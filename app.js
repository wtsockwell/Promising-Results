slowMath.add(6,2)
.then((value)=>{
    console.log(value)
    return slowMath.multiply(value,2)
})
.then((value)=>{
    console.log(value)
    return slowMath.divide(value,4)
})
.then((value)=> {
    console.log(value)
    return slowMath.subtract(value,3)
})
.then((value)=> {
    console.log(value)
    return slowMath.add(value,98)
})
.then((value)=>{
    console.log(value)
    return slowMath.remainder(value,2)
})
.then((value)=>{
    console.log(value)
    return slowMath.multiply(value,50)
})
.then((value)=>{
    console.log(value)
    return slowMath.remainder(value,40)
})
.then((value)=>{
    console.log(value)
    return slowMath.add(value,32)
})
.then((value)=>{
    console.log(`The final result is ${value}`)
})
.catch((err)=>{
    console.log(err)
})