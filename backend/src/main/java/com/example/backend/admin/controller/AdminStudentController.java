package com.example.backend.admin.controller;

import com.example.backend.admin.service.AdminAdmissionService;
import com.example.backend.admission.service.AdmissionService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin/student")
@PreAuthorize("hasRole('ADMIN')")
public class AdminStudentController {
    private final AdmissionService admissionService;
    private final AdminAdmissionService adminService;
    public AdminStudentController(AdmissionService admissionService,
                           AdminAdmissionService adminService
    ) {
        this.admissionService=admissionService;
        this.adminService=adminService;
    }

}
