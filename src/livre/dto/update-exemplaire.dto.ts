import { PartialType } from '@nestjs/mapped-types';
import { CreateLivreDto } from './create-livre.dto';
import { CreateExemplaireDto } from './create-exemplaire.dto';

export class UpdateExemplaireDto extends PartialType(CreateExemplaireDto) {}
