import { ExemplaireEntity } from 'src/livre/entities/exemplaire.entity';
import { Livre } from 'src/livre/entities/livre.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('emprunt')
export class Emprunt {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: Date })
  dateEmprunt: Date;

  @Column({ type: Date, nullable: true })
  dateRetour: Date;

  @ManyToOne((type) => ExemplaireEntity, (exemplaire) => exemplaire.emprunt, {
    nullable: true,
  })
  exemplaire: ExemplaireEntity;
}
