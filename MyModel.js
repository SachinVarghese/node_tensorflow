const tf = require("@tensorflow/tfjs");
require("@tensorflow/tfjs-node");
const path = require("path");
const model_path = "/models/model.json";

let MyModel = function() {};

MyModel.prototype.init = async function() {
  this.model = await tf.loadModel("file://" + path.join(__dirname, model_path));
  this.model.compile({ optimizer: "sgd", loss: "meanSquaredError" });
};

MyModel.prototype.predict = function(testImages) {
  console.log("Predicting ...");
  return this.model.predict(testImages);
};

let x = new MyModel();
x.init().then(async () => {
  x.predict(tf.randomNormal([1, 10])).print();
});
