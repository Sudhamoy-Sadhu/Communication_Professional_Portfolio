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
@Table(name = "interviews")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Interviews {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "ReviewsTitle cannot be null")
    private String interviewTitle;

    @NotNull(message = "ReviewLink cannot be null")
    private String interviewLink;

    @NotNull(message = "ImageUrl cannot be null")
    private String imageUrl;

    @NotNull(message = "Date of Review cannot be null")
    private LocalDate dateOfInterview; 

    @NotNull(message = "Source cannot be null")
    private String sourceName;

    // private Interviews(){    
    // }


}
