package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Service.EmailSenderService;

import jakarta.mail.MessagingException;

@RestController
@RequestMapping("/contactMe")
@CrossOrigin(origins = "${frontend.url}")
public class ContactController {

    @Autowired
    private EmailSenderService emailSenderService;

    @PostMapping("/sendEmail")
    public String submitContactForm(@RequestBody ContactForm contactForm) {
        try {
            // Call the email sender service to send the email
            emailSenderService.sendContactFormEmail(contactForm.getName(), contactForm.getEmail(), contactForm.getMessage());
            return "Message sent successfully!";
        } catch (MessagingException e) {
            e.printStackTrace();
            return "Error sending message. Please try again later.";
        }
    }
}

class ContactForm {
    private String name;
    private String email;
    private String message;

    // Getters and Setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
}

