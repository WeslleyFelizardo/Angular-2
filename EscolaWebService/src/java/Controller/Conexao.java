package Controller;

//import java.sql.Connection;
import java.sql.Connection;
import java.sql.Driver;
import java.sql.DriverManager;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Cleide
 */
public class Conexao {
    
    private String ip = "localhost:3306";
    private String driver = "jdbc:mysql://";
    private String banco = "db_escola";
    private String usuario = "root";
    private String senha = "weslley10";
    private String url = driver + ip + "/" + banco;
    public static Connection con;

    private static Conexao instance = null;
    
    private Conexao() {
    }  
   
    public static Conexao getInstance(){
        if(instance == null){
            instance = new Conexao();
        }
        return instance;
    }
    
    public Connection getConnection(){
        try {
            con = DriverManager.getConnection(url, usuario, senha);
            System.out.println("Conection");
            return con;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            System.out.println("No Conection");
        }
        return null;
        
    }
    
    public void closeConnection(){
        try {
            con.close();
        } catch (Exception e) {
        }
    }
    
}
