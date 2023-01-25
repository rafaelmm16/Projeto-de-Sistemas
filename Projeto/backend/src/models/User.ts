import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

// User Entity
@Entity("users")
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  CPF: string;

  @Column()
  nascimento: string;

  @Column()
  telefone: string;

  @Column()
  num_cartão: string;

  @Column()
  tipo_cartão: string;

  @Column()
  password: string;

  @Column()
  admin_rights: boolean;
}