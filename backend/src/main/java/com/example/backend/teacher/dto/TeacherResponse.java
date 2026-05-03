package com.example.backend.teacher.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TeacherResponse {
    public String teacherId;
    public String userId;
    public String fullName;
    public String email;
    public String phone;
    public String qualification;
}