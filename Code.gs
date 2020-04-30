function doGet(e) {
  Logger.log( Utilities.jsonStringify(e) );
  if (!e.parameter.page) {
    // When no specific page requested, return "home page"
    return HtmlService.createTemplateFromFile('retroComputers').evaluate();
  }
  // else, use page parameter to pick an html file from the script
  return HtmlService.createTemplateFromFile(e.parameter['page']).evaluate();
}

function getScriptUrl() {
 var url = ScriptApp.getService().getUrl();
 return url;
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
  var price = "$300";
  
  ws.appendRow([productId, description, price, quantity]) 
}
function buyDekPRo(quantity) {
  var url = "https://docs.google.com/spreadsheets/d/1D465I5RKnoyZLWZ8nZCC9zm3dsSMi7Fifvi3R4jQUcs/edit#gid=698686533";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Cart");
  var productId = "Dekogon Workstation Pro";
  var description = "Deluxe deckogon workstation complete with mouse.";
  var price = "$400";
  
  ws.appendRow([productId, description, price, quantity]) 
}
function buyDekI(quantity) {
  var url = "https://docs.google.com/spreadsheets/d/1D465I5RKnoyZLWZ8nZCC9zm3dsSMi7Fifvi3R4jQUcs/edit#gid=698686533";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Cart");
  var productId = "Dekogon Workstation I";
  var description = "Standard  deckogon personal computer.";
  var price = "$150";
  
  ws.appendRow([productId, description, price, quantity]) 
}

function clearCart() 
{
  var url = "https://docs.google.com/spreadsheets/d/1D465I5RKnoyZLWZ8nZCC9zm3dsSMi7Fifvi3R4jQUcs/edit#gid=698686533";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Cart");
  ws.getRange("A2:D999").clearContent();
}

function userOrder(name, address, city, zip, state) {
  
  // get spreadsheet by name
  var url = "https://docs.google.com/spreadsheets/d/1D465I5RKnoyZLWZ8nZCC9zm3dsSMi7Fifvi3R4jQUcs/edit#gid=698686533";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("User");

  ws.appendRow([name, address, city, zip, state]) 
}


function fillOrder() {
  var url = "https://docs.google.com/spreadsheets/d/1D465I5RKnoyZLWZ8nZCC9zm3dsSMi7Fifvi3R4jQUcs/edit#gid=698686533";
  var ss = SpreadsheetApp.openByUrl(url);
  var wsC = ss.getSheetByName("Cart");
  var wsU = ss.getSheetByName("User")
  var wsO = ss.getSheetByName("Orders");
  while (!(wsC.getRange("A2:D2").isBlank()))
  {
    var Cvalues = wsC.getRange(wsC.getLastRow(), 1, 1, 4);
    var Uvalues = wsU.getRange(wsU.getLastRow(), 1, 1, 5);
    var destRangeC = wsO.getRange(wsO.getLastRow()+1,1);
    var destRangeU = wsO.getRange(wsO.getLastRow()+1,5);
    Cvalues.copyTo (destRangeC, {contentsOnly: true});
    Uvalues.copyTo (destRangeU, {contentsOnly: true});
    wsC.deleteRow(wsC.getLastRow());
  }
}

function combineSheets() {
 var url = "https://docs.google.com/spreadsheets/d/1D465I5RKnoyZLWZ8nZCC9zm3dsSMi7Fifvi3R4jQUcs/edit#gid=698686533";
 var ss = SpreadsheetApp.openByUrl(url);
 var allsheets = ss.getSheets(); 
 var combineSht = ss.getSheetByName("Orders"); 
 for (var i=0; i<allsheets.length; i++) 
 {
   if (shtName != 'Orders')
   {
     var shtName = allsheets[i].getName();
     var sht = ss.getSheetByName(shtName);
     var shtrng = sht.getDataRange();
     var shtrngA = shtrng.getValues(); 
     for(var j=0;j<shtrngA.length;j++)
     {
       combineSht.appendRow(shtrngA[j]);
     }
   }
 }
 SpreadsheetApp.flush();
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
