package com.example.backend.admin.controller;

import com.example.backend.admin.dto.AdmissionFormResponse;
import com.example.backend.admin.service.AdminAdmissionService;
import com.example.backend.admission.entity.AdmissionForm;
import com.example.backend.admission.service.AdmissionService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/admission")
@PreAuthorize("hasRole('ADMIN')")
public class AdminAdmissionController {
    private final AdminAdmissionService adminService;
    public AdminAdmissionController(AdmissionService admissionService,
                           AdminAdmissionService adminService
    ) {
        this.adminService=adminService;
    }
    @GetMapping("/forms")
    public List<AdmissionFormResponse> getAllForms(){
        return adminService.getAllForms();
    }
    @PutMapping("/{id}/approve")
    public AdmissionForm approve(@PathVariable String id) {
        return adminService.approve(id);
    }

    @PutMapping("/{id}/reject")
    public AdmissionForm reject(@PathVariable String id) {
        return adminService.reject(id);
    }
    @PutMapping("/{id}/confirm")
    public String confirm(@PathVariable String id) {
        adminService.confirmAdmission(id);
        return "Admission confirmed";
    }
}
