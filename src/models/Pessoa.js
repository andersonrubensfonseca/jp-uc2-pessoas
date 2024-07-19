const fs = require('fs')
const { exit } = require('process')

class Pessoa{

    constructor(){

    }

    create(data){
        fs.appendFile('./src/data/pessoas.txt',`${JSON.stringify(data,null,2)},\r\n`,(err)=>{
            if(err){
                console.log(err)
            }
        })
    }

    list(){
        fs.readFile('./src/data/pessoas.txt', 'utf8' , (err, data) => {
            if (err) {
              console.error(err)
              return
            }
            console.log(data)
          })
    }

}

module.exports = Pessoa