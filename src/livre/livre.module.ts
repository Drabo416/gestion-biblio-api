import { Module } from '@nestjs/common';
import { LivreService } from './livre.service';
import { LivreController } from './livre.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Livre } from './entities/livre.entity';
import { ExemplaireEntity } from './entities/exemplaire.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Livre, ExemplaireEntity])],
  controllers: [LivreController],
  exports: [LivreService],
  providers: [LivreService],
})
export class LivreModule {}
