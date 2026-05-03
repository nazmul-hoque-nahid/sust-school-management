package com.example.backend.admin.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AdmissionFormResponse {
    public String formId;
    public String applicantName;
    public String email;
    public Integer intendedClass;
    public String applicationStatus;
    public String session;

}