import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  hashPassword: {
    type: String,
    required: true,
    select: false, // By default, do not include the hashPassword field in queries
  },
});

const User = mongoose.model('User', userSchema);
export default User;
