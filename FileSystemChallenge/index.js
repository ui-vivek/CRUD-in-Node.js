// CRUD oparation in Node.js
const fs=require('fs'); // Creating 'fs' module
// 1). creating file in cunnernt directory with name "Folder_Name"
fs.mkdirSync("Folder_Name");  

// 2). Add text file inside the folder
fs.writeFileSync("Folder_Name/FileName.txt","Creating Some Text Content inside the File"); 

// 3). Add more data into the file at the end of the contenet.
fs.appendFileSync('Folder_Name/FileName.txt'," Adding some more data at the end");

// 4.)Read the data of the file without buffer 
const data=fs.readFileSync('Folder_Name/FileName.txt','utf-8') // ('utf-8' is used to convert buffer into string)
// console.log(data); // To ptint the 

// 5). Rename the file name to 'FileNameChanged'
fs.renameSync('Folder_Name/FileName.txt','Folder_Name/FileNameChanged.txt');

// 6). Remove file and folder
fs.unlinkSync('Folder_Name/FileNameChanged.txt')  // To delete the file 
fs.rmdirSync('Folder_Name')  // to delete the folder
