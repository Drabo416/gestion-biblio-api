import { EmpruntService } from './emprunt.service';
import { CreateEmpruntDto } from './dto/create-emprunt.dto';
import { UpdateEmpruntDto } from './dto/update-emprunt.dto';
export declare class EmpruntController {
    private readonly empruntService;
    constructor(empruntService: EmpruntService);
    create(createEmpruntDto: CreateEmpruntDto): Promise<{
        livre: {
            id: number;
        };
        dateEmprunt: string;
        livreId: number;
    } & import("./entities/emprunt.entity").Emprunt>;
    findAll(): Promise<import("./entities/emprunt.entity").Emprunt[]>;
    findOne(id: string): Promise<import("./entities/emprunt.entity").Emprunt>;
    update(id: string, updateEmpruntDto: UpdateEmpruntDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
