function positions(firstPlace, secondPlace, lastPlace) {
    let podio = [firstPlace, secondPlace, lastPlace]
    if ("Daniel" === lastPlace) {
        lastPlace = secondPlace
        secondPlace = "Daniel"
    }else if("Daniel" === secondPlace) {
        secondPlace = firstPlace
        firstPlace = "Daniel"
    }


    return "1º Colocado " + firstPlace + ", 2º Colocado " + secondPlace + ", 3º Colocado " + lastPlace
}
console.log(positions("Rafael","Manoel","Daniel"))


let nomeDoCompetidor = ["Rafael","Manoel","Daniel"]
