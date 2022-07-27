const mongoose = require("mongoose");

const mahsulot = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Mahsulot nomini kiritish majburiy"],
    minLength: [4, "Minimal simvollar 4 ta harfdan iborat"],
  },
  description: {
    type: String,
    required: [true, "Mahsulot nomini kiritish majburiy"],
    minLength: [20, "Minimal simvollar 4 ta harfdan iborat"],
  },
  photo: {
    type: String,
    required: true,
  },
  quantity: [String],
  add: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "categories",
    },
  ],
  new: {
    type: Bolean,
    default: false,
  },
  condition: {
    type: Array,
  },
  category: {
    name: {
      type: String,
      enum: ["pizza", "desserts", "snacks", "drinks"],
      required: [true, "Mahsulot turini kiritish majburiy"],
    },
  },
  price: {
    type: String,
    required: true,
  },
});

const pizzaModel = mongoose.model("pizza", mahsulot);

module.exports = pizzaModel;
// pizaa
// {
// name:String,
// ta'rifi:string,
// summa:number,
// photo:[kichik,o'rtacha,katta],
// ma'salliqlar: [nomalari],
// pitsagaQo'shishimumkin bo'lgannarsalar:[String],
// pizzaTuri:{//qalinligi yoki defaultHolat}
// new:Boolen,
// skitka:String
// }
