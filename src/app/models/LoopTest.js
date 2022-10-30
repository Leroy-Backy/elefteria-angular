var strings = ["one", "two", "three"];
console.log(strings);
strings = strings.map(function (str) { return "Gra-" + str; });
console.log(strings);
