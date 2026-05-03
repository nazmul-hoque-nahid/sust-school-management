package com.example.backend.admin.controller;
import com.example.backend.admin.service.AdminStudentService;
import com.example.backend.student.dto.StudentResponse;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/student")
public class AdminStudentController {

    private final AdminStudentService service;

    public AdminStudentController(AdminStudentService service) {
        this.service = service;
    }

    @GetMapping("/students")
    public List<StudentResponse> getAll() {
        return service.getAllStudents();
    }

    @GetMapping("/filter")
    public List<StudentResponse> filter(
            @RequestParam(required = false) Integer cls,
            @RequestParam(required = false) String session
    ) {
        return service.filter(cls, session);
    }

    @PutMapping("/students/{id}")
    public StudentResponse update(@PathVariable String id,
                                  @RequestBody StudentResponse req) {
        return service.updateStudent(id, req);
    }

    @DeleteMapping("/students/{id}")
    public String delete(@PathVariable String id) {
        service.deleteStudent(id);
        return "Deleted";
    }
}