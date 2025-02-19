package com.example.demo.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.DTO.ArticlesDTO;
import com.example.demo.Model.Articles;
import com.example.demo.Repository.ArticlesRepo;

import jakarta.validation.Valid;

@Service
public class ArticlesService {
    
    @Autowired
    private ArticlesRepo articlesRepo;

    public List<ArticlesDTO> getAllArticles(ArticlesDTO articlesDTO){
        List<Articles> articles = articlesRepo.findAll();
        List<ArticlesDTO> articlesDtoList = new ArrayList<ArticlesDTO>();
        for(Articles article : articles){
            ArticlesDTO articleDTO = new ArticlesDTO();
            articleDTO.setArticleTitle(article.getArticleTitle());
            articleDTO.setArticleLink(article.getArticleLink());
            articleDTO.setImageUrl(article.getImageUrl());
            articleDTO.setDateOfArticle(article.getDateOfArticle());
            articleDTO.setSourceName(article.getSourceName());
            articlesDtoList.add(articleDTO);
        }
        return articlesDtoList;
    }

    public Articles saveArticles(@Valid ArticlesDTO articlesDTO){
        Articles article = new Articles();
        article.setArticleTitle(articlesDTO.getArticleTitle());
        article.setArticleLink(articlesDTO.getArticleLink());
        article.setImageUrl(articlesDTO.getImageUrl());
        article.setDateOfArticle(articlesDTO.getDateOfArticle());
        article.setSourceName(articlesDTO.getSourceName());
        
        return articlesRepo.save(article);
    }

    public Optional<ArticlesDTO> getArticlesById(Long id) {
        Optional<Articles> optionalArticle = articlesRepo.findById(id);
    
        return optionalArticle.map(article -> {
            ArticlesDTO dto = new ArticlesDTO();
            dto.setId(article.getId());
            dto.setArticleTitle(article.getArticleTitle());
            dto.setArticleLink(article.getArticleLink());
            dto.setImageUrl(article.getImageUrl());
            dto.setDateOfArticle(article.getDateOfArticle());
            dto.setSourceName(article.getSourceName());
            return dto;
        });
    }


    public Articles updateArticles(Long id, ArticlesDTO updatedArticleDTO) {
        Optional<Articles> optionalArtical = articlesRepo.findById(id);
        
        return optionalArtical.map(article -> { 
            article.setArticleTitle(updatedArticleDTO.getArticleTitle());
            article.setArticleLink(updatedArticleDTO.getArticleLink());
            article.setImageUrl(updatedArticleDTO.getImageUrl());
            article.setDateOfArticle(updatedArticleDTO.getDateOfArticle());
            article.setSourceName(updatedArticleDTO.getSourceName());
            return articlesRepo.save(article);
        }).orElseThrow(() -> new RuntimeException("Article not found with ID: " + id));
    }


    public void deleteIArticlesById(Long id){
        articlesRepo.deleteById(id);
    }

    public long getTotalArticleCount(){
        return articlesRepo.count();
    }
}
