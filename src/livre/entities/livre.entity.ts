import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ExemplaireEntity } from './exemplaire.entity';
import { Categorie } from 'src/categorie/entities/categorie.entity';
import { Emprunt } from 'src/emprunt/entities/emprunt.entity';

@Entity('livre')
export class Livre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  auteur: string;

  @Column()
  titre: string;

  @Column({ type: 'text' })
  description: string;

  @OneToMany((type) => ExemplaireEntity, (exemplaire) => exemplaire.livre, {
    nullable: true,
  })
  exemplaire: ExemplaireEntity[];

  @ManyToOne((type) => Categorie, (categorie) => categorie.livre, {
    nullable: true,
  })
  categorie: Categorie;

  @Column({ nullable: true })
  imageUrl: string;
}
