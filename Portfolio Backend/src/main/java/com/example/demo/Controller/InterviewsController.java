package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DTO.InterviewsDTO;
import com.example.demo.Model.Interviews;
import com.example.demo.Service.InterviewsService;

import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.Valid;
import jakarta.validation.ValidationException;

@RestController
@RequestMapping("/interviews")
@CrossOrigin(origins = "http://localhost:3000")
public class InterviewsController {
    
    @Autowired
    private InterviewsService interviewsService;

    @GetMapping("/getallinterviews")
    public ResponseEntity<List<InterviewsDTO>> getAllInterviews(InterviewsDTO interviewsDTO){
        return ResponseEntity.ok(interviewsService.getAllInterviews(interviewsDTO));
    }
    
    @PostMapping("/save")
    public ResponseEntity<?> saveInterview(@Valid @RequestBody InterviewsDTO interviewsDTO) {
        try {
            Interviews savedInterview = interviewsService.saveInterviews(interviewsDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedInterview);
        } catch (ValidationException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Validation error: " + e.getMessage());
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Entity not found: " + e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An unexpected error occurred: " + e.getMessage());
        }
    }
}
