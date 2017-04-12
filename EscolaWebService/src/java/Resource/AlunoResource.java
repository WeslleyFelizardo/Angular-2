/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Resource;

import Controller.AlunoController;
import Controller.CursoController;
import Model.AlunoModel;
import Model.CursoModel;
import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import java.util.ArrayList;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author Cleide
 */
@Path("Aluno")
public class AlunoResource {

    @Context
    private UriInfo context;
    private AlunoController alunoController;
    private CursoController cursoController;
    /**
     * Creates a new instance of CursoResource
     */
    public AlunoResource() {
        //cursoController = new CursoController();
    }

    /**
     * Retrieves representation of an instance of WebService.CursoResource
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getAluno() {
        //TODO return proper representation object    
        ArrayList<AlunoModel> lista;
        this.alunoController = new AlunoController();
        //this.cursoController = new CursoController();
        lista = this.alunoController.getAll();
        
        Gson g = new Gson();
        return g.toJson(lista);
    }
    
    @Path("{id}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getAlunoById(@PathParam("id") Integer id) {
        //CursoModel curso = (CursoModel)cursoController.getById(id);
        this.alunoController = new AlunoController();
        
        AlunoModel aluno = this.alunoController.getById(id);
        Gson g = new Gson();
        
        return g.toJson(aluno);
    }
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public String insertAluno(String aluno) {
       Gson g = new Gson();
       this.alunoController = new AlunoController();
       AlunoModel alunoNovo = new AlunoModel();
        System.out.println(aluno);
       alunoNovo = g.fromJson(aluno, AlunoModel.class);
       this.alunoController = new AlunoController();
       
       if(this.alunoController.insert(alunoNovo)){
           return g.toJson(true);
       }
       return g.toJson(false);
    }
    
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public String updateAluno(String aluno) {
         
         Gson g = new Gson();
         
         AlunoModel alunoNovo;
         alunoNovo = g.fromJson(aluno, AlunoModel.class);
         
         this.alunoController = new AlunoController();
         
         this.alunoController.update(alunoNovo);
         
        return g.toJson("Update with success");
    }
    
    @Path("{id}")
    @DELETE
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public String deleteAluno(@PathParam("id") Integer id) {
       //cursoController.delete(id);
       return "aaaa";
    }
}
