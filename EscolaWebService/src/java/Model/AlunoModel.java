/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Model;

/**
 *
 * @author Cleide
 */
public class AlunoModel {
    private Integer id;
    private String nome;
    private String cpf;
    private CursoModel Curso;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public CursoModel getCurso() {
        return Curso;
    }

    public void setCurso(CursoModel Curso) {
        this.Curso = Curso;
    }
    
    
}
