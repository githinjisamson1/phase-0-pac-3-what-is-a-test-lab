const name = "Susan";
const height = 39;
const message = `${name} is ${height} inches tall`;

function doNothing() {}

function sayHello() {
  console.log("Hello!");
}
sayHello();

function sayHelloToIsabel() {
  console.log("Hello, Isabel!");
}
sayHelloToIsabel();

function sayHelloToSofia() {
  console.log("Hello, Sofia!");
}
sayHelloToSofia();

function sayHelloToBrendan() {
  console.log("Hello, Brendan!");
}
sayHelloToBrendan()

module.exports = {name, height, message};
