const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define user schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, {
  timestamps: true,  // Automatically add createdAt and updatedAt fields
});

// Hash the password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();  // Only hash if the password was modified
  this.password = await bcrypt.hash(this.password, 10); // Hash password with salt rounds
  next();
});

// Method to compare passwords during login
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password); // Compare entered password with stored hash
};

// Create User model
const User = mongoose.model('User', userSchema);

module.exports = User;
