package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmailSenderService {

    @Autowired
    private JavaMailSender mailSender;

    private final String adminEmail = "sudhamoysadhu2004@gmail.com"; 

    public void sendContactFormEmail(String name, String email, String message) throws MessagingException {
        String subject = "New Contact Form Submission";

    
        String htmlBody = "<html><body>"
        + "<h2>Contact Form Submission</h2>"
        + "<p><strong>Name:</strong> " + name + "</p>"
        + "<p><strong>Email:</strong> " + email + "</p>"
        + "<p><strong>Message:</strong><br>" + message + "</p>"
        + "<p>If you did not request this message, please contact us immediately at <a href='mailto:contact@yourdomain.com'>contact@yourdomain.com</a>.</p>"
        + "<p><small>If you no longer wish to receive messages from us, please unsubscribe <a href='#'>here</a>.</small></p>"
        + "</body></html>";


        sendHtmlEmail(adminEmail, subject, htmlBody);
    }

    private void sendHtmlEmail(String to, String subject, String htmlBody) throws MessagingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);

        helper.setFrom("${spring.mail.username}"); 
        helper.setTo(to);
        helper.setSubject(subject);
        helper.setText(htmlBody, true);

        mailSender.send(message);
    }
}
