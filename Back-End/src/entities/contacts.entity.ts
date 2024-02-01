import {  Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Client from "./clients.entity";

@Entity('contacts')
class Contact {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', length: 45 })
    name: string

    @Column({ type: 'varchar', length: 45, unique: true })
    email: string

    @Column({ type: 'varchar', length: 50 })
    phone: string

    // @Column({ type: 'date' })
    // date: string

    @CreateDateColumn({ type: 'date' })
    createdAt: Date | string

    // @UpdateDateColumn({ type: 'date' })
    // updatedAt: string

    @ManyToOne(() => Client, (client) => client.contacts )
    client: Client

}

export default Contact;
