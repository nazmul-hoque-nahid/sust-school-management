package com.example.backend.teacher.entity;

import com.example.backend.user.entity.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="teachers")
public class Teacher {
    @Id
    private String teacherId;
    @OneToOne
    @JoinColumn(name = "user_id", unique = true, nullable = false)
    private User user;
    @Column(nullable = false)
    private String fullName;
    private String phone;
    private String email;
    private String qualification;
    private LocalDateTime createdAt = LocalDateTime.now();
}
