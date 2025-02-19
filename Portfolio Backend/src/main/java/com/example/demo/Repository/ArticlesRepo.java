package com.example.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.Articles;

@Repository
public interface ArticlesRepo extends JpaRepository<Articles, Long> {
    List<Articles> getArticlesByid(Long id);
    long count();
}
