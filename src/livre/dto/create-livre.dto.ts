import { IsNumber, IsString, Length } from 'class-validator';

export class CreateLivreDto {
  @IsString() @Length(0, 100) auteur: string;
  @IsString() @Length(0, 100) titre: string;
  @IsString() description: string;
  @IsNumber() categorieId: number;
  @IsString() imageUrl: string;
}
