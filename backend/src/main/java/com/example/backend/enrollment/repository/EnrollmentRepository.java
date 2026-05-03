package com.example.backend.enrollment.repository;

import com.example.backend.enrollment.entity.ClassEnrollment;
import com.example.backend.student.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EnrollmentRepository extends JpaRepository<ClassEnrollment, String> {

    Optional<ClassEnrollment> findByStudentStudentId(String studentId);

    @Query("""
        SELECT e FROM ClassEnrollment e
        JOIN FETCH e.student s
        LEFT JOIN FETCH s.user
    """)
    List<ClassEnrollment> findAllWithStudent();

    List<ClassEnrollment> findByCurrentClass(Integer currentClass);

    List<ClassEnrollment> findBySession(String session);

    List<ClassEnrollment> findByCurrentClassAndSession(Integer currentClass, String session);
    Optional<ClassEnrollment>findByStudentUserUserId(String userId);
}