package com.example.backend.user.dto;

import com.example.backend.user.entity.User;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Getter;
import lombok.Setter;

import javax.management.relation.Role;

@Setter
@Getter
public class RegisterRequest {
    public String email;
    public String password;
    private String role;

}
