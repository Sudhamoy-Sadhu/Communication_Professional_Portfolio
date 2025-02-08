package com.example.demo.DTO;

import java.time.LocalDate;

import jakarta.validation.constraints.NotNull;

public class ReviewsDTO {

    @NotNull(message = "ReviewsTitle cannot be null")
    private String reviewTitle;

    @NotNull(message = "ReviewLink cannot be null")
    private String reviewLink;

    @NotNull(message = "ImageUrl cannot be null")
    private String imageUrl;

    @NotNull(message = "Date of Review cannot be null")
    private LocalDate dateOfReview;

    @NotNull(message = "Source cannot be null")
    private String sourceName;

    // Default constructor (NoArgsConstructor)
    public ReviewsDTO() {}

    // Constructor with all fields (AllArgsConstructor)
    public ReviewsDTO(String reviewTitle, String reviewLink, String imageUrl, LocalDate dateOfReview, String sourceName) {
        this.reviewTitle = reviewTitle;
        this.reviewLink = reviewLink;
        this.imageUrl = imageUrl;
        this.dateOfReview = dateOfReview;
        this.sourceName = sourceName;
    }

    // Getter and Setter methods

    public String getReviewTitle() {
        return reviewTitle;
    }

    public void setReviewTitle(String reviewTitle) {
        this.reviewTitle = reviewTitle;
    }

    public String getReviewLink() {
        return reviewLink;
    }

    public void setReviewLink(String reviewLink) {
        this.reviewLink = reviewLink;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public LocalDate getDateOfReview() {
        return dateOfReview;
    }

    public void setDateOfReview(LocalDate dateOfReview) {
        this.dateOfReview = dateOfReview;
    }

    public String getSourceName() {
        return sourceName;
    }

    public void setSourceName(String sourceName) {
        this.sourceName = sourceName;
    }
}
