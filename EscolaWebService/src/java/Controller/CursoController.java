package Controller;

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
public class CursoController implements ICrud{

    private Conexao conexao;
    private Connection connection;
    private String sql;
    
    public CursoController() {
        this.conexao = Conexao.getInstance();
        this.connection = this.conexao.getConnection();
        this.sql = "";
    }
    
    
    @Override
    public boolean insert(Object entidade) {
        try {
            CursoModel curso = (CursoModel) entidade;
            
            this.sql = "INSERT INTO Curso " +
                "(id,nome,descricao,limiteVagas) " +
                "values (?,?,?,?)";
            PreparedStatement stmt = this.connection.prepareStatement(this.sql);
            
            stmt.setInt(0, curso.getId());
            stmt.setString(1, curso.getNome());
            stmt.setString(2, curso.getDescricao());
            stmt.setInt(3, curso.getLimiteVagas());
            
            if(stmt.execute()){
                return true;
            }
        } catch (Exception ex) {
        }finally{
            this.conexao.closeConnection();
        }
        return false;
    }

    @Override
    public boolean update(Object entidade) {
        try {
            CursoModel curso = (CursoModel) entidade;
            
            this.sql = "UPDATE Curso SET " +
                "nome = ?, descricao = ?, limiteVagas = ? WHERE id = ? ";
            PreparedStatement stmt = this.connection.prepareStatement(this.sql);
            
            stmt.setString(0, curso.getNome());
            stmt.setString(1, curso.getDescricao());
            stmt.setInt(2, curso.getLimiteVagas());
            stmt.setInt(3, curso.getId());
            
            if(stmt.executeUpdate() == 1){
                return true;
            }
        } catch (Exception ex) {
        }finally{
            this.conexao.closeConnection();
        }
        return false;
    }

    @Override
    public ArrayList<Object> getAll() {
        try {
            ArrayList<Object> listaCurso = new ArrayList<Object>();
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

    @Override
    public Object getById(int id) {
        try {
            
            this.sql = "SELECT * FROM Curso WHERE id = ?";
            
            PreparedStatement stmt = this.connection.prepareStatement(this.sql);
            
            stmt.setInt(0, id);
            
            ResultSet resultSet = stmt.executeQuery();
            CursoModel curso = new CursoModel();
            
            if (resultSet.isFirst()) {
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

    @Override
    public boolean delete(int id) {
        try {
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
    
}
