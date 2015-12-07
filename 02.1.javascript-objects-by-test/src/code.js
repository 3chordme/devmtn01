/* LITERALS */
function makeEmptyObject() {
  return {  };
}

/* NEW OBJECT */
function makeEmptyObjectNew() {
  return new Object();
}

/* KEY VALUE PAIRS */
function makeFirstObject() {
  var object = new Object();
  object.keyOnTheLeft = "Value on the right";
  return object;
}

function makeNumberObject() {
  return { numberKey: 9001 };
}

function makeStringObject() {
  return { stringKey: "We are the champions" };
}

function makeBooleanObject() {
  return { booleanKey: true };
}

function makeObjectObject() {
  return { objectKey: {innerObject: "This works"} };
}

function makeArrayObject() {
  return { arrayKey: [1, 2, 3] };
}

function makeFunctionObject() {
  return { sayHi: function() { return "Hi"; } };
}

function makeObjception(){
  var object = {
    objectKey: {
      inceptionLevel1: {
        inceptionLevel2: {
          inceptionLevel3:
          "Objception Complete!"
        }
      }
    }
  };
  return object;
}

function makeMultikeyObject(){
  return {
    prop1: "So beaucoup",
    prop2: "So mucho",
    prop3: "So many"
  };
}

/* DOT PROPERTY */
function returnUrlProperty(obj){
  return obj.url;
}

function returnSubdomainUserCount(obj) {
  return obj.subdomain.userCount;
}

function getUserCount(obj){
  return obj.userCount;
}

function setUserCount(obj){
  obj.userCount = 7;
}

/* SQUARE BRACKET NOTATION */
function returnUrlPropertySquare(obj){
  return obj["url"];
}

function returnSubdomainUserCountSquare(obj){
  return obj["subdomain"]["userCount"];
}

function getUserCountSquare(obj){
  return obj["userCount"];
}

function setUserCountSquare(obj){
  obj["userCount"] = 7;
}

/* DELETE */
function deleteSecond(obj){
  delete obj.second;
  return obj;
}

/* LOOP */
function getValuesFromObject(obj){
  var arr = [];
  for (var p in obj) {
    arr.push(obj[p]);
  }
  return arr;
}

/* FUNCTIONS ARE OBJECTS */
function invokeAnObject(){
  var obj = {};
  obj(); //this throws an error, which makes the test pass.
}
