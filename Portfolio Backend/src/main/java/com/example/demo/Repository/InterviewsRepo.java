package com.example.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.Interviews;

@Repository
public interface InterviewsRepo extends JpaRepository<Interviews, Long> {
    List<Interviews> getReviewsById(Long id);
}
