package com.example.backend.student.repository;

import com.example.backend.student.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

public interface StudentRepository extends JpaRepository<Student,String> {

    Optional<Student> findByEmail(String email);
    Optional<Student> findByUserUserId(String userId);

}
