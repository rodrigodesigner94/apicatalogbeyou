import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClientDocument = Client & Document;

@Schema()
export class Client {
  @Prop({ required: true })
  name: string;

  @Prop()
  lastName: string;

  @Prop({ required: true })
  phone: string;

  @Prop()
  email: string;

  @Prop()
  birthday: string;

  @Prop()
  adress: string;

  @Prop()
  postalCode: number;

  @Prop()
  size: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
