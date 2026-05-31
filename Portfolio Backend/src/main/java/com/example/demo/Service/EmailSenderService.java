package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@Service
public class EmailSenderService {

    @Value("${resend.api.key}")
    private String apiKey;

    private final String adminEmail = "shreyam2797@gmail.com";

    private final String RESEND_URL = "https://api.resend.com/emails";

    public void sendContactFormEmail(String name, String email, String message) {

        String subject = "New Contact Form Submission";

        String htmlBody = "<html><body>"
                + "<h2>Contact Form Submission</h2>"
                + "<p><strong>Name:</strong> " + name + "</p>"
                + "<p><strong>Email:</strong> " + email + "</p>"
                + "<p><strong>Message:</strong><br>" + message + "</p>"
                + "</body></html>";

        sendEmail(adminEmail, subject, htmlBody);
    }

    private void sendEmail(String to, String subject, String htmlBody) {

        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(apiKey);

        Map<String, Object> body = new HashMap<>();
        body.put("from", "onboarding@resend.dev"); // ⚠️ change after domain verification
        body.put("to", List.of(to));
        body.put("subject", subject);
        body.put("html", htmlBody);

        HttpEntity<Map<String, Object>> request = new HttpEntity<>(body, headers);

        ResponseEntity<String> response = restTemplate.postForEntity(
                RESEND_URL,
                request,
                String.class
        );

        if (!response.getStatusCode().is2xxSuccessful()) {
            throw new RuntimeException("Failed to send email: " + response.getBody());
        }
    }
}