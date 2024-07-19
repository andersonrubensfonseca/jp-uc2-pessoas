const Pessoa = require("./models/Pessoa")
const readline = require('readline')
const {exit} = require('process')
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const pessoa = new Pessoa()


function adicionar(){
    
    let obj = {
        nome:"",
        documento:"",
        email:"",
        endereco:""
    }

    leitor.question("Digite um nome: ",function(answer){
        obj.nome = answer
        leitor.question("Digite um documento: ", function(answer){
            obj.documento = answer
            leitor.question("Digite um e-mail: ", function(answer){
                obj.email = answer
                leitor.question("Digite o endereço: ", function(answer){
                    obj.endereco = answer
                    pessoa.create(obj)
                    leitor.question("Adicionar nova pessoa? (s ou n) ",function(answer){
                        if(answer.toLowerCase()==="s"){
                            adicionar()
                        }else{
                            principal()
                        }
                    })
                })
            })
        })
    })
}


function principal(){
    leitor.question("Listar pessoas ou Adicionar pessoa? (L ou A) ",function(answer){
        if(answer.toUpperCase()==="A"){
            adicionar()        
        }else if(answer.toUpperCase()==="L"){
            pessoa.list()
            setTimeout(()=>{
                principal()
            },80)
        }else{
            exit()
        }
    })

}


principal();