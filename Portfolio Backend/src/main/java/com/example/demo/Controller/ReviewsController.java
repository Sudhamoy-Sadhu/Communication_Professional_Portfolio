package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DTO.ReviewsDTO;
import com.example.demo.Model.Reviews;
import com.example.demo.Service.ReviewsService;

import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/reviews")
@CrossOrigin(origins = "http://localhost:3000")
public class ReviewsController {

    @Autowired
    private ReviewsService reviewsService;

    // POST endpoint to save a review
    @PostMapping("/save")
    public ResponseEntity<?> saveReviews(@RequestBody @Valid ReviewsDTO reviewsDTO) {
        Reviews savedReview = reviewsService.saveReviews(reviewsDTO);
        return new ResponseEntity<>(savedReview, HttpStatus.CREATED);
    }

    @GetMapping("/getAllReviews")
    public List<ReviewsDTO> getReviews(ReviewsDTO reviewsDTO) {
        return reviewsService.getReviews(reviewsDTO);
    }
    

}
