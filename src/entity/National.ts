import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class National {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    national: string

}
