package com.example.demo.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
@CrossOrigin(origins = "${frontend.url}")
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

    @GetMapping("/{id}")
    public ResponseEntity<InterviewsDTO> getInterviewById(@PathVariable Long id) {
        Optional<InterviewsDTO> interviewDTO = interviewsService.getInterviewById(id);
        return interviewDTO.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Interviews> updateInterview(@PathVariable Long id, @RequestBody @Valid InterviewsDTO updatedInterviewDTO) {
        try {
            Interviews updatedInterview = interviewsService.updateInterview(id, updatedInterviewDTO);
            return ResponseEntity.ok(updatedInterview);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteInterviewsById(@PathVariable Long id) {
        try {
            interviewsService.deleteInterviewsById(id);
            return ResponseEntity.ok("Successfully deleted Interviews");
        } catch(EmptyResultDataAccessException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Interviews not found");
        }
        catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Cannot delete Interview by id");
        }
    }
}
