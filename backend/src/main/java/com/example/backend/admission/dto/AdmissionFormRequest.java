package com.example.backend.admission.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
@Getter
@Setter
public class AdmissionFormRequest {

    public String applicantName;
    public LocalDate dob;
    public String gender;

    public Integer intendedClass;
    public String session;
    public String birthCertificateNo;
    public String previousSchool;

    public String fatherName;
    public String motherName;
    public String guardianName;

    public String phone;
    public String email;

    public String currentAddress;
    public String permanentAddress;
}