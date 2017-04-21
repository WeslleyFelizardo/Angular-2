/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Resource;

import Controller.CursoController;
import Model.CursoModel;
import com.google.gson.Gson;
import com.google.gson.stream.JsonWriter;
import java.util.ArrayList;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import static javax.ws.rs.HttpMethod.OPTIONS;
import static javax.ws.rs.HttpMethod.POST;
import javax.ws.rs.OPTIONS;
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
    @Path("/delete/{id}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String deleteCurso(@PathParam("id") int id) {
        Gson g = new Gson();
        this.cursoController = new CursoController();
       
        if (this.cursoController.countAlunosTheCurso(id) <= 0) {
            if (this.cursoController.delete(id)) {
                return g.toJson("true");
            } else {
                return g.toJson("false");
            }
        } else {
            return g.toJson("Este curso ainda existe alunos matriculados");
        }
    }

    @Path("ammount/{id}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String countAlunosTheCurso(@PathParam("id") Integer id){
        Gson g = new Gson();
        this.cursoController = new CursoController();
        //System.out.println(cursoController.countAlunosTheCurso(2));
        return  "{\"ammount\":"+ this.cursoController.countAlunosTheCurso(id)+"}";
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getCurso() {
        //TODO return proper representation object    
        this.cursoController = new CursoController();

        Gson g = new Gson();
        return g.toJson(this.cursoController.getAll());
    }
    

    @Path("{id}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getCursoById(@PathParam("id") Integer id) {
        //CursoModel curso = (CursoModel)cursoController.getById(id);
        this.cursoController = new CursoController();
 
        CursoModel curso = this.cursoController.getById(id);
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
       
       this.cursoController = new CursoController();
       this.cursoController.insert(cursoNovo);
       
       return g.toJson("Cadastrado com sucesso");
    }
    
    //@Path("{id}")
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public String updateCurso(String curso) {
       Gson g = new Gson();
       CursoModel cursoNovo = new CursoModel();
       cursoNovo = g.fromJson(curso, CursoModel.class);
       this.cursoController = new CursoController();
       cursoController.update(cursoNovo);
       return g.toJson("Update with success");
    }
    
}
