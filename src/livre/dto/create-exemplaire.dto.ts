import { IsNumber, IsString } from 'class-validator';

export class CreateExemplaireDto {
  @IsString() code: string;
  @IsNumber() livreId: number;
}
