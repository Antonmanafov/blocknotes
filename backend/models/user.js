import mongoose from 'mongoose'


const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 1
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  blocknotes: [],
  cards: [],
  firstname: {
    type: String,
    default: ''
  },
  lastname: {
    type: String,
    default: ''
  },
  age: {
    type: String,
    default: ''
  },
  aboutMe: {
    type: String,
    default: ''
  },
  avatar: {
    type: String,
    default: 'https://i.livelib.ru/auface/553447/o/b052/Nikolaj_Zhdanov.jpg'
  }
});

const User = mongoose.model("User", UserSchema);

export default User
