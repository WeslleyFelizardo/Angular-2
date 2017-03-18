/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Resource;

import Controller.AlunoController;
import Model.AlunoModel;
import com.google.gson.Gson;
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
        ArrayList<AlunoModel> lista = new ArrayList<AlunoModel>();
        this.alunoController = new AlunoController();
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
        AlunoModel aluno = new AlunoModel();
        aluno = this.alunoController.getById(id);
        Gson g = new Gson();
        return g.toJson(aluno);
    }
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public String insertAluno(String aluno) {
       Gson g = new Gson();
       AlunoModel alunoNovo = new AlunoModel();
       alunoNovo = g.fromJson(aluno, AlunoModel.class);
       this.alunoController = new AlunoController();
//       if(this.cursoController.insert(cursoNovo)){
//           return true;
//       }
       return alunoNovo.getNome();
    }
    
    @Path("{id}")
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public String updateAluno(@PathParam("id") Integer id, String aluno) {
       //cursoController.update(curso);
//       Gson g = new Gson();
//       CursoModel cursoNovo = new CursoModel();
//       cursoNovo = g.fromJson(curso, CursoModel.class);
//       this.cursoController = new CursoController();
       return "Atualizado" + 2 + aluno;
    }
    
    @Path("{id}")
    @DELETE
    @Produces(MediaType.APPLICATION_JSON)
    public String deleteAluno(@PathParam("id") Integer id) {
       //cursoController.delete(id);
       return "aaaa";
    }
}