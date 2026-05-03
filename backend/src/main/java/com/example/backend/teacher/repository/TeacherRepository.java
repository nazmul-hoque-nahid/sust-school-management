package com.example.backend.teacher.repository;

import com.example.backend.teacher.entity.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TeacherRepository extends JpaRepository<Teacher,String> {
    Optional<Teacher> findByUserUserId(String userId);
}
