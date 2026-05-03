package com.example.backend.teacher.repository;

import com.example.backend.teacher.entity.ClassRoutine;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ClassRoutineRepository extends JpaRepository<ClassRoutine, Integer> {
    List<ClassRoutine> findByTeacherTeacherId(Integer teacherId);
}
