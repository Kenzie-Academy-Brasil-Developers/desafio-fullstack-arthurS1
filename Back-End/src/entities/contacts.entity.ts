import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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

    @CreateDateColumn({ type: 'date' })
    createdAt: Date | string

    @ManyToOne(() => Client, (client) => client.contacts, { onDelete: "CASCADE" })
    client: Client

}

export default Contact;
