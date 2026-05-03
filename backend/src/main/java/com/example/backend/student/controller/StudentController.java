package com.example.backend.student.controller;

import com.example.backend.enrollment.entity.ClassEnrollment;
import com.example.backend.student.entity.Student;
import com.example.backend.student.service.StudentService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/student")
@PreAuthorize("hasRole('STUDENT')")
public class StudentController {
       private final StudentService service;
   public  StudentController(StudentService service){this.service=service;}

    @GetMapping("/me")
    public Student myProfile(){
      return service.myProfile();
    }

    @GetMapping("/me/enrollment")
    public ClassEnrollment myEnrollment(){
            return service.myEnrollment();
    }
}
