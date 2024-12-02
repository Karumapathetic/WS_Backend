import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "./user.entity";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    async getAllUsers(): Promise<User[]> {
        return [];
    }
    
    @Get(':id')
    async getUserById(@Param('id') id: string): Promise<User> {
        return;
    }

    @Get(':email')
    async getUserByEmail(@Param('email') email: string): Promise<User> {
        return;
    }

    @Post()
    async createUser(@Body() data: {
        username: string,
        email: string,
        password: string,
    }): Promise<User> {
        return;
    }

    @Delete(':id')
    async removeUserById(@Param('id') id: string): Promise<void> {
        return;
    }
}
