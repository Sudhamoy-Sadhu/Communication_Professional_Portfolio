package com.example.demo.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.DTO.ReviewsDTO;
import com.example.demo.Model.Reviews;
import com.example.demo.Repository.ReviewsRepo;

import jakarta.validation.Valid;

@Service
public class ReviewsService {

    @Autowired
    private ReviewsRepo reviewsRepo;

    public Reviews saveReviews(@Valid ReviewsDTO reviewsDTO) {
        Reviews reviews = new Reviews();
        reviews.setReviewTitle(reviewsDTO.getReviewTitle());
        reviews.setReviewLink(reviewsDTO.getReviewLink());
        reviews.setImageUrl(reviewsDTO.getImageUrl());
        reviews.setDateOfReview(reviewsDTO.getDateOfReview());
        reviews.setSourceName(reviewsDTO.getSourceName());

        return reviewsRepo.save(reviews);
    }

    public List<ReviewsDTO> getReviews() {
        List<Reviews> reviews = reviewsRepo.findAll(); 
        List<ReviewsDTO> reviewsDTOList = new ArrayList<>();
        for (Reviews review : reviews) {
            ReviewsDTO dto = new ReviewsDTO();
            dto.setId(review.getId());
            dto.setReviewTitle(review.getReviewTitle());
            dto.setReviewLink(review.getReviewLink());
            dto.setImageUrl(review.getImageUrl());
            dto.setDateOfReview(review.getDateOfReview());
            dto.setSourceName(review.getSourceName());
            reviewsDTOList.add(dto);
        }
        return reviewsDTOList;
    }

    public Optional<ReviewsDTO> getReviewById(Long id) {
        Optional<Reviews> optionalReview = reviewsRepo.findById(id);
    
        return optionalReview.map(review -> {
            ReviewsDTO dto = new ReviewsDTO();
            dto.setId(review.getId());
            dto.setReviewTitle(review.getReviewTitle());
            dto.setReviewLink(review.getReviewLink());
            dto.setImageUrl(review.getImageUrl());
            dto.setDateOfReview(review.getDateOfReview());
            dto.setSourceName(review.getSourceName());
            return dto;
        });
    }
    
    
    public Reviews updateReview(Long id, ReviewsDTO updatedReviewDTO) {
        Optional<Reviews> optionalReview = reviewsRepo.findById(id);
        
        return optionalReview.map(review -> { 
            review.setReviewTitle(updatedReviewDTO.getReviewTitle());
            review.setReviewLink(updatedReviewDTO.getReviewLink());
            review.setImageUrl(updatedReviewDTO.getImageUrl());
            review.setDateOfReview(updatedReviewDTO.getDateOfReview());
            review.setSourceName(updatedReviewDTO.getSourceName());
            return reviewsRepo.save(review);
        }).orElseThrow(() -> new RuntimeException("Review not found with ID: " + id));
    }
    
    
    public void deleteReviewsById(Long id){
        reviewsRepo.deleteById(id);
    }

}
