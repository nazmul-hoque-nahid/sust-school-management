package com.example.backend.student.service;

import com.example.backend.enrollment.entity.ClassEnrollment;
import com.example.backend.enrollment.repository.EnrollmentRepository;
import com.example.backend.student.entity.Student;
import com.example.backend.student.repository.StudentRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class StudentService {
    private final StudentRepository studentRepository;
    private final EnrollmentRepository enrollmentRepository;

    public StudentService(StudentRepository studentRepository,
                          EnrollmentRepository enrollmentRepository
    ){
        this.studentRepository=studentRepository;
        this.enrollmentRepository=enrollmentRepository;
    }

    public Student myProfile() {
        String userId = Objects.requireNonNull(SecurityContextHolder.getContext()
                        .getAuthentication())
                .getName();

        return studentRepository.findByUserUserId(userId)
                .orElseThrow(() -> new RuntimeException("Student not found"));
    }
    public ClassEnrollment myEnrollment() {
        String userId = Objects.requireNonNull(SecurityContextHolder.getContext()
                        .getAuthentication())
                .getName();

        return (ClassEnrollment) enrollmentRepository.findByStudentUserUserId(userId)
                .orElseThrow(() -> new RuntimeException("Enrollment not found"));
    }
}
