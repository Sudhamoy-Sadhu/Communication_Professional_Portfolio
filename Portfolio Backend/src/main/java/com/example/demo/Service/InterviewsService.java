package com.example.demo.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.DTO.InterviewsDTO;
import com.example.demo.Model.Interviews;
import com.example.demo.Repository.InterviewsRepo;

import jakarta.validation.Valid;

@Service
public class InterviewsService {
    
    @Autowired
    private InterviewsRepo interviewsRepo;

    public Interviews saveInterviews(@Valid InterviewsDTO interviewsDTO){
        Interviews interviews = new Interviews();
        interviews.setInterviewTitle(interviewsDTO.getInterviewTitle());
        interviews.setInterviewLink(interviewsDTO.getInterviewLink());
        interviews.setImageUrl(interviewsDTO.getImageUrl());
        interviews.setDateOfInterview(interviewsDTO.getDateOfInterview());
        interviews.setSourceName(interviewsDTO.getSourceName());

        return interviewsRepo.save(interviews);
    }

    public List<InterviewsDTO> getAllInterviews(InterviewsDTO interviewsDTO){
        List<Interviews> interviews = interviewsRepo.findAll();
        List<InterviewsDTO> interviewsDTOList = new ArrayList<>();
        for(Interviews interviews1 : interviews){
            InterviewsDTO dto = new InterviewsDTO();
            dto.setId(interviews1.getId());
            dto.setInterviewTitle(interviews1.getInterviewTitle());
            dto.setInterviewLink(interviews1.getInterviewLink());
            dto.setImageUrl(interviews1.getImageUrl());
            dto.setDateOfInterview(interviews1.getDateOfInterview());
            dto.setSourceName(interviews1.getSourceName());
            interviewsDTOList.add(dto);
        }
            return interviewsDTOList;            
    }

    public Optional<InterviewsDTO> getInterviewById(Long id) {
        Optional<Interviews> optionalInterview = interviewsRepo.findById(id);
    
        return optionalInterview.map(interview -> {
            InterviewsDTO dto = new InterviewsDTO();
            dto.setId(interview.getId());
            dto.setInterviewTitle(interview.getInterviewTitle());
            dto.setInterviewLink(interview.getInterviewLink());
            dto.setImageUrl(interview.getImageUrl());
            dto.setDateOfInterview(interview.getDateOfInterview());
            dto.setSourceName(interview.getSourceName());
            return dto;
        });
    }


    public Interviews updateInterview(Long id, InterviewsDTO updatedInterviewDTO) {
        Optional<Interviews> optionalInterview = interviewsRepo.findById(id);
        
        return optionalInterview.map(interview -> { 
            interview.setInterviewTitle(updatedInterviewDTO.getInterviewTitle());
            interview.setInterviewLink(updatedInterviewDTO.getInterviewLink());
            interview.setImageUrl(updatedInterviewDTO.getImageUrl());
            interview.setDateOfInterview(updatedInterviewDTO.getDateOfInterview());
            interview.setSourceName(updatedInterviewDTO.getSourceName());
            return interviewsRepo.save(interview);
        }).orElseThrow(() -> new RuntimeException("Review not found with ID: " + id));
    }


    public void deleteInterviewsById(Long id){
        interviewsRepo.deleteById(id);
    }

    public long gettotalInterviews(){
        return interviewsRepo.count();
    }
}
