import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { LivreModule } from './livre/livre.module';
import { CategorieModule } from './categorie/categorie.module';
import { EmpruntModule } from './emprunt/emprunt.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './user/Guards/jwt-auth.guard';

@Module({
  imports: [
    UserModule,
    LivreModule,
    CategorieModule,
    EmpruntModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'mohamed',
      password: 'Drabo@mohamed5985',
      database: 'biblio',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
