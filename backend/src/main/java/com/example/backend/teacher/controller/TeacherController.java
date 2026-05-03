package com.example.backend.teacher.controller;

import com.example.backend.teacher.entity.ClassRoutine;
import com.example.backend.teacher.entity.Teacher;
import com.example.backend.teacher.service.TeacherService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
@RestController
@RequestMapping("/api/teacher")
@PreAuthorize("hasRole('TEACHER')")
public class TeacherController {

    private final TeacherService service;

    public TeacherController(TeacherService service) {
        this.service = service;
    }
    @GetMapping("/me")
    public Teacher getMyProfile() {
        return service.getMyProfile();
    }

    @GetMapping("/me/routine")
    public List<ClassRoutine> getMyRoutine() {
        return service.getMyRoutine();
    }
}