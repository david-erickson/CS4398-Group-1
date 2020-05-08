/*QUnit.helpers( this );
QUnit.exposeInternals();

function tests() {
  console = Logger;
  DekogonITest();

}

function doGet( e ) {
  QUnit.urlParams( e.parameter );
  QUnit.config({
    title: "QUnit for Google Apps Script - Test suite" // Sets the title of the test page.
});
  QUnit.load( tests );
  
  return QUnit.getHtml();
};

function userOrderTest() {
  test("Testing user info order adding", funciton() {
    userOrder([a, b, c, d, e]);
    var url = "https://docs.google.com/spreadsheets/d/1D465I5RKnoyZLWZ8nZCC9zm3dsSMi7Fifvi3R4jQUcs/edit#gid=354223271";
    var ss = SpreadsheetApp.openByUrl(url);
    var ws = ss.getSheetByName("User");
    
    row = ws.getLastRow("User");
    equal(row, [a,b,c,d,e], 'Success') //Checks the last row of User for valid input
    });
}

function clearCartTest() {
  test("Testing functionality of cart clearing function", function() {
    buyDekI(1);
    clearCart;
    var url = "https://docs.google.com/spreadsheets/d/1D465I5RKnoyZLWZ8nZCC9zm3dsSMi7Fifvi3R4jQUcs/edit#gid=354223271";
    var ss = SpreadsheetApp.openByUrl(url);
    var ws = ss.getSheetByName("Cart");

    equal(ws.getRange("A2").getCell().isBlank() ,1, 'Success') // Checks for the emptiness of a recently cleared cell
    
    });
}

function DekogonITest() {
  test("Testing Dekogon I order button input validity", function () {
    clearCart(); //Clear cart completely
    buyDekI(10);
    buyDekI(10);
    
    var url = "https://docs.google.com/spreadsheets/d/1D465I5RKnoyZLWZ8nZCC9zm3dsSMi7Fifvi3R4jQUcs/edit#gid=354223271";
    var ss = SpreadsheetApp.openByUrl(url);
    var ws = ss.getSheetByName("Cart");

    equal(ws.getRange(2, 1),ws.getRange(3, 1),'Success'); //Checks for appropriately identical content in recently updated cells
    
  });
  
  function DekogonProTest() {
  test("Testing Dekogon I order button input validity", function () {
    clearCart(); //Clear cart completely
    buyDekPro(10);
    buyDekPro(10);
    
    var url = "https://docs.google.com/spreadsheets/d/1D465I5RKnoyZLWZ8nZCC9zm3dsSMi7Fifvi3R4jQUcs/edit#gid=354223271";
    var ss = SpreadsheetApp.openByUrl(url);
    var ws = ss.getSheetByName("Cart");

    equal(ws.getRange(2, 1),ws.getRange(3, 1),'Success'); //Checks for appropriately identical content in recently updated cells
    
  });
  
  function AppleTest() {
  test("Testing Dekogon I order button input validity", function () {
    clearCart(); //Clear cart completely
    buyApple(10);
    buyApple(10);
    
    var url = "https://docs.google.com/spreadsheets/d/1D465I5RKnoyZLWZ8nZCC9zm3dsSMi7Fifvi3R4jQUcs/edit#gid=354223271";
    var ss = SpreadsheetApp.openByUrl(url);
    var ws = ss.getSheetByName("Cart");

    equal(ws.getRange(2, 1),ws.getRange(3, 1),'Success'); //Checks for appropriately identical content in recently updated cells
    
  });
}*/