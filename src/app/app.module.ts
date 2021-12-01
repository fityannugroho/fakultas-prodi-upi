import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { FacultiesStudiesModule } from 'src/faculties-studies/faculties-studies.module';
import { FacultiesModule } from 'src/faculties/faculties.module';
import { StudiesModule } from 'src/studies/studies.module';

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
    StudiesModule,
    FacultiesStudiesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
