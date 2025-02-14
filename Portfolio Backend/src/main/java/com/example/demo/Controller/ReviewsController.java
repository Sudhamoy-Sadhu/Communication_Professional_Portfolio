package com.example.demo.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.DTO.ReviewsDTO;
import com.example.demo.Model.Reviews;
import com.example.demo.Service.ReviewsService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/reviews")
@CrossOrigin(origins = "${frontend.url}")
public class ReviewsController {

    @Autowired
    private ReviewsService reviewsService;


    @PostMapping("/save")
    public ResponseEntity<Reviews> saveReview(@RequestBody @Valid ReviewsDTO reviewsDTO) {
        Reviews savedReview = reviewsService.saveReviews(reviewsDTO);
        return new ResponseEntity<>(savedReview, HttpStatus.CREATED);
    }

    @GetMapping("/getAllReviews")
    public ResponseEntity<List<ReviewsDTO>> getAllReviews() {
        List<ReviewsDTO> reviews = reviewsService.getReviews();
        return ResponseEntity.ok(reviews);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ReviewsDTO> getReviewById(@PathVariable Long id) {
        Optional<ReviewsDTO> reviewDTO = reviewsService.getReviewById(id);
        return reviewDTO.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Reviews> updateReview(@PathVariable Long id, @RequestBody @Valid ReviewsDTO updatedReviewDTO) {
        try {
            Reviews updatedReview = reviewsService.updateReview(id, updatedReviewDTO);
            return ResponseEntity.ok(updatedReview);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteReviewsById(@PathVariable Long id) {
        try {
            reviewsService.deleteReviewsById(id);
            return ResponseEntity.ok("Successfully deleted Reviews");
        } catch (EmptyResultDataAccessException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Review not found");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Cannot delete Review by id");
        }
    }

}
