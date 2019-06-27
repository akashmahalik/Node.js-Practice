console.log('Starting app.js')

const fs = require('fs');
const _  = require('lodash');
const notes = require('./notes.js');
const yargs = require('yargs');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};
const bodyOptions  = {
    describe: ' Body of note',
    demand: true,
    alias: 'b'
};
//const argv = yargs.argv

const argv = yargs
    .command('add','Add a new note',{
        title: titleOptions,
        body: bodyOptions
    })
    .command('list','List all Notes')
    .command('read','Read a note',{
        title: titleOptions
    })
    .command('remove','Remove a note',{
        title: titleOptions
    })
    .help()
    .argv;
// var command = process.argv[2]
var command = argv._[0];

console.log('Command: ',command);

console.log(process.argv);

console.log('Yargs',argv);

if(command == 'add') {
    console.log('Adding new note');
    note = notes.addNote(argv.title,argv.body);
    if(note)
    {
        console.log('Note Created ');
        notes.logNote(note);

    }
    else{
        console.log('Title Already Exists!!!')

    }

} else if(command =='list'){
    console.log('Listing all notes');
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);

    allNotes.forEach((note) => notes.logNote(note));

}else if(command =='read'){
    console.log('Reading note');
    var note = notes.getNote(argv.title);
    if(note){
        console.log('Note Found');
        notes.logNote(note);
    }else{
        console.log('Note not Found');
    }

}else if (command =='remove'){
    console.log('Removing note');
    var noteRemoved=notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was Removed':"Note Doesn't Exist";
    console.log(message);
}else{
    console.log('Command not recognized');
}




















/*Learning purpose

console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _  = require('lodash');
const notes = require('./notes.js') // basically runs notes.js 

// console.log(_.isString(true));
// console.log(_.isString('Andrew'));

// var filteredArray = _.uniq(['Mike',1,'Andrew',1,2,3,4]);
// console.log(filteredArray);



// var res = notes.addNote();
// console.log(res);

var user = os.userInfo();


// using notes.js function by passing parameters from here

console.log('Result: ', notes.add(9,-2));

// console.log(user);

// fs.appendFile('greetings.txt','Hello World!',
// function(err){
//     if(err)
//     {
//         console.log('hahaa');
//     }
// }
// );


// fs.appendFile('greetings.txt','Hello' + user.username + '!',
// function(err){
//     if(err)
//     {
//         console.log('hahaa');
//     }
// }
// );

// fs.appendFile('greetings.txt',`Hello ${user.username}! You are ${notes.age}`,   // ES6 template strings
// function(err){
//     if(err)
//     {
//         console.log('hahaa');
//     }
// }
// );

*/