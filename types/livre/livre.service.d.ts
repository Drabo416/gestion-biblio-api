import { CreateLivreDto } from './dto/create-livre.dto';
import { UpdateLivreDto } from './dto/update-livre.dto';
import { Livre } from './entities/livre.entity';
import { Repository } from 'typeorm';
import { CreateExemplaireDto } from './dto/create-exemplaire.dto';
import { ExemplaireEntity } from './entities/exemplaire.entity';
import { UpdateEmpruntDto } from 'src/emprunt/dto/update-emprunt.dto';
export declare class LivreService {
    private livreRepository;
    private exemplaireRepository;
    constructor(livreRepository: Repository<Livre>, exemplaireRepository: Repository<ExemplaireEntity>);
    create(createLivreDto: CreateLivreDto): Promise<{
        categorie: {
            id: number;
        };
        auteur: string;
        titre: string;
        description: string;
        categorieId: number;
        imageUrl: string;
    } & Livre>;
    createExemplaire(createExemplaireDto: CreateExemplaireDto): Promise<{
        livre: {
            id: number;
        };
        code: string;
        livreId: number;
    } & ExemplaireEntity>;
    findAll(): Promise<Livre[]>;
    findAllExemplaire(): Promise<ExemplaireEntity[]>;
    findOneExemplaire(id: number): Promise<ExemplaireEntity>;
    findOne(id: number): Promise<Livre>;
    update(id: number, updateLivreDto: UpdateLivreDto): Promise<import("typeorm").UpdateResult>;
    updateExemplaire(id: number, updateExempllaireDto: UpdateEmpruntDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    removeExemplaire(id: number): Promise<import("typeorm").DeleteResult>;
}
