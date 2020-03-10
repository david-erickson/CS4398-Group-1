QUnit.helpers( this );
QUnit.exposeInternals();

function tests() {
console = Logger;
userClickedTest();
checkUserTest();
}

function doGet( e ) {
QUnit.urlParams( e.parameter );
QUnit.config({
title: "QUnit for Google Apps Script - Test suite" // Sets the title of the test page.
});
QUnit.load( tests );

return QUnit.getHtml();
};

function userClickedTest() {

}

function checkUserTest() {
test("checkUser testing", function() {
equal(checkUser("usename", "pass"), 0, "Testing for impossible username/password combination");
});
}