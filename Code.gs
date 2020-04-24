
// Required to run
function doGet() {
  return HtmlService.createHtmlOutputFromFile('retroComputers');
}

function myFunction() {
  // test function for writing to log
  var exString = "This is the example string";
  
  Logger.log(exString);
}

function buyApple(quantity) {
  var url = "https://docs.google.com/spreadsheets/d/1D465I5RKnoyZLWZ8nZCC9zm3dsSMi7Fifvi3R4jQUcs/edit#gid=698686533";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Cart");
  var productId = "Apple II";
  var description = "This is the Apple II. It's a very iconic retro computer.";
  var price = "300";
  
  ws.appendRow([productId, description, price, quantity]) 
}
function buyDekPRo(quantity) {
  var url = "https://docs.google.com/spreadsheets/d/1D465I5RKnoyZLWZ8nZCC9zm3dsSMi7Fifvi3R4jQUcs/edit#gid=698686533";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Cart");
  var productId = "Dekogon Workstation I";
  var description = "Deluxe deckogon workstation complete with mouse.";
  var price = "400";
  
  ws.appendRow([productId, description, price, quantity]) 
}
function buyDekI(quantity) {
  var url = "https://docs.google.com/spreadsheets/d/1D465I5RKnoyZLWZ8nZCC9zm3dsSMi7Fifvi3R4jQUcs/edit#gid=698686533";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Cart");
  var productId = "Dekogon Workstation I";
  var description = "Deluxe deckogon workstation complete with mouse.";
  var price = "150";
  
  ws.appendRow([productId, description, price, quantity]) 
}

function userClicked(name, item, address, city, zip, state, price, quantity, total) {
  
  // get spreadsheet by name
  var url = "https://docs.google.com/spreadsheets/d/1D465I5RKnoyZLWZ8nZCC9zm3dsSMi7Fifvi3R4jQUcs/edit#gid=698686533";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Orders");
  
  ws.appendRow([name, new Date(), item, address, city, zip, state, price, quantity, total])
}

function checkUser(uName, uPass) {
  
  // get spreadsheet by name
  var url = "https://docs.google.com/spreadsheets/d/1D465I5RKnoyZLWZ8nZCC9zm3dsSMi7Fifvi3R4jQUcs/edit#gid=698686533";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("User Accounts");
  
  var wName = ws.getRange("Username");
  var wPass = ws.getRange("Password");
  
  // loop through spreadsheet and compare username, if matching username found then compare password, max 98 users
  for (var y = 2; y < 100; y++) {
    if(ws.getRange(y, 0) == uName && ws.getRange(y, 1) == uPass){
      //username and password are correct
      return true;
    }
  }
  //If loop is fully traversed
  //Username and password didn't match any existing records
  return false;
}
