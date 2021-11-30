import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { FacultiesModule } from 'src/faculties/faculties.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // Connect to MongoDB.
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.MONGODB_URI,
      }),
    }),
    // Endpoint Module
    FacultiesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
