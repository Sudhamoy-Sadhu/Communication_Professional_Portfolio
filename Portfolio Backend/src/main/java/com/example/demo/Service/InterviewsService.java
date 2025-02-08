package com.example.demo.Service;

import java.util.ArrayList;
import java.util.List;

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
            dto.setInterviewTitle(interviews1.getInterviewTitle());
            dto.setInterviewLink(interviews1.getInterviewLink());
            dto.setImageUrl(interviews1.getImageUrl());
            dto.setDateOfInterview(interviews1.getDateOfInterview());
            dto.setSourceName(interviews1.getSourceName());
            interviewsDTOList.add(dto);
        }
            return interviewsDTOList;            
    }
}
