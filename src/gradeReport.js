function score(arg){

    let nGreen = []
    let nAmber = []
    let nRed = []
    let solution = []


    // if(arg === ""){
    //     return "No result given"
    // } else if(arg === "Green"){
    //     nGreen++
    //     return `${arg}: ${nGreen}`
    // } else if(arg === "Green, Green"){
    //     nGreen++
    //     nGreen++
    //     return `Green: ${nGreen}`
    // }  else if(arg === "Amber"){
    //     nAmber++
    //     return `${arg}: ${nAmber}`
    // } else if (arg === "Red"){
    //     nRed++
    //     return `${arg}: ${nRed}`
    // }

    let array = arg.split(" ")
    for(let i = 0; i < array.length; i++ ){
        if(array[i] === "Green"){
            nGreen.push(array[i]);
            // console.log(array[i])
            // console.log(nGreen)
            // `Green: ${nGreen}`
            solution.push(`Green: ${nGreen.length}`)
        };
        

        if(array[i] === "Amber"){
            nAmber.push(array[i])
            //return `Amber: ${nAmber}`
            solution.push(`Amber: ${nAmber.length}`)
        }

        if(array[i] === "Red"){
            nRed.push(array[i])
            //return `Red: ${nRed}`
            solution.push(`Red: ${nRed.length}`)
            }
        if(array[i] === ""){
                return "No result given"
        }

        
        
        //solution.push(`Green: ${nGreen}, Amber: ${nAmber}`)
         console.log(solution)
         return solution.join()
    }

}







module.exports = score