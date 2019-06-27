console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  }catch(e){
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));

};
var addNote = (title,body) =>{
    console.log('Adding note ',title,body);
  // var notes = [];
  var notes = fetchNotes();
  var note = {
    //title:title ES6 style if same just write once
    title,
    body
  };
  
  var duplicateNotes = notes.filter((note) => {
    return note.title === title;
  }
  );

  if(duplicateNotes.length==0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }
  

};

var getAll = () =>{
  console.log('Getting all notes');  
  return fetchNotes();
};

var getNote = (title) =>{
    console.log('Getting note',title);
    var notes = fetchNotes();
    var findNote = notes.filter( (note)=> {
        return note.title === title;
    });
    return findNote[0];
}
var removeNote = (title) =>{
    console.log('Removing note',title);
    var notes = fetchNotes();
    var newNotes = notes.filter( (note) => note.title !== title );
    saveNotes(newNotes);

    return notes.length !== newNotes.length;
}

var logNote = (note) =>{

  debugger;

  console.log('----');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};
module.exports = {
    addNote,  // same as below because identical
    //addNote: addNote
    getAll,
    getNote,
    removeNote,
    logNote
}






/* Learning Purpose
//console.log(module); // exports in module is important its a object which gets returned to require('/notes.js') in this case.

module.exports.age = 25

// real goal to export functions .

 module.exports.addNote = function () {

} 

//instead of this

module.exports.addNote = () => {
    console.log('addNote');
    return 'New Note';


};

module.exports.add = (a,b)=> {
        return a + b;
};

*/