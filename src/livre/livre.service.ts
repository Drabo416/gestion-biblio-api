import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLivreDto } from './dto/create-livre.dto';
import { UpdateLivreDto } from './dto/update-livre.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Livre } from './entities/livre.entity';
import { Repository } from 'typeorm';
import { CreateExemplaireDto } from './dto/create-exemplaire.dto';
import { ExemplaireEntity } from './entities/exemplaire.entity';
import { UpdateEmpruntDto } from 'src/emprunt/dto/update-emprunt.dto';

@Injectable()
export class LivreService {
  constructor(
    @InjectRepository(Livre)
    private livreRepository: Repository<Livre>,
    @InjectRepository(ExemplaireEntity)
    private exemplaireRepository: Repository<ExemplaireEntity>,
  ) {}
  async create(createLivreDto: CreateLivreDto) {
    return await this.livreRepository.save({
      ...createLivreDto,
      categorie: { id: createLivreDto.categorieId },
    });
  }

  async createExemplaire(createExemplaireDto: CreateExemplaireDto) {
    return await this.exemplaireRepository.save({
      ...createExemplaireDto,
      livre: { id: createExemplaireDto.livreId },
    });
  }

  async findAll() {
    return await this.livreRepository
      .createQueryBuilder('livre')
      .leftJoinAndSelect('livre.categorie', 'categorie')
      .leftJoinAndSelect('livre.exemplaire', 'exemplaire')
      .getMany();
  }
  async findAllExemplaire() {
    return await this.exemplaireRepository.find();
  }

  async findOneExemplaire(id: number) {
    const exemplaire = await this.exemplaireRepository.findOneBy({ id });
    if (!exemplaire)
      throw new NotFoundException(`Le exemplaire de id ${id} n'existe pas`);
    return exemplaire;
  }

  async findOne(id: number) {
    const livre = await this.livreRepository
      .createQueryBuilder('livre')
      .leftJoinAndSelect('livre.categorie', 'categorie')
      .leftJoinAndSelect('livre.exemplaire', 'exemaplre')
      .getOne();
    if (!livre)
      throw new NotFoundException(`Le livre de id ${id} n'existe pas`);
    return livre;
  }

  async update(id: number, updateLivreDto: UpdateLivreDto) {
    const oldLivre = await this.findOne(id);
    return this.livreRepository.update(id, {
      ...oldLivre,
      ...updateLivreDto,
    });
  }

  async updateExemplaire(id: number, updateExempllaireDto: UpdateEmpruntDto) {
    const oldExemplaire = await this.findOneExemplaire(id);
    return this.exemplaireRepository.update(id, {
      ...oldExemplaire,
      ...updateExempllaireDto,
    });
  }
  remove(id: number) {
    const livre = this.findOne(id);
    return this.livreRepository.delete(id);
  }
  removeExemplaire(id: number) {
    const exemplaire = this.findOneExemplaire(id);
    return this.exemplaireRepository.delete(id);
  }
}
