package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DTO.ArticlesDTO;
import com.example.demo.Model.Articles;
import com.example.demo.Service.ArticlesService;

import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.Valid;
import jakarta.validation.ValidationException;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;



@RestController
@RequestMapping("/articles")
@CrossOrigin(origins = "${frontend.url}")
public class ArticlesController {
    
    @Autowired
    private ArticlesService articlesService;

    @GetMapping("/getAllArticles")
    public ResponseEntity<List<ArticlesDTO>> getAllArticles(ArticlesDTO articlesDTO) {
            return ResponseEntity.ok(articlesService.getAllArticles(articlesDTO));        
    }

    @PostMapping("/save")
    public ResponseEntity<?> saveArticles(@Valid @RequestBody ArticlesDTO articlesDTO) {   
        try {
            Articles savedArticles = articlesService.saveArticles(articlesDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedArticles);
        } catch (ValidationException e) {
            return ResponseEntity.badRequest().body("Validation error: " + e.getMessage());
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not found: " + e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal error: " + e.getMessage());
        }
    }
      
}
