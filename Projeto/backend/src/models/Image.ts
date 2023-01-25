import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import Points from "./Points";

// Image Entity
@Entity("images")
export default class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => Points, (point) => point.images)
  @JoinColumn({ name: "point_id" })
  points: Points;
}