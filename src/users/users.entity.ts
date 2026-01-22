import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

//import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('Inserted User With is ', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed User With is ', this.id);
  }
  @AfterUpdate()
  logUpdate() {
    console.log('Updated User With is ', this.id);
  }
}
