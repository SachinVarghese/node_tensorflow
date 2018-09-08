const MyModel = require("./MyModel");

let x = new MyModel();
x.init().then(async () => {
 val= x.predict([
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 2, 3, 4, 5, 6, 7, 8, 9, 11]
  ])
prediction = await val.data();
console.log(prediction,val.shape);
	
});
