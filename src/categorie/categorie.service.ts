import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategorieDto } from './dto/create-categorie.dto';
import { UpdateCategorieDto } from './dto/update-categorie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Categorie } from './entities/categorie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategorieService {
  constructor(
    @InjectRepository(Categorie)
    private categorieRepository: Repository<Categorie>,
  ) {}
  async create(createCategorieDto: CreateCategorieDto) {
    return this.categorieRepository.save(createCategorieDto);
  }

  async findAll() {
    return await this.categorieRepository
      .createQueryBuilder('categorie')
      .leftJoinAndSelect('categorie.livre', 'livre')
      .leftJoinAndSelect('livre.exemplaire', 'exemplaire')
      .getMany();
  }

  async findOne(id: number) {
    const categorie = await this.categorieRepository.findOneBy({ id });
    if (!categorie)
      throw new NotFoundException(`La categorie de id ${id} n'existe pas`);
    return categorie;
  }

  async update(id: number, updateCategorieDto: UpdateCategorieDto) {
    const oldCategorie = await this.findOne(id);
    return this.categorieRepository.update(id, {
      ...oldCategorie,
      ...updateCategorieDto,
    });
  }

  async remove(id: number) {
    const categorie = this.findOne(id);
    return this.categorieRepository.delete(id);
  }
}
