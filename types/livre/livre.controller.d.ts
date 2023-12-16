import { LivreService } from './livre.service';
import { CreateLivreDto } from './dto/create-livre.dto';
import { UpdateLivreDto } from './dto/update-livre.dto';
import { CreateExemplaireDto } from './dto/create-exemplaire.dto';
import { UpdateEmpruntDto } from 'src/emprunt/dto/update-emprunt.dto';
export declare class LivreController {
    private readonly livreService;
    constructor(livreService: LivreService);
    create(createLivreDto: CreateLivreDto): Promise<{
        categorie: {
            id: number;
        };
        auteur: string;
        titre: string;
        description: string;
        categorieId: number;
        imageUrl: string;
    } & import("./entities/livre.entity").Livre>;
    createExemplaire(createexemplaireDto: CreateExemplaireDto): Promise<{
        livre: {
            id: number;
        };
        code: string;
        livreId: number;
    } & import("./entities/exemplaire.entity").ExemplaireEntity>;
    findAll(): Promise<import("./entities/livre.entity").Livre[]>;
    findAllExemplaire(): Promise<import("./entities/exemplaire.entity").ExemplaireEntity[]>;
    findOne(id: string): Promise<import("./entities/livre.entity").Livre>;
    findOneExemplaire(id: string): Promise<import("./entities/exemplaire.entity").ExemplaireEntity>;
    update(id: string, updateLivreDto: UpdateLivreDto): Promise<import("typeorm").UpdateResult>;
    updateExemplaire(id: string, updateExemplaireDto: UpdateEmpruntDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    removeExemplaire(id: string): Promise<import("typeorm").DeleteResult>;
}
