package com.example.backend.admission.dto;

import lombok.Generated;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class AdmissionResponse {
    public String applicantName;
    public String status;
    public String email;
}
