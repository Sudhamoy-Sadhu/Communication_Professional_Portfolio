package com.example.demo.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.Model.Reviews;


@Repository
public interface ReviewsRepo extends JpaRepository<Reviews,Long> {
	Optional findById(Long id);
}
