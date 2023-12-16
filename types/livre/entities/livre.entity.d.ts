import { ExemplaireEntity } from './exemplaire.entity';
import { Categorie } from 'src/categorie/entities/categorie.entity';
import { Emprunt } from 'src/emprunt/entities/emprunt.entity';
export declare class Livre {
    id: number;
    auteur: string;
    titre: string;
    description: string;
    exemplaire: ExemplaireEntity[];
    categorie: Categorie;
    emprunt: Emprunt[];
    imageUrl: string;
}
