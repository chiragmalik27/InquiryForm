const fs = require('fs');
const path = require('path');

// Function to write inquiries to a text file named userData.txt
function writeInquiryToFile(inquiry){
    const inquiries = readInquiryFromFile();
    inquiries.push(inquiry);
    const inquiryString = JSON.stringify(inquiries);
    fs.writeFileSync(path.join(__dirname, '../Data/userData.txt'), inquiryString);
}

// Function to read the data from the file
// Function to read the data from the file
function readInquiryFromFile(){
    let inquiryString = '';
    try {
        inquiryString = fs.readFileSync(path.join(__dirname, '../Data/userData.txt')).toString();
    } catch (error) {
        console.error(error);
    }
    return inquiryString ? JSON.parse(inquiryString) : [];
}


module.exports = {
    writeInquiryToFile,
    readInquiryFromFile
};
