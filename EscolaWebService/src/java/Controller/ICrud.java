package Controller;

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
public interface ICrud {
    public boolean insert(Object entidade);
    public boolean update(Object entidade);
    public ArrayList<Object> getAll();
    public Object getById(int id);
    public boolean delete(int id);
}
