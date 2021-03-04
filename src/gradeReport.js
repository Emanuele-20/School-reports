function score(arg){

    let nGreen = 0
    let nAmber = 0
    let nRed = 0


    if(arg === ""){
        return "No result given"
    } else if(arg === "Green"){
        nGreen++
        return `${arg}: ${nGreen}`
    } else if(arg === "Green, Green"){
        nGreen++
        nGreen++
        return `Green: ${nGreen}`
    }  else if(arg === "Amber"){
        nAmber++
        return `${arg}: ${nAmber}`
    } else if (arg === "Red"){
        nRed++
        return `${arg}: ${nRed}`
    }

    // let array = arg.split(" ")
    // for(let i = 0; i < array.length; i++ ){
    //     if(array[i] === "Green"){
    //         nGreen++
    //     }else if(array[i] === "Amber"){
    //         nAmber++
    //     }else if(array[i] === "Red"){
    //         nRed++
    //     }
    //     return `Green: ${nGreen}, Amber: ${nAmber}, Red: ${nRed}`
    // }



}



module.exports = score