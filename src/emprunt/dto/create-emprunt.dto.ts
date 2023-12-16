import { IsDate, IsNumber, IsString, Length } from 'class-validator';

export class CreateEmpruntDto {
  @IsNumber() exemplaireId: number;
}
