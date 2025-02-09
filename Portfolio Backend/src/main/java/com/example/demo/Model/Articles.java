package com.example.demo.Model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name ="articles")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Articles {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotNull(message = "ArticlesTitle cannot be null")
    private String articleTitle;

    @NotNull(message = "ArticleLink cannot be null")
    private String articleLink;

    @NotNull(message = "ImageUrl cannot be null")
    private String imageUrl;

    @NotNull(message = "Date of Article cannot be null")
    private LocalDate dateOfArticle; 

    @NotNull(message = "Source cannot be null")
    private String sourceName;
}
