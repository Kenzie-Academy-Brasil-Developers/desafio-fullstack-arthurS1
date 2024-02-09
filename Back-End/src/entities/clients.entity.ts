import { getRounds, hashSync } from "bcryptjs";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Contact from "./contacts.entity";

@Entity('clients')
class Client {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', length: 45 })
    name: string

    @Column({ type: 'varchar', length: 45, unique: true })
    email: string

    @Column({ type: 'boolean', default: false })
    admin: boolean

    @Column({ type: 'varchar', length: 120 })
    password: string

    @Column({ type: 'varchar', length: 50 })
    phone: string


    @CreateDateColumn({ type: 'date' })
    createdAt: Date | string


    @OneToMany(() => Contact, (contact) => contact.client)
    contacts: Contact[]

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        const hashRounds = getRounds(this.password)
        if (!hashRounds) {
            this.password = hashSync(this.password, 10)
        }
    }

}

export default Client;
