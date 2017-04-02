/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Resource;

import Controller.CursoController;
import Model.CursoModel;
import com.google.gson.Gson;
import java.util.ArrayList;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import static javax.ws.rs.HttpMethod.POST;
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
@Path("Curso")
public class CursoResource {

    @Context
    private UriInfo context;
    private CursoController cursoController;

    /**
     * Creates a new instance of CursoResource
     */
    public CursoResource() {
        //cursoController = new CursoController();
    }

    /**
     * Retrieves representation of an instance of WebService.CursoResource
     * @return an instance of java.lang.String
     */
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getCurso() {
        //TODO return proper representation object    
        ArrayList<CursoModel> lista = new ArrayList<CursoModel>();
        //this.cursoController = new CursoController();
        //lista = this.cursoController.getAll();
        CursoModel curso = new CursoModel();
        curso.setId(1);
        curso.setNome("Angular 2");
        curso.setDescricao("Framework da google");
        curso.setLimiteVagas(20);
        CursoModel curso2 = new CursoModel();
        curso2.setId(2);
        curso2.setNome("Laravel");
        curso2.setDescricao("Framework PHP");
        curso2.setLimiteVagas(20);
        
        lista.add(curso);
        lista.add(curso2);
        Gson g = new Gson();
        return g.toJson(lista);
    }
    
    @Path("{id}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getCursoById(@PathParam("id") Integer id) {
        //CursoModel curso = (CursoModel)cursoController.getById(id);
        //this.cursoController = new CursoController();
        CursoModel curso = new CursoModel();
 
        curso.setId(1);
        curso.setNome("Angular 2");
        curso.setDescricao("Framework da google");
        curso.setLimiteVagas(20);
        //curso = this.cursoController.getById(id);
        Gson g = new Gson();
        return g.toJson(curso);
    }
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public String insertCurso(String curso) {
       Gson g = new Gson();
       CursoModel cursoNovo = new CursoModel();
       cursoNovo = g.fromJson(curso, CursoModel.class);
       //this.cursoController = new CursoController();
//       if(this.cursoController.insert(cursoNovo)){
//           return true;
//       }
       return g.toJson(cursoNovo.getNome());
    }
    
    //@Path("{id}")
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public String updateCurso(String curso) {
       //cursoController.update(curso);
       Gson g = new Gson();
//       CursoModel cursoNovo = new CursoModel();
//       cursoNovo = g.fromJson(curso, CursoModel.class);
//       this.cursoController = new CursoController();
       return g.toJson(true);
    }
    
    @Path("d/{id}")
    @DELETE
    @Produces(MediaType.APPLICATION_JSON)
    public String deleteCurso(@PathParam("id") Integer id) {
       //cursoController.delete(id);
       return "aaaa";
    }
}
