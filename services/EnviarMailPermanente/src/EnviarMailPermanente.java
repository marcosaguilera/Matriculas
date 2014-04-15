import java.util.Properties;

import javax.mail.MessagingException;
import javax.mail.Message;
import javax.mail.Message.*;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import java.text.SimpleDateFormat;
import java.lang.String;
import java.util.*;
import java.io.*;
import java.util.*;
import javax.mail.*;
import javax.mail.internet.*;
import java.net.*; //clase para las URL



public class EnviarMailPermanente extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {
    /*
     * Implementación de JAVA MAIL 
     * Aprendoz Padres
     */
     public String sendEmailNotification(String correopadre, String correomadre, String nombreAcceso, Date hora, Date fechaActual, Date fecha, Date fecha2, String ruta, String observacion, String grupo, String nombreCompletoAlumno, int codigoAlumno, String loggedMail, String solicitud, String nombredocente, String maildocente, int tipo_sol, String tipo_solicitud )
     { 
      try
        {
        String correo1 = loggedMail.toString();
        System.out.println(correo1);
        String correo2 = correopadre.toString();
        System.out.println(correo2);
        String correo3 = correomadre.toString();
        System.out.println(correo3);
        System.out.println("*****************************");
        //transformacion de fechas
        //fecha automatica del sistema
        SimpleDateFormat fechatxt = new SimpleDateFormat("yyyy-MM-dd");
        String lafechaS = fechatxt.format(fechaActual);
        System.out.println("fecha actual: "+lafechaS);
        
        //fecha de inicio
        SimpleDateFormat fechaInicio = new SimpleDateFormat("yyyy-MM-dd");
        String lafechaInicio = fechaInicio.format(fecha);
        System.out.println("fecha inicio: "+lafechaInicio);
        
        //fecha de fin
        SimpleDateFormat fechaFin = new SimpleDateFormat("yyyy-MM-dd");
        String lafechaFin = fechaFin.format(fecha2);
        System.out.println("fecha fin: "+lafechaFin);

        //hora de solicitud
        SimpleDateFormat horaSolicitud = new SimpleDateFormat("hh:mm a");
        String lahoraSolicitud = horaSolicitud.format(hora);
        System.out.println("hora: "+lahoraSolicitud);
        
        System.out.println("Correo logueado: "+ loggedMail);
        System.out.println("Correo madre: "+correomadre );
        System.out.println("Correo padre: "+correopadre );

            // Propiedades de la conexión
            Properties props = new Properties();
            props.setProperty("mail.smtp.host", "smtp.gmail.com");
            props.setProperty("mail.smtp.starttls.enable", "true");
            props.setProperty("mail.smtp.port", "587");
            props.setProperty("mail.smtp.user", "soporte@rochester.edu.co");
            props.setProperty("mail.smtp.auth", "true");

            // Preparamos la sesion
            Session session = Session.getDefaultInstance(props);

            // Construimos el mensaje
            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress("soporte@rochester.edu.co"));
           /* message.addRecipient(
                  Message.RecipientType.TO, b);*/
      
            if(correo1.equals(correo2)){
            System.out.println("***si*** se envio a la madre");
               message.addRecipient(
                  Message.RecipientType.TO, new InternetAddress(correomadre));
               message.addRecipient(
                  Message.RecipientType.TO, new InternetAddress(maildocente)); 
               System.out.println("mail para: "+maildocente);    
               message.addRecipient(
                  Message.RecipientType.TO, new InternetAddress("edd@rochester.edu.co"));
               message.addRecipient(
                  Message.RecipientType.TO, new InternetAddress("transportes@rochester.edu.co"));            
               message.setRecipient(
                  Message.RecipientType.CC, new InternetAddress(loggedMail));
            
            }
           // do something
           else if(correo1.equals(correo3)){
           System.out.println("***si*** se envio al padre");
               message.addRecipient(
                  Message.RecipientType.TO, new InternetAddress(correopadre));   
               message.addRecipient(
                  Message.RecipientType.TO, new InternetAddress(maildocente));   
               System.out.println("mail para: "+maildocente); 
               message.addRecipient(
                  Message.RecipientType.TO, new InternetAddress("edd@rochester.edu.co")); 
               message.addRecipient(
                  Message.RecipientType.TO, new InternetAddress("transportes@rochester.edu.co"));   
               message.setRecipient(
                  Message.RecipientType.CC, new InternetAddress(loggedMail));
            }
           /****tipo 1 == Salida antes de terminar la jornada ****/       
           if(tipo_sol == 1){
             message.setSubject("Solicitud Permanente - Colegio Rochester");
             message.setText(
              "<img src=\"http://www.rochester.edu.co/new2/img/logo_blue.png\">"+"<br/><br/>"+
              "El siguiente correo electronico es oficial del Colegio Rochester e informa que: <br/><br/>"+
              "El/la Sr(a) <i>"+nombreAcceso+"</i> ha realizado una solicitud de <b>"+tipo_solicitud+"</b> para el alumno(a) <b>"+nombreCompletoAlumno+
              "</b> con los siguiente detalles: <br/><br/><br/>"+
              "<ul>"+
                  "<li>Solicitud: "+solicitud+"</li>"+
                  "<li>Tipo de solicitud: <b>"+tipo_solicitud+"</b></li>"+
                  "<li>Fecha de solicitud: "+lafechaS+"</li>"+
                  "<li>Codigo del estudiante: "+codigoAlumno+"</li>"+
                  "<li>Nombre completo: "+nombreCompletoAlumno+"</li>"+
                  "<li><b>Desde: </b>"+lafechaInicio+" <b>Hasta: </b>"+lafechaFin+" <b>a las</b> "+lahoraSolicitud+"</li>"+
                  "<li>Observaci&oacute;n: "+observacion+"</li>"+
                "</ul>"+"<br/><br/><br/>--<br/>"+
              "Aprendoz Colegio Rochester","ISO-8859-1","html");
           } 
           
           if(tipo_sol ==2) {
             message.setSubject("Solicitud Permanente - Colegio Rochester");
             message.setText(
              "<img src=\"http://www.rochester.edu.co/new2/img/logo_blue.png\">"+"<br/><br/>"+
              "El siguiente correo electronico es oficial del Colegio Rochester e informa que: <br/><br/>"+
              "El/la Sr(a) <i>"+nombreAcceso+"</i> ha realizado una solicitud de <b>"+tipo_solicitud+"</b> para el alumno(a) <b>"+nombreCompletoAlumno+
              "</b> con los siguiente detalles: <br/><br/><br/>"+
              "<ul>"+
                  "<li>Solicitud: "+solicitud+"</li>"+
                  "<li>Tipo de solicitud: <b>"+tipo_solicitud+"</b></li>"+
                  "<li>Fecha de solicitud: "+lafechaS+"</li>"+
                  "<li>Codigo del estudiante: "+codigoAlumno+"</li>"+
                  "<li>Nombre completo: "+nombreCompletoAlumno+"</li>"+
                  "<li><b>Desde: </b>"+lafechaInicio+" <b>Hasta: </b>"+lafechaFin+"</li>"+
                  "<li>Placas del vehiculo y Reponsable: "+ruta+"</li>"+
                  "<li>Observaci&oacute;n: "+observacion+"</li>"+
                "</ul>"+"<br/><br/><br/>--<br/>"+
              "Aprendoz Colegio Rochester","ISO-8859-1","html");
           }   
           
           if(tipo_sol ==3) {
             message.setSubject("Solicitud Permanente - Colegio Rochester");
             message.setText(
              "<img src=\"http://www.rochester.edu.co/new2/img/logo_blue.png\">"+"<br/><br/>"+
              "El siguiente correo electronico es oficial del Colegio Rochester e informa que: <br/><br/>"+
              "El/la Sr(a) <i>"+nombreAcceso+"</i> ha realizado una solicitud de <b>"+tipo_solicitud+"</b> para el alumno(a) <b>"+nombreCompletoAlumno+
              "</b> con los siguiente detalles: <br/><br/><br/>"+
              "<ul>"+
                  "<li>Solicitud: "+solicitud+"</li>"+    
                  "<li>Tipo de solicitud: <b>"+tipo_solicitud+"</b></li>"+          
                  "<li>Fecha de solicitud: "+lafechaS+"</li>"+
                  "<li>Codigo del estudiante: "+codigoAlumno+"</li>"+                
                  "<li>Nombre completo: "+nombreCompletoAlumno+"</li>"+
                  "<li><b>Desde: </b>"+lafechaInicio+" <b>Hasta: </b>"+lafechaFin+"</li>"+
                  "<li>Observaci&oacute;n: "+observacion+"</li>"+
                "</ul>"+"<br/><br/><br/>--<br/>"+
              "Aprendoz Colegio Rochester","ISO-8859-1","html");
           } 
           
          if(tipo_sol ==4) {
             message.setSubject("Solicitud Permanente - Colegio Rochester");
             message.setText(
              "<img src=\"http://www.rochester.edu.co/new2/img/logo_blue.png\">"+"<br/><br/>"+
              "El siguiente correo electronico es oficial del Colegio Rochester e informa que: <br/><br/>"+
              "El/la Sr(a) <i>"+nombreAcceso+"</i> ha realizado una solicitud de <b>"+tipo_solicitud+"</b> para el alumno(a) <b>"+nombreCompletoAlumno+
              "</b> con los siguiente detalles: <br/><br/><br/>"+
              "<ul>"+
                  "<li>Solicitud: "+solicitud+"</li>"+
                  "<li>Tipo de solicitud: <b>"+tipo_solicitud+"</b></li>"+
                  "<li>Fecha de solicitud: "+lafechaS+"</li>"+
                  "<li>Codigo del estudiante: "+codigoAlumno+"</li>"+
                  "<li>Nombre completo: "+nombreCompletoAlumno+"</li>"+
                  "<li><b>Desde: </b>"+lafechaInicio+" <b>Hasta: </b>"+lafechaFin+"</li>"+
                  "<li>Observaci&oacute;n: "+observacion+"</li>"+
                "</ul>"+"<br/><br/><br/>--<br/>"+
              "Aprendoz Colegio Rochester","ISO-8859-1","html");
           } 
           
            if(tipo_sol ==5) {
             message.setSubject("Solicitud Permanente - Colegio Rochester");
             message.setText(
              "<img src=\"http://www.rochester.edu.co/new2/img/logo_blue.png\">"+"<br/><br/>"+
              "El siguiente correo electronico es oficial del Colegio Rochester e informa que: <br/><br/>"+
              "El/la Sr(a) <i>"+nombreAcceso+"</i> ha realizado una solicitud de <b>"+tipo_solicitud+"</b> para el alumno(a) <b>"+nombreCompletoAlumno+
              "</b> con los siguiente detalles: <br/><br/><br/>"+
              "<ul>"+
                  "<li>Solicitud: "+solicitud+"</li>"+
                  "<li>Tipo de solicitud: <b>"+tipo_solicitud+"</b></li>"+
                  "<li>Fecha de solicitud: "+lafechaS+"</li>"+
                  "<li>Codigo del estudiante: "+codigoAlumno+"</li>"+
                  "<li>Nombre completo: "+nombreCompletoAlumno+"</li>"+
                  "<li><b>Desde: </b>"+lafechaInicio+" <b>Hasta: </b>"+lafechaFin+"</li>"+
                  "<li>Observaci&oacute;n: "+observacion+"</li>"+
                "</ul>"+"<br/><br/><br/>--<br/>"+
              "Aprendoz Colegio Rochester","ISO-8859-1","html");
           } 
           
           if(tipo_sol ==6) {
             message.setSubject("Solicitud Permanente - Colegio Rochester");
             message.setText(
              "<img src=\"http://www.rochester.edu.co/new2/img/logo_blue.png\">"+"<br/><br/>"+
              "El siguiente correo electronico es oficial del Colegio Rochester e informa que: <br/><br/>"+
              "El/la Sr(a) <i>"+nombreAcceso+"</i> ha realizado una solicitud de <b>"+tipo_solicitud+"</b> para el alumno(a) <b>"+nombreCompletoAlumno+
              "</b> con los siguiente detalles: <br/><br/><br/>"+
              "<ul>"+
                  "<li>Solicitud: "+solicitud+"</li>"+
                  "<li>Tipo de solicitud: <b>"+tipo_solicitud+"</b></li>"+
                  "<li>Fecha de solicitud: "+lafechaS+"</li>"+
                  "<li>Codigo del estudiante: "+codigoAlumno+"</li>"+
                  "<li>Nombre completo: "+nombreCompletoAlumno+"</li>"+
                  "<li><b>Desde: </b>"+lafechaInicio+" <b>Hasta: </b>"+lafechaFin+"</li>"+
                  "<li>Observaci&oacute;n: "+observacion+"</li>"+
                "</ul>"+"<br/><br/><br/>--<br/>"+
              "Aprendoz Colegio Rochester","ISO-8859-1","html");
           } 
           
           if(tipo_sol ==7) {
             message.setSubject("Solicitud Permanente - Colegio Rochester");
             message.setText(
              "<img src=\"http://www.rochester.edu.co/new2/img/logo_blue.png\">"+"<br/><br/>"+
              "El siguiente correo electronico es oficial del Colegio Rochester e informa que: <br/><br/>"+
              "El/la Sr(a) <i>"+nombreAcceso+"</i> ha realizado una solicitud de <b>"+tipo_solicitud+"</b> para el alumno(a) <b>"+nombreCompletoAlumno+
              "</b> con los siguiente detalles: <br/><br/><br/>"+
              "<ul>"+
                  "<li>Solicitud: "+solicitud+"</li>"+
                  "<li>Tipo de solicitud: <b>"+tipo_solicitud+"</b></li>"+
                  "<li>Fecha de solicitud: "+lafechaS+"</li>"+
                  "<li>Codigo del estudiante: "+codigoAlumno+"</li>"+
                  "<li>Nombre completo: "+nombreCompletoAlumno+"</li>"+
                  "<li><b>Desde: </b>"+lafechaInicio+" <b>Hasta: </b>"+lafechaFin+"</li>"+
                  "<li>Observaci&oacute;n: "+observacion+"</li>"+
                "</ul>"+"<br/><br/><br/>--<br/>"+
              "Aprendoz Colegio Rochester","ISO-8859-1","html");
           } 
            // Lo enviamos.
            Transport t = session.getTransport("smtp");
            t.connect("soporte@rochester.edu.co", "Soporte1959+");
            t.sendMessage(message, message.getAllRecipients());

            // Cierre.
            t.close();
            
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }
        return "ok";
     }   
}