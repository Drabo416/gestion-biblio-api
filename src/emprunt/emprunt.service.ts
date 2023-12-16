import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmpruntDto } from './dto/create-emprunt.dto';
import { UpdateEmpruntDto } from './dto/update-emprunt.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Emprunt } from './entities/emprunt.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmpruntService {
  constructor(
    @InjectRepository(Emprunt)
    private empruntRepository: Repository<Emprunt>,
  ) {}
  async create(createEmpruntDto: CreateEmpruntDto) {
    const emprunt = await this.empruntRepository.create({
      ...createEmpruntDto,
      exemplaire: { id: createEmpruntDto.exemplaireId },
      dateEmprunt: new Date(),
    });
    const data = await this.empruntRepository.save(emprunt);
    return this.findOne(data.id);
  }

  async findAll() {
    return await this.empruntRepository
      .createQueryBuilder('emprunt')
      .leftJoinAndSelect('emprunt.exemplaire', 'exemplaire')
      .leftJoinAndSelect('exemplaire.livre', 'livre')
      .getMany();
  }

  async findOne(id: number) {
    const emprunt = await this.empruntRepository
      .createQueryBuilder('emprunt')
      .leftJoinAndSelect('emprunt.exemplaire', 'exemplaire')
      .leftJoinAndSelect('exemplaire.livre', 'livre')
      .where('emprunt.id =:id', { id })
      .getOne();
    if (!emprunt)
      throw new NotFoundException(`Le emprunt de id ${id} n'existe pas`);
    return emprunt;
  }

  async update(id: number, updateEmpruntDto: UpdateEmpruntDto) {
    // const oldEmprunt = await this.findOne(id);
    // return this.empruntRepository.update(id, {
    //   ...oldEmprunt,
    //   ...updateEmpruntDto,
    // });
  }

  remove(id: number) {
    const emprunt = this.findOne(id);
    return this.empruntRepository.delete(id);
  }
}
