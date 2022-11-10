import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CarrosselDocument = Carrossel & Document;

@Schema()
export class Carrossel {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  urlImage: string;
}

export const CarrosselSchema = SchemaFactory.createForClass(Carrossel);
