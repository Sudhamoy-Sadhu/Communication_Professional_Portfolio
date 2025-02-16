package com.example.demo.DTO;

import java.time.LocalDate;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class InterviewsDTO {

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
}
