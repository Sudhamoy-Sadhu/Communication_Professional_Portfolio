package com.example.demo.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DTO.ArticlesDTO;
import com.example.demo.Model.Articles;
import com.example.demo.Service.ArticlesService;

import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.Valid;
import jakarta.validation.ValidationException;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;




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


    @GetMapping("/{id}")
    public ResponseEntity<ArticlesDTO> getArticlesById(@PathVariable Long id) {
        Optional<ArticlesDTO> articleDTO = articlesService.getArticlesById(id);
        return articleDTO.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Articles> updateArticles(@PathVariable Long id, @RequestBody @Valid ArticlesDTO updatedArticlesDTO) {
        try {
            Articles updateArticle = articlesService.updateArticles(id, updatedArticlesDTO);
            return ResponseEntity.ok(updateArticle);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteIArticlesById(@PathVariable Long id) {
        try {
            articlesService.deleteIArticlesById(id);
            return ResponseEntity.ok("Successfully deleted Articles");
        } catch(EmptyResultDataAccessException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Articles not found");
        }
        catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Cannot delete Articles by id");
        }
    }
      

    @GetMapping("/total")
    public ResponseEntity<?> getTotalArticleCount() {
        try {
            
            return ResponseEntity.ok(articlesService.getTotalArticleCount());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Can not find article count");
        }
    }
    
}
