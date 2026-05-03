package com.example.backend.admin.service;

import com.example.backend.admin.dto.AdmissionFormResponse;
import com.example.backend.admission.entity.AdmissionForm;
import com.example.backend.admission.repository.AdmissionFormRepository;
import com.example.backend.enrollment.entity.ClassEnrollment;
import com.example.backend.enrollment.repository.EnrollmentRepository;
import com.example.backend.student.entity.Student;
import com.example.backend.student.repository.StudentRepository;
import com.example.backend.user.entity.User;
import com.example.backend.user.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class AdminAdmissionService {

    private final AdmissionFormRepository formRepo;

    private final StudentRepository studentRepository;
    private final UserRepository userRepository;
    private final EnrollmentRepository enrollmentRepository;
    private final PasswordEncoder passwordEncoder;

    public AdminAdmissionService(
            AdmissionFormRepository formRepo,
            StudentRepository studentRepository,
            UserRepository userRepository,
            EnrollmentRepository enrollmentRepository,
            PasswordEncoder passwordEncoder
    ) {
        this.formRepo = formRepo;
        this.studentRepository = studentRepository;
        this.userRepository = userRepository;
        this.enrollmentRepository = enrollmentRepository;
        this.passwordEncoder = passwordEncoder;
    }

    // ✅ GET ALL FORMS
    public List<AdmissionFormResponse> getAllForms() {
        return formRepo.findAll()
                .stream()
                .map(form -> {
                    AdmissionFormResponse res = new AdmissionFormResponse();
                    res.formId = form.getFormId(); 
                    res.applicantName = form.getApplicantName();
                    res.email = form.getEmail();
                    res.intendedClass = form.getIntendedClass();
                    res.applicationStatus = form.getApplicationStatus().name();
                    res.session=form.getSession();
                    return res;
                })
                .toList();
    }

    // ✅ APPROVE
    public AdmissionForm approve(String id) {
        AdmissionForm form = formRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Form not found: " + id));

        form.setApplicationStatus(AdmissionForm.ApplicationStatus.APPROVED);
        return formRepo.save(form);
    }

    // ✅ REJECT
    public AdmissionForm reject(String id) {
        AdmissionForm form = formRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Form not found: " + id));

        form.setApplicationStatus(AdmissionForm.ApplicationStatus.REJECTED);
        return formRepo.save(form);
    }

    @Transactional
    public void confirmAdmission(String id) {

        AdmissionForm form = formRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Form not found: " + id));

        // ✅ Already confirmed
        if (form.getApplicationStatus() == AdmissionForm.ApplicationStatus.CONFIRMED) {
            throw new RuntimeException("Already confirmed");
        }

        // ✅ Must be approved first
        if (form.getApplicationStatus() != AdmissionForm.ApplicationStatus.APPROVED) {
            throw new RuntimeException("Form must be APPROVED first");
        }

        // ✅ Prevent duplicate user
        if (userRepository.findByEmail(form.getEmail()).isPresent()) {
            throw new RuntimeException("User already exists with this email");
        }

        // ✅ 1. Create User
        User user = new User();
        user.setEmail(form.getEmail());
        user.setPassword(passwordEncoder.encode("123456"));
        user.setRole(User.Role.STUDENT);
        user = userRepository.save(user);

        // ✅ 2. Create Student
        Student student = new Student();
        student.setFullName(form.getApplicantName());
        student.setDob(form.getDob());
        student.setGender(Student.Gender.valueOf(form.getGender().name()));
        student.setPhone(form.getPhone());
        student.setEmail(form.getEmail());
        student.setUser(user);
        student = studentRepository.save(student);

        // ✅ 3. Create Enrollment
        ClassEnrollment enrollment = new ClassEnrollment();
        enrollment.setStudent(student);
        enrollment.setCurrentClass(form.getIntendedClass());
        enrollment.setSession(form.getSession());
        enrollment.setRollNo(0);
        enrollmentRepository.save(enrollment);

        // ✅ 4. FINAL STEP → update status
        form.setApplicationStatus(AdmissionForm.ApplicationStatus.CONFIRMED);
        formRepo.save(form);
    }
}