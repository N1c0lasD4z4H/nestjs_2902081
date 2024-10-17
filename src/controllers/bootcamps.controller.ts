import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('bootcamps')
export class BootcampsController {
    //EndPoints de Get:
    @Get()
    getAllBootcamps(): string {
        return "Retorna todos los bootcamps"
    }

    @Get(":id")
    getBootcampById(@Param("id") bootcampId: number): string {
        return `Aqui se va a mostrar el bootcamp con id: ${bootcampId}`
    }

    @Post()
    createBootcamp(): string{
        return "Aqui se va a guarda un nuevo bootcamp"
    }
}
