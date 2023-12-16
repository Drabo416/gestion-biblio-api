import { Livre } from 'src/livre/entities/livre.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categorie')
export class Categorie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;

  @OneToMany((type) => Livre, (categorie) => categorie.categorie, {
    nullable: true,
  })
  livre: Livre[];
}
