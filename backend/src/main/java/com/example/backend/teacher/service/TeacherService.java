package com.example.backend.teacher.service;

import com.example.backend.teacher.entity.ClassRoutine;
import com.example.backend.teacher.entity.Teacher;
import com.example.backend.teacher.repository.ClassRoutineRepository;
import com.example.backend.teacher.repository.TeacherRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeacherService {

    private final TeacherRepository teacherRepo;
    private final ClassRoutineRepository routineRepo;

    public TeacherService(TeacherRepository teacherRepo,
                          ClassRoutineRepository routineRepo) {
        this.teacherRepo = teacherRepo;
        this.routineRepo = routineRepo;
    }

    public Teacher getMyProfile() {
        String userId = SecurityContextHolder.getContext()
                .getAuthentication()
                .getName();

        return teacherRepo.findByUserUserId(userId)
                .orElseThrow(() -> new RuntimeException("Teacher not found"));
    }
    public List<ClassRoutine> getMyRoutine() {
        String userId = SecurityContextHolder.getContext()
                .getAuthentication()
                .getName();

        Teacher teacher = teacherRepo.findByUserUserId(userId)
                .orElseThrow(() -> new RuntimeException("Teacher not found"));

        return routineRepo.findByTeacherTeacherId(Integer.valueOf(String.valueOf(teacher.getTeacherId())));
    }
}
