package com.example;

import java.io.File;
import java.io.IOException;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

public class Main {
    public static void main(String[] args) {
        ObjectMapper objectMapper = new ObjectMapper();
        Browser b = new Browser();

        try{

            File entrys = new File("C:\\temp\\resources");

            File[] jsonData = entrys.listFiles(File::isFile);

            for(File json : jsonData){
                String[] commands = objectMapper.readValue(json, new TypeReference<String[]>() {});
                testNavigation(b, commands);
                System.out.println("=============================================================");
            }          
            
        }
        catch(IOException e){
            System.out.println("Error: " + e.getMessage());
        }
        catch(Exception e){
            System.out.println("Error: " + e.getMessage());
        }

    }

    static void testNavigation(Browser browser, String[] commands){
        for(String command : commands){
            if(command.startsWith("access")){
                String[] parts = command.split(",");
                browser.access(parts[1]);
            }else if(command.equals("back")){
                browser.back();
            }else if(command.equals("forward")){
                browser.forward();
            }else{
                System.out.println(browser);
            }            
        }
    }
}