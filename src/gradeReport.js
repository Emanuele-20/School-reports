function score(arg){

    let nGreen = 0
    let nAmber = 0
    let nRed = 0
    let solution = []
    let array = arg.trim().split(",")

    for(let i = 0; i < array.length ; i++){

        if((array[i].trim() === "Green")){
           nGreen++
        }

        if(array[i].trim() === "Amber"){
            nAmber++
        }

        if(array[i].trim() === "Red"){
            nRed++ 
        }

        if(array[i].trim() === ""){
            solution.push("No result given")
        }

    }
        
    
    
        if(nGreen > 0){
            solution.push(`Green: ${nGreen}`)
        } 
        if (nAmber > 0 ){
            solution.push(`Amber: ${nAmber}`)
        }
        if (nRed > 0){
            solution.push(`Red: ${nRed}`)
        }

        
        return solution.join("\n")

}







module.exports = score