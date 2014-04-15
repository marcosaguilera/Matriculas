package com.aprendoz;

import com.wavemaker.runtime.RuntimeAccess;
import com.aprendoz_desarrollo.Aprendoz_desarrollo;
import com.aprendoz_desarrollo.data.Persona;

import org.hibernate.Session;
import org.hibernate.*;

import java.util.List;

public class ActualizaDatos extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {
    
    private Aprendoz_desarrollo aprendozService = null;

    public ActualizaDatos() {
       super(INFO);
       aprendozService = (Aprendoz_desarrollo) RuntimeAccess.getInstance().getService(Aprendoz_desarrollo.class);
    }
        
    public List<Persona> findAll(Integer id) {
        List<Persona> result = null;
      
        try {
        
          aprendozService.begin();
          Session session = aprendozService.getDataServiceManager().getSession();
          
          Query query = session.createQuery("from persona p where p.idpersona =:id");
          query.setParameter("id", id); 

          result = query.list();        
          aprendozService.commit(); 
                    
        } catch (HibernateException e) {
            e.printStackTrace();
            System.out.println("Error:" + e.getMessage());
            
            aprendozService.rollback();
        } 
        return result;
    }

    public String sampleJavaOperation() {
       String result  = null;
       try {
          log(INFO, "Starting sample operation");
          result = "Hello World";
          log(INFO, "Returning " + result);
       } catch(Exception e) {
          log(ERROR, "The sample java service operation has failed", e);
       }
       return result;
    }

}