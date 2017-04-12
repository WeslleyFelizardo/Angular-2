package Controller;

//import javaapplication11.Conexao;
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
public class CursoController{

    private Conexao conexao;
    private Connection connection;
    private String sql;
    
    public CursoController() {
     
    }
    
     private void startConnection(){
        this.conexao = Conexao.getInstance();
        this.connection = this.conexao.getConnection();
        this.sql = "";
    }
    

    public boolean insert(CursoModel entidade) {
        try {
            this.startConnection();
            CursoModel curso = entidade;
            
            this.sql = "INSERT INTO Curso " +
                "(id,nome,descricao,limiteVagas) " +
                "values (?,?,?,?)";
            PreparedStatement stmt = this.connection.prepareStatement(this.sql);
            
            stmt.setInt(1, curso.getId());
            stmt.setString(2, curso.getNome());
            stmt.setString(3, curso.getDescricao());
            stmt.setInt(4, curso.getLimiteVagas());
            
            if(stmt.execute()){
                return true;
            }
        } catch (Exception ex) {
        }finally{
            this.conexao.closeConnection();
        }
        return false;
    }

    public boolean update(CursoModel entidade) {
        try {
            this.startConnection();
            CursoModel curso = entidade;
            
            this.sql = "UPDATE Curso SET " +
                "nome = ?, descricao = ?, limiteVagas = ? WHERE id = ? ";
            PreparedStatement stmt = this.connection.prepareStatement(this.sql);
            
            stmt.setString(1, curso.getNome());
            stmt.setString(2, curso.getDescricao());
            stmt.setInt(3, curso.getLimiteVagas());
            stmt.setInt(4, curso.getId());
            
            if(stmt.executeUpdate() == 1){
                return true;
            }
            
        } catch (Exception ex) {
        }finally{
            this.conexao.closeConnection();
        }
        return false;
    }

    public ArrayList<CursoModel> getAll() {
        try {
            this.startConnection();
            ArrayList<CursoModel> listaCurso = new ArrayList<CursoModel>();
            this.sql = "SELECT * FROM Curso";
            
            PreparedStatement stmt = this.connection.prepareStatement(this.sql);
            
            ResultSet resultSet = stmt.executeQuery();
            
            while (resultSet.next()) {
                CursoModel curso = new CursoModel();
            
                curso.setId(resultSet.getInt("id"));
                curso.setNome(resultSet.getString("nome"));
                curso.setDescricao(resultSet.getString("descricao"));
                curso.setLimiteVagas(resultSet.getInt("limiteVagas"));
                
                listaCurso.add(curso);
            }
            
            return listaCurso;
            
        } catch (Exception ex) {
        }finally{
            this.conexao.closeConnection();
        }
        return null;
    }

    public CursoModel getById(int id) {
        try {
            this.startConnection();
            //System.out.println(id);
            this.sql = "SELECT * FROM Curso WHERE id = ?";
            
            PreparedStatement stmt = this.connection.prepareStatement(this.sql);
            
            stmt.setInt(1, id);
            
            ResultSet resultSet = stmt.executeQuery();
            CursoModel curso = new CursoModel();
            
            while (resultSet.next()) {
                curso.setId(resultSet.getInt("id"));
                curso.setNome(resultSet.getString("nome"));
                curso.setDescricao(resultSet.getString("descricao"));
                curso.setLimiteVagas(resultSet.getInt("limiteVagas"));
            }
            
            return curso;
            
        } catch (Exception ex) {
        }finally{
            this.conexao.closeConnection();
        }
        return null;
    }

    public boolean delete(int id) {
        try {
            this.startConnection();
            this.sql = "DELETE FROM Curso WHERE id = ?";
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
    
    public int countAlunosTheCurso(int id){
        int ammount = 0;
        try {
            this.startConnection();
            this.sql = "select count(id) as ammount from Aluno where id_curso = ?";
            
            PreparedStatement stmt = this.connection.prepareStatement(this.sql);
            
            stmt.setInt(1, id);
                    
            ResultSet result = stmt.executeQuery();
            
            while (result.next()){
                ammount = result.getInt("ammount");
            }
        } catch (Exception e) {
        }
        finally{
            this.conexao.closeConnection();
        }
        
        return ammount;
    }
}

