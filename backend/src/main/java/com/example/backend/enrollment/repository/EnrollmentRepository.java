package com.example.backend.enrollment.repository;

import com.example.backend.enrollment.entity.ClassEnrollment;
import com.example.backend.student.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EnrollmentRepository extends JpaRepository<ClassEnrollment,String> {

    Optional<ClassEnrollment> findByStudentUserUserId(String userId);
    boolean existsByStudent(Student student);
}
