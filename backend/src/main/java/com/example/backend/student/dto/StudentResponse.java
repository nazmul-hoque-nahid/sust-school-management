package com.example.backend.student.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StudentResponse {

    public String studentId;
    public String fullName;
    public String email;
    public String phone;
    public Integer currentClass;
    public String session;
    public Integer rollNo;

}