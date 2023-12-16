import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('client')
export class ClientEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'date' })
  birthDate: string;

  @Column()
  salary: number;

  @Column()
  adresse: number;
}
