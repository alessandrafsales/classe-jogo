// Escrevendo as classes de um Jogo

let typeAttack = ""

class heroes{
    constructor(name,age,type){
        this.name = name
        this.age = age
        this.type = type //Guerreiro, Mago, Monge, Ninja
    }

    attack(){
        // Modos de ataque
        if(hero.type === "Mago"){
            console.log("Usou magia!")
            typeAttack = "magia"
        }else if(hero.type === "Guerreiro"){
            console.log("Usou espada!")
            typeAttack = "espada"
        }else if(hero.type === "Monge"){
            console.log("Usou artes maciais!")
            typeAttack = "artes maciais"
        }else {
            console.log("Usou shuriken!")
            typeAttack = "shuriken"
        }

        console.log(`O herói(a) ${this.name}, com o tipo ${this.type} atacou usando ${typeAttack}`)
    
    }
}

// Referente ao herói
let hero = new heroes("Alessandra", 24, "Guerreiro") // name, age, type = Guerreiro, Mago, Monge, Ninja

// Output
hero.attack()
