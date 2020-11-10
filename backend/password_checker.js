// Requires
const { createReadStream } = require('fs');
const { createInterface } = require('readline');
// Constants
const PASSWORD_FILE = './xato-net-10-million-passwords.txt';
// Arguments
const password = process.argv[2];

function isPasswordInFile(password, filePath) {
    return new Promise((resolve, reject) => {
        try {
            const stream = createReadStream(filePath);
            const readLine = createInterface({input: stream, })
            readLine.on('line', data => {
                if (data == password) {
                    readLine.close();
                    stream.close();
                    resolve(true);
                }
            });
            stream.on('end', () => {
                resolve(false)
            })
        } catch (error) {
            reject(error);
        }
    });
}

isPasswordInFile(password, PASSWORD_FILE)
    .then( result => console.log(result))
    .catch(error => console.log(error));