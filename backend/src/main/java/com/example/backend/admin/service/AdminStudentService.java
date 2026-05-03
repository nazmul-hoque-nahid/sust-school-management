package com.example.backend.admin.service;

import com.example.backend.enrollment.entity.ClassEnrollment;
import com.example.backend.enrollment.repository.EnrollmentRepository;
import com.example.backend.student.dto.StudentResponse;
import com.example.backend.student.entity.Student;
import com.example.backend.student.repository.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminStudentService {

    private final EnrollmentRepository enrollmentRepository;
    private final StudentRepository studentRepository;

    public AdminStudentService(EnrollmentRepository enrollmentRepository,
                               StudentRepository studentRepository) {
        this.enrollmentRepository = enrollmentRepository;
        this.studentRepository = studentRepository;
    }

    // ✅ GET ALL STUDENTS (FAST - JOIN FETCH)
    public List<StudentResponse> getAllStudents() {

        return enrollmentRepository.findAllWithStudent()
                .stream()
                .map(e -> {
                    Student s = e.getStudent();

                    StudentResponse res = new StudentResponse();
                    res.studentId = s.getStudentId();
                    res.fullName = s.getFullName();
                    res.email = s.getEmail();
                    res.phone = s.getPhone();

                    res.currentClass = e.getCurrentClass();
                    res.session = e.getSession();
                    res.rollNo = e.getRollNo();

                    return res;
                })
                .toList();
    }

    // ✅ FILTER (class + session)
    public List<StudentResponse> filter(Integer cls, String session) {

        List<ClassEnrollment> list;

        if (cls != null && session != null) {
            list = enrollmentRepository.findByCurrentClassAndSession(cls, session);
        } else if (cls != null) {
            list = enrollmentRepository.findByCurrentClass(cls);
        } else if (session != null) {
            list = enrollmentRepository.findBySession(session);
        } else {
            list = enrollmentRepository.findAll();
        }

        return list.stream().map(e -> {
            Student s = e.getStudent();

            StudentResponse res = new StudentResponse();
            res.studentId = s.getStudentId();
            res.fullName = s.getFullName();
            res.email = s.getEmail();
            res.phone = s.getPhone();

            res.currentClass = e.getCurrentClass();
            res.session = e.getSession();
            res.rollNo = e.getRollNo();

            return res;
        }).toList();
    }

    // ✅ DELETE
    public void deleteStudent(String id) {
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found"));

        studentRepository.delete(student);
    }

    // ✅ UPDATE
    public StudentResponse updateStudent(String id, StudentResponse req) {

        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found"));

        student.setFullName(req.fullName);
        student.setPhone(req.phone);
        studentRepository.save(student);

        enrollmentRepository.findByStudentStudentId(id)
                .ifPresent(e -> {
                    e.setCurrentClass(req.currentClass);
                    e.setSession(req.session);
                    e.setRollNo(req.rollNo);
                    enrollmentRepository.save(e);
                });

        return req;
    }
}