/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Curso;

import Controller.CursoController;
import Model.CursoModel;
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
        return "curso";
    }
    
    @Path("{id}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getCursoById(@PathParam("id") Integer id) {
        //CursoModel curso = (CursoModel)cursoController.getById(id);
        return "curso" + id;
    }
    
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void insertCurso(String curso) {
       //cursoController.insert(curso);
    }
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void updateCurso(String curso) {
       //cursoController.update(curso);
    }
    
    @Path("{id}")
    @DELETE
    @Produces(MediaType.TEXT_HTML)
    public String deleteCurso(@PathParam("id") Integer id) {
       //cursoController.delete(id);
       return "delete";
    }
}
