package com.example.backend.admission.controller;

import com.example.backend.admission.dto.AdmissionFormRequest;
import com.example.backend.admission.dto.AdmissionResponse;
import com.example.backend.admission.entity.AdmissionForm;
import com.example.backend.admission.service.AdmissionService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admission")
public class AdmissionController {
    private final AdmissionService admissionService;
    public AdmissionController(AdmissionService admissionService){
        this.admissionService=admissionService;
    }
    @PostMapping("/apply")
    public AdmissionForm apply(@RequestBody AdmissionFormRequest admissionFormRequest){
        System.out.println(admissionFormRequest.applicantName);
          return admissionService.apply(admissionFormRequest);
    }

    @GetMapping("/status/{email}")
    public AdmissionResponse status(@PathVariable String email){
        return  admissionService.status(email);
    }
}
