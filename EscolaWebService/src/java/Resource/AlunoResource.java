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
        ArrayList<AlunoModel> lista = new ArrayList<AlunoModel>();
        this.alunoController = new AlunoController();
        this.cursoController = new CursoController();
        //lista = this.alunoController.getAll();
        AlunoModel aluno1 = new AlunoModel();
        aluno1.setId(1);
        aluno1.setNome("Weslley");
        aluno1.setCpf("222.222.222-00");
        aluno1.setCurso(this.cursoController.getById(2));
//        AlunoModel aluno2 = new AlunoModel();
//        aluno2.setId(2);
//        aluno2.setNome("Lucas");
//        aluno2.setCpf("222.222.222-00");
//        aluno2.setId(this.cursoController.getById(2).getId());
//        AlunoModel aluno3 = new AlunoModel();
//        aluno3.setId(3);
//        aluno3.setNome("Cleide");
//        aluno3.setCpf("222.222.222-00");
//        aluno3.setIdCurso(this.cursoController.getById(2).getId());
        
        lista.add(aluno1);
        //lista.add(aluno2);
        //lista.add(aluno3);
        Gson g = new Gson();
        return g.toJson(lista);
    }
    
    @Path("{id}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getAlunoById(@PathParam("id") Integer id) {
        //CursoModel curso = (CursoModel)cursoController.getById(id);
        //this.alunoController = new AlunoController();
         CursoModel curso = new CursoModel();
 
        curso.setId(1);
        curso.setNome("Angular 2");
        curso.setDescricao("Framework da google");
        curso.setLimiteVagas(20);
        AlunoModel aluno1 = new AlunoModel();
        aluno1.setId(1);
        aluno1.setNome("Weslley");
        aluno1.setCpf("222.222.222-00");
        aluno1.setCurso(curso);
        //aluno = this.alunoController.getById(id);
        Gson g = new Gson();
        return g.toJson(aluno1);
    }
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
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
    
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public String updateAluno(String aluno) {
       //cursoController.update(curso);
         Gson g = new Gson();
//       CursoModel cursoNovo = new CursoModel();
//       cursoNovo = g.fromJson(curso, CursoModel.class);
//       this.cursoController = new CursoController();
       return g.toJson("Update with success");
    }
    
    @Path("{id}")
    @DELETE
    @Produces(MediaType.APPLICATION_JSON)
    public String deleteAluno(@PathParam("id") Integer id) {
       //cursoController.delete(id);
       return "aaaa";
    }
}
