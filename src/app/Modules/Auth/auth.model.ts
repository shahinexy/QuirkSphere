import { model, Schema } from "mongoose";
import { TRegisterUser } from "./auth.intarface";
import bcrypt from "bcrypt";
import config from "../../config";

const userRegisterSchema = new Schema<TRegisterUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userRegisterSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_round)
  );
  next();
});

userRegisterSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

export const UserRegisterModel = model<TRegisterUser>(
  "UserRegister",
  userRegisterSchema
);
