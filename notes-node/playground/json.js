// var obj = {
//     name: 'Andrew'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Andrew","age":25}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person)

const fs = require('fs');

//Add Content
var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync("notes.json",originalNoteString);



//readContent
var noteString = fs.readFileSync('notes.json');
//note

var note = JSON.parse(noteString)
console.log(typeof note)
console.log(note.title)
