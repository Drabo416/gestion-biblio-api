import { Livre } from './livre.entity';
export declare class ExemplaireEntity {
    id: number;
    code: string;
    disponible: boolean;
    livre: Livre;
}
