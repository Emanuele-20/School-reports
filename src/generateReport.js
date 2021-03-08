function score(arg){

    let nGreen = 0
    let nAmber = 0
    let nRed = 0
    let solution = []
    let inputGrades = arg.split(",")
    
    for(let i = 0; i < inputGrades.length ; i++){
        
        if((inputGrades[i].trim() === "Green")){
            nGreen++
        }

        if(inputGrades[i].trim() === "Amber"){
            nAmber++
        }

        if(inputGrades[i].trim() === "Red"){
            nRed++ 
        }

        if(inputGrades[i].trim() === ""){
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