import { CreateEmpruntDto } from './dto/create-emprunt.dto';
import { UpdateEmpruntDto } from './dto/update-emprunt.dto';
import { Emprunt } from './entities/emprunt.entity';
import { Repository } from 'typeorm';
export declare class EmpruntService {
    private empruntRepository;
    constructor(empruntRepository: Repository<Emprunt>);
    create(createEmpruntDto: CreateEmpruntDto): Promise<{
        livre: {
            id: number;
        };
        dateEmprunt: string;
        livreId: number;
    } & Emprunt>;
    findAll(): Promise<Emprunt[]>;
    findOne(id: number): Promise<Emprunt>;
    update(id: number, updateEmpruntDto: UpdateEmpruntDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
