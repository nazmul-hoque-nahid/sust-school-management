package com.example.backend.admin.controller;
import com.example.backend.admin.service.AdminTeacherService;
import com.example.backend.teacher.dto.TeacherResponse;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/teacher")
public class AdminTeacherController {

    private final AdminTeacherService service;

    public AdminTeacherController(AdminTeacherService service) {
        this.service = service;
    }

    @GetMapping("/all")
    public List<TeacherResponse> all() {
        return service.getAll();
    }

    @PostMapping
    public TeacherResponse create(@RequestBody TeacherResponse req) {
        return service.create(req);
    }

    @PutMapping("/{id}")
    public TeacherResponse update(
            @PathVariable String id,
            @RequestBody TeacherResponse req
    ) {
        return service.update(id, req);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable String id) {
        service.delete(id);
        return "Deleted";
    }
}