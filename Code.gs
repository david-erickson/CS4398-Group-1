function myFunction() {
  var exString = "This is the example string";
  
  Logger.log(exString);
}

function userClicked(name, item, address, city, zip, state, price, quantity, total) {
  var url = "https://docs.google.com/spreadsheets/d/1D465I5RKnoyZLWZ8nZCC9zm3dsSMi7Fifvi3R4jQUcs/edit#gid=698686533";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Sheet1");
  
  ws.appendRow([name, new Date(), item, address, city, zip, state, price, quantity, total])
}

function checkUser(uName, uPass) {
  var url = "https://docs.google.com/spreadsheets/d/1D465I5RKnoyZLWZ8nZCC9zm3dsSMi7Fifvi3R4jQUcs/edit#gid=698686533";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("User Accounts");
  
  var wName = ws.getRange("Username");
  var wPass = ws.getRange("Password");
  
  for (var y = 0; y < 100; y++) {
    
  }

}

function doGet() {
  return HtmlService.createHtmlOutputFromFile('retro computers.html');
}