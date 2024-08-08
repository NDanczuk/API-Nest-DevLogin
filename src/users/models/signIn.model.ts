import { Document } from 'mongoose';

export interface ISignIn extends Document {
  name: string;
  jwtToken: string;
  email: string;
}
