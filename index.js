// Escrevendo as classes de um Jogo

let attack = ""

class heroes{
    constructor(name,age,type){
        this.name = name
        this.age = age
        this.type = type //Guerreiro, Mago, Monge, Ninja
    }

    write(){
        console.log(`O herói(a) ${this.name}, com o tipo ${this.type} atacou usando ${attack}`)
    }
}

// Referente ao herói
let hero = new heroes("Alessandra", 24, "Ninja")

// Modos de ataque
if(hero.type === "Mago"){
    console.log("Usou magia!")
    attack = "magia"
}else if(hero.type === "Guerreiro"){
    console.log("Usou espada!")
    attack = "espada"
}else if(hero.type === "Monge"){
    console.log("Usou artes maciais!")
    attack = "artes maciais"
}else {
    console.log("Usou shuriken!")
    attack = "shuriken"
}

// Output
hero.write()
