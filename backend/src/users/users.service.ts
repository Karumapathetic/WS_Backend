import { Injectable, NotFoundException } from "@nestjs/common";
import bcrypt from 'bcrypt';
import { User } from "./user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    // Implement these services
    async getAllUsers(): Promise<User[]> {
        return [];
    }

    async getUserByEmail(email: string): Promise<User> {
        return;
    }

    async getUserByID(id: number): Promise<User> {
        return;
    }

    async createUser(
        username: string,
        email: string,
        password: string
    ): Promise<User> {
        return;
    }

    async removeUserById(id: number): Promise<void> {
    }

    // Basic services already implemented
    checkEmail(email: string): boolean {
        return email.match(
            /^((?:[A-Za-z0-9!#$%&'*+\-\/=?^_`{|}~]|(?<=^|\.)"|"(?=$|\.|@)|(?<=".*)[ .](?=.*")|(?<!\.)\.){1,64})(@)((?:[A-Za-z0-9.\-])*(?:[A-Za-z0-9])\.(?:[A-Za-z0-9]){2,})$/,
        ) ? true : false;
    }

    checkPassword(password: string): boolean {
        return password.match(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[@$!%*#?&_^*-])[a-zA-Z0-9@$!%#?&_^*-]{8,}$/,
        ) ? true : false;
    }

    compareHash(hash: string, password: string): boolean {
        return bcrypt.compareSync(password, hash);
    }

    generateHash(password: string): string {
        return bcrypt.hashSync(password, 10);
    }
}