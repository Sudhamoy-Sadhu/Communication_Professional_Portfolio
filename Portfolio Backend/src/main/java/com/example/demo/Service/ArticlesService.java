package com.example.demo.Service;

import java.util.ArrayList;
import java.util.List;

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
}
