class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo.toLowerCase()
    }
    atacar(){
        switch (this.tipo) {
            case "mago":
                console.log(`O ${this.tipo} ${this.nome} atacou usando magia.`)                
                break;
            case "guerreiro":
                console.log(`O ${this.tipo} ${this.nome} atacou usando espada.`)                
                break;
            case "monge":
                console.log(`O ${this.tipo} ${this.nome} atacou usando artes marciais.`)                
                break;
            case "ninja":
                console.log(`O ${this.tipo} ${this.nome} atacou usando shuriken.`)                
                break;
        }
    }
}

let magoImplacavel = new heroi("Merlin", 28, "mago")
magoImplacavel.atacar()

let guerreiroFeroz = new heroi("Leonidas", 40, "guerreiro")
guerreiroFeroz.atacar()

let punhosDivinos = new heroi("Punhos Divinos", 20, "monge")
punhosDivinos.atacar()

let shadow = new heroi("Shadow", 25, "ninja")
shadow.atacar()