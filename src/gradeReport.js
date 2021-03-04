function score(arg){

    if(arg === ""){
        return "No result given"
    } else if(arg === "Green"){
        return "Green: 1"
    } else if(arg === "Amber"){
        return "Amber: 1"
    } else if (arg === "Red"){
        return "Red: 1"
    }

}



module.exports = score