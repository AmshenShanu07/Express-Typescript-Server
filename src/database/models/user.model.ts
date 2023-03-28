// ** Doc: https://millo-l.github.io/Typescript-mongoose-methods-statics/

import { Schema, model, Model } from 'mongoose';

export interface UserI {
  name: string;
  email: string;
  password: string;
}

// Custom Method Interface
export interface UserDocumentI extends UserI, Document {
  checkPassword: (pswd: string) => boolean;
}

// Custom Static Method Interface
export interface UserModelI extends Model<UserDocumentI> {
  findAllUser: () => UserDocumentI[];
  findUserById: (id: string) => UserDocumentI;
  findByEmail: (email: string) => UserDocumentI;
}

const userSchema = new Schema<UserDocumentI>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// ** Custom Methods
userSchema.methods.checkPassword = function (password: string) {
  return this.password === password;
};

// ** Custom Static Methods
userSchema.statics.findAllUsers = function () {
  return this.find({});
};

userSchema.statics.findUserById = function (id: string) {
  return this.findById({ _id: id });
};

userSchema.statics.findUserByEmail = function (email: string) {
  return this.findOne({ email });
};

const User = model<UserDocumentI, UserModelI>('User', userSchema);

export default User;
