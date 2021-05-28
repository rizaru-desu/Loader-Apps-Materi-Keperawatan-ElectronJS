const { getHWID } = require("hwid");
const fs = require("fs");
const { encrypt, decrypt } = require("../crypto.js");

const hash = encrypt("Hello World!");

console.log(hash.content);

// {
//     iv: '237f306841bd23a418878792252ff6c8',
//     content: 'e2da5c6073dd978991d8c7cd'
// }

const text = decrypt(hash);

console.log(text); // Hello World!

fs.readFile("./customer.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("Error reading file from disk:", err);
    return;
  }
  try {
    const customer = JSON.parse(jsonString);
    console.log("Customer address is:", customer.address); // => "Customer address is: Infinity Loop Drive"
  } catch (err) {
    console.log("Error parsing JSON string:", err);
  }
});

// Promises
getHWID().then((id) => {
  // use ID however you want
  console.log(id);
});

const buttonclose = document.getElementById("Close");
buttonclose.addEventListener("click", () => {
  const { app } = require("electron").remote;
  app.quit();
});

const buttonminimaze = document.getElementById("Minimaze");
buttonminimaze.addEventListener("click", () => {
  const remote = require("electron").remote;
  var currWin = remote.getCurrentWindow();
  currWin.minimize();
});
