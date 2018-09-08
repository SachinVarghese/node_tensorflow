const MyModel = require("./MyModel");

let x = new MyModel();
x.init().then(() => {
  x.predict([
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 2, 3, 4, 5, 6, 7, 8, 9, 11]
  ]).print();
});
