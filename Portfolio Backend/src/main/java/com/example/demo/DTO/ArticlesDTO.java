package com.example.demo.DTO;

import java.time.LocalDate;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor

public class ArticlesDTO {

    private Long id;
    
    @NotNull(message = "Articles Title cannot be null")
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
