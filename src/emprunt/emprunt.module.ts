import { Module } from '@nestjs/common';
import { EmpruntService } from './emprunt.service';
import { EmpruntController } from './emprunt.controller';
import { Emprunt } from './entities/emprunt.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Emprunt])],
  controllers: [EmpruntController],
  providers: [EmpruntService],
})
export class EmpruntModule {}
