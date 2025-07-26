DEFAULT_VALUE = "lolol";

let sayHello = (name) => {
  console.log("Hi " + name);
};

let sayHello2 = (greet, name) => {
  console.log(greet + " " + name);
};

let sayHello3 = () => {
  console.log("Hi log");
};

let sayHello4 = (name) => {
  return "Hi " + name;
};

let sayHello5 = (name = DEFAULT_VALUE) => {
  console.log("Hi " + name);
};

let checkInput = (emptyFun, ...input) => {
  if (input == "") {
    emptyFun();
  }
  for (let num of input) {
    console.log(num)
  }
};

sayHello("log1");
console.log("----1");
sayHello2("HIIIIII", "log2");
console.log("----2");
sayHello3();
console.log("----3");
console.log(sayHello4("log4"));
console.log("----4");
sayHello5("log5");
console.log("----5");
checkInput(sayHello5, "lol", "hah", "xdd");
