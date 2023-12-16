import { Livre } from 'src/livre/entities/livre.entity';
export declare class Emprunt {
    id: number;
    dateEmprunt: Date;
    dateRetour: Date;
    livre: Livre;
}
