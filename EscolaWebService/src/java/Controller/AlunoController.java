package Controller;

import Model.AlunoModel;
import Model.CursoModel;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/**
 *
 * @author Cleide
 */
public class AlunoController{

    private Conexao conexao;
    private Connection connection;
    private String sql;
    private CursoController cursoController;
    
    public AlunoController() {
        this.conexao = Conexao.getInstance();
        this.connection = this.conexao.getConnection();
        this.sql = "";
    }
    
    
    public boolean insert(AlunoModel entidade) {
        try {
            AlunoModel aluno = entidade;
            
            this.sql = "INSERT INTO Aluno " +
                "(id,nome,cpf,idCurso) " +
                "values (?,?,?,?)";
            PreparedStatement stmt = this.connection.prepareStatement(this.sql);
            
            stmt.setInt(0, aluno.getId());
            stmt.setString(1, aluno.getNome());
            stmt.setString(2, aluno.getCpf());
            stmt.setInt(3, aluno.getCurso().getId());
            
            if(stmt.execute()){
                return true;
            }
        } catch (Exception ex) {
        }finally{
            this.conexao.closeConnection();
        }
        return false;
    }

    public boolean update(AlunoModel entidade) {
        try {
            AlunoModel aluno = entidade;
            
            this.sql = "UPDATE Aluno SET " +
                "nome = ?, cpf = ?, idCurso = ? WHERE id = ? ";
            PreparedStatement stmt = this.connection.prepareStatement(this.sql);
            
            stmt.setString(0, aluno.getNome());
            stmt.setString(1, aluno.getCpf());
            stmt.setInt(2, aluno.getCurso().getId());
            stmt.setInt(3, aluno.getId());
            
            if(stmt.executeUpdate() == 1){
                return true;
            }
        } catch (Exception ex) {
        }finally{
            this.conexao.closeConnection();
        }
        return false;
    }

    public ArrayList<AlunoModel> getAll() {
        try {
            this.cursoController = new CursoController();
            ArrayList<AlunoModel> listaAluno = new ArrayList<AlunoModel>();
            this.sql = "SELECT * FROM Aluno";
            
            PreparedStatement stmt = this.connection.prepareStatement(this.sql);
            
            ResultSet resultSet = stmt.executeQuery();
            
            while (resultSet.next()) {
                AlunoModel aluno = new AlunoModel();
            
                aluno.setId(resultSet.getInt("id"));
                aluno.setNome(resultSet.getString("nome"));
                aluno.setCpf(resultSet.getString("cpf"));
                aluno.setCurso(this.cursoController.getById(resultSet.getInt("idCurso")));
                
                listaAluno.add(aluno);
            }
            
            return listaAluno;
            
        } catch (Exception ex) {
        }finally{
            this.conexao.closeConnection();
        }
        return null;
    }

    public AlunoModel getById(int id) {
        try {
            this.cursoController = new CursoController();
            this.sql = "SELECT * FROM Aluno WHERE id = ?";
            
            PreparedStatement stmt = this.connection.prepareStatement(this.sql);
            
            stmt.setInt(0, id);
            
            ResultSet resultSet = stmt.executeQuery();
            AlunoModel aluno = new AlunoModel();
            
            if (resultSet.isFirst()) {
                aluno.setId(resultSet.getInt("id"));
                aluno.setNome(resultSet.getString("nome"));
                aluno.setCpf(resultSet.getString("cpf"));
                aluno.setCurso(cursoController.getById(resultSet.getInt("idCurso")));
            }
            
            return aluno;
            
        } catch (Exception ex) {
        }finally{
            this.conexao.closeConnection();
        }
        return null;
    }

    public boolean delete(int id) {
        try {
            this.sql = "DELETE FROM Aluno WHERE id = ?";
            PreparedStatement stmt = this.connection.prepareStatement(this.sql);
           
            stmt.setInt(0, id);
            
            if(stmt.execute()){
                return true;
            }
        } catch (Exception ex) {
        }finally{
            this.conexao.closeConnection();
        }
        return false;
    }
    
}