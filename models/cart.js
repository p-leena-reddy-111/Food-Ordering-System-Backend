const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const CartSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'users',
  },
  items: [
    {
      foodId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'food', 
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Cart', CartSchema);
