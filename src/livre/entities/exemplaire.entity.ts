import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Livre } from './livre.entity';
import { Emprunt } from 'src/emprunt/entities/emprunt.entity';
@Entity('exemplaire')
export class ExemplaireEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column({ default: true })
  disponible: boolean;

  @ManyToOne((type) => Livre, (livre) => livre.exemplaire, {
    nullable: true,
  })
  livre: Livre;

  @OneToMany((type) => Emprunt, (emprunt) => emprunt.exemplaire, {
    nullable: true,
  })
  emprunt: Emprunt[];
}
