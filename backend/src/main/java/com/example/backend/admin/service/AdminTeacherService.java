package com.example.backend.admin.service;

import com.example.backend.teacher.dto.TeacherResponse;
import com.example.backend.teacher.entity.Teacher;
import com.example.backend.teacher.repository.TeacherRepository;
import com.example.backend.user.entity.User;
import com.example.backend.user.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminTeacherService {

    private final TeacherRepository teacherRepo;
    private final UserRepository userRepo;
    private final PasswordEncoder passwordEncoder;

    public AdminTeacherService(
            TeacherRepository teacherRepo,
            UserRepository userRepo,
            PasswordEncoder passwordEncoder
    ) {
        this.teacherRepo = teacherRepo;
        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;
    }

    public List<TeacherResponse> getAll() {
        return teacherRepo.findAll()
                .stream()
                .map(t -> {
                    TeacherResponse res = new TeacherResponse();
                    res.teacherId = t.getTeacherId();
                    res.userId = t.getUser().getUserId();
                    res.fullName = t.getFullName();
                    res.email = t.getEmail();
                    res.phone = t.getPhone();
                    res.qualification = t.getQualification();
                    return res;
                })
                .toList();
    }

    public TeacherResponse create(TeacherResponse req) {
        User user = new User();
        user.setEmail(req.email);
        user.setPassword(passwordEncoder.encode("123456"));
        user.setRole(User.Role.TEACHER);
        user = userRepo.save(user);

        Teacher t = new Teacher();
        t.setFullName(req.fullName);
        t.setEmail(req.email);
        t.setPhone(req.phone);
        t.setQualification(req.qualification);
        t.setUser(user);
        t = teacherRepo.save(t);
        req.teacherId = t.getTeacherId();
        req.userId = user.getUserId();
        return req;
    }
    public TeacherResponse update(String id, TeacherResponse req) {
        Teacher t = teacherRepo.findById(id).orElseThrow();
        t.setFullName(req.fullName);
        t.setPhone(req.phone);
        t.setQualification(req.qualification);
        teacherRepo.save(t);
        return req;
    }
    public void delete(String id) {
        teacherRepo.deleteById(id);
    }
}