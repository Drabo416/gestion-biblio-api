import { IsString, Length } from 'class-validator';

export class CreateCategorieDto {
  @IsString() @Length(0, 100) label: string;
}
