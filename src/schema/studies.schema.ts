import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StudiesDocument = Study & Document;

/**
 * Schema for studies collection.
 *
 * Note: Collection name is case-sensitive.
 */
@Schema({ collection: 'fakultas_prodi' })
export class Study {
  @Prop()
  kode: string;

  @Prop()
  prodi: string;

  @Prop()
  fakultas: string;
}

export const StudiesSchema = SchemaFactory.createForClass(Study);
