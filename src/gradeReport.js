function score(arg){

    let nGreen = 0
    let nAmber = 0
    let nRed = 0
    let solution = []
    let array = arg.trim().split(",")

    for(let i = 0; i < array.length ; i++){

        if((array[i].trim() === "Green")){
           console.log(array)
           nGreen += 1
           console.log(nGreen)
        }

        if(array[i].trim() === "Amber"){
            nAmber += 1
        }

        if(array[i].trim() === "Red"){
            nRed += 1  
        }

        if(array[i].trim() === ""){
            solution.push("No result given")
        }

    }
        
    
    
        if(nGreen > 0){
            //console.log(nGreen) -> 1
            solution.push(`Green: ${nGreen}`)
        } 
        if (nAmber > 0 ){
            solution.push(`Amber: ${nAmber}`)
        }
        if (nRed > 0){
            solution.push(`Red: ${nRed}`)
        }

        console.log(solution)
        return solution.join()
         
     
    
    
}







module.exports = score