const fs = require('fs');
const { json } = require('stream/consumers');
const addingNote = (title,body)=>{
    var note ={
        title,body
    }
    fs.writeFileSync('welcome.txt',json.stringify(note))
};


module.exports={
    addingNote
}