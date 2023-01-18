// In this task, you will:

// First, require the file system to create a file named "welcome.txt" containing one line "Hello Node".
// Second, create a program that reads and console.log data from welcome.txt

// methode 1

// l open ta3melek fichier.txt vide 
// var fs=require('fs')

// // Asynchronous - Opening File
// console.log("Going to open file!");
// fs.open('welcome.txt', 'w', function(err, fd) {
//    if (err) {
//       return console.error(err);
//    }
//    console.log("File opened successfully!");     
// });


// methode 2
// apend file Asynchronously append data to a file, creating the file if it does not exist.

var fs=require('fs');
const path = require('path');

console.log("Going to open file!");
fs.appendFile('welcome.txt', 'Hello Node', function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("File opened successfully!");     
});

// methode 3  
// writeFile :Asynchronously writes data to a file, replacing the file if it already exists.

// fs.writeFile('welcome.txt', 'Hello Node', function(err) {
//     if (err) {
//        return console.error(err);
//     }
//     console.log("File opened successfully!");     
//  });

// to reads and console.log data from welcome.txt
fs.readFile("welcome.txt", function(err,data) {
    if (err) {
       return console.error(err);
    }
    console.log((data.toString()));     
 });





// Flags
// r : Opens file for reading. An exception occurs if the file does not exist.
// r+ : Opens file for reading and writing. An exception occurs if the file does not exist.
// rs : Opens file for reading in synchronous mode.
// rs+ : Opens file for reading and writing, asking the OS to open it synchronously. See notes for 'rs' about using this with caution.
// w : Opens file for writing. The file is created (if it does not exist) or truncated (if it exists).
// wx : Like 'w' but fails if the path exists.
// w+ : Opens file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).
// wx+ : Like 'w+' but fails if path exists.
// a : Opens file for appending. The file is created if it does not exist.
// ax : Like 'a' but fails if the path exists.
// a+ : Opens file for reading and appending. The file is created if it does not exist.
// ax+ : Like 'a+' but fails if the the path exists.