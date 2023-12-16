import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LivreService } from './livre.service';
import { CreateLivreDto } from './dto/create-livre.dto';
import { UpdateLivreDto } from './dto/update-livre.dto';
import { CreateExemplaireDto } from './dto/create-exemplaire.dto';
import { UpdateEmpruntDto } from 'src/emprunt/dto/update-emprunt.dto';
import { Public } from 'src/decorator/is-public';

@Controller('livre')
export class LivreController {
  constructor(private readonly livreService: LivreService) {}

  @Post()
  create(@Body() createLivreDto: CreateLivreDto) {
    return this.livreService.create(createLivreDto);
  }

  @Post('exemplaire')
  createExemplaire(@Body() createexemplaireDto: CreateExemplaireDto) {
    return this.livreService.createExemplaire(createexemplaireDto);
  }

  @Get()
  findAll() {
    return this.livreService.findAll();
  }

  @Get('exemplaire')
  findAllExemplaire() {
    return this.livreService.findAllExemplaire();
  }

  @Get(':id')
  @Public()
  findOne(@Param('id') id: string) {
    return this.livreService.findOne(+id);
  }

  @Get('exemplaire/:id')
  findOneExemplaire(@Param('id') id: string) {
    return this.livreService.findOneExemplaire(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLivreDto: UpdateLivreDto) {
    return this.livreService.update(+id, updateLivreDto);
  }

  @Patch('exemplaire/:id')
  updateExemplaire(
    @Param('id') id: string,
    @Body() updateExemplaireDto: UpdateEmpruntDto,
  ) {
    return this.livreService.updateExemplaire(+id, updateExemplaireDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.livreService.remove(+id);
  }

  @Delete('exemplaire/:id')
  removeExemplaire(@Param('id') id: string) {
    return this.livreService.removeExemplaire(+id);
  }
}
