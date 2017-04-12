import { Curso } from '../curso/Curso';

export class Aluno{
    
    id: number;
    nome: string;
    cpf: string;
    Curso: Curso;
 
    constructor(id?: number, nome?: string, cpf?: string, curso?: Curso) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.Curso = curso;
    }
    
}