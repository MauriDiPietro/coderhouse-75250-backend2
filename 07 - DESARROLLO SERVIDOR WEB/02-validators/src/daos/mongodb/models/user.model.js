import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    // minlength: 5,
    minLength: [5, 'Debe contener al menos 5 caracteres'],
    maxlength: 50,
  },
  last_name: {
    type: String,
    required: [true, 'El apellido es obligatorio'],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  },
  age: {
    type: Number,
    min: [18, 'Debe ser mayor de edad. {VALUE} es menor de edad'],
    max: 100
    // required: true,
    // default: 0
  },
  password: {
    type: String,
    required: true,
    default: ' ',
  },
  role: {
    type: String,
    default: "user",
  },
  image: {
    type: String,
  },
  isGithub: {
    type: Boolean,
    default: false
  },
  isGoogle: {
    type: Boolean,
    default: false
  },
  cart: {       
    type: Schema.Types.ObjectId,
    ref: "carts",
    default: null
  }
});

export const UserModel = model("users", UserSchema);
