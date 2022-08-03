import { model, Schema, Document } from "mongoose";
import { SoftDeleteModel } from "mongoose-delete";

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

export interface IPassenger extends Document {
  phone: string;
  fullName: string;
  email?: string;
  password?: string;
  gender: Gender;
  FCM_token?: string;
}

const PassengerSchema = new Schema<IPassenger>(
  {
    phone: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (value: string) =>
          RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$/).test(value),
        message: (props) => `${props.value} is not a valid phone number`,
      },
    },
    fullName: { type: String, required: true },
    email: { type: String },
    password: { type: String },
    gender: {
      type: String,
      enum: Gender,
      required: true,
      default: Gender.MALE,
    },
    FCM_token: { type: String },
  },
  {
    timestamps: true,
  }
);

const Passenger = model<IPassenger>(
  "Passenger",
  PassengerSchema
) as SoftDeleteModel<IPassenger>;
export default Passenger;
