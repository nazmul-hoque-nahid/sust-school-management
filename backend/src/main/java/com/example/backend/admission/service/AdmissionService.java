package com.example.backend.admission.service;
import com.example.backend.admission.dto.AdmissionFormRequest;
import com.example.backend.admission.dto.AdmissionResponse;
import com.example.backend.admission.entity.AdmissionForm;
import com.example.backend.admission.repository.AdmissionFormRepository;
import com.example.backend.enrollment.repository.EnrollmentRepository;
import com.example.backend.student.repository.StudentRepository;
import com.example.backend.user.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

class BadRequestException extends RuntimeException {
    public BadRequestException(String message) {
        super(message);
    }
}
@Service
public class AdmissionService {
private  final AdmissionFormRepository formRepo;
private  final StudentRepository studentRepo;
private  final  EnrollmentRepository enrollmentRepo;
private final UserRepository userRepo;
    private final PasswordEncoder passwordEncoder;

    public AdmissionService(
            AdmissionFormRepository formRepo,
            StudentRepository studentRepo,
            EnrollmentRepository enrollmentRepo,
            UserRepository userRepo,
            PasswordEncoder passwordEncoder
    ) {
        this.formRepo = formRepo;
        this.studentRepo = studentRepo;
        this.enrollmentRepo = enrollmentRepo;
        this.userRepo=userRepo;
        this.passwordEncoder=passwordEncoder;
    }

    public AdmissionForm apply(AdmissionFormRequest req) {

        if (req == null) {
            throw new BadRequestException("Request body is missing");
        }

        // Required field validation
        if (req.applicantName == null || req.applicantName.isBlank()) {
            throw new BadRequestException("Applicant name is required");
        }

        if (req.dob == null) {
            throw new BadRequestException("Date of birth is required");
        }

        if (req.gender == null || req.gender.isBlank()) {
            throw new BadRequestException("Gender is required");
        }

        if (req.intendedClass == null) {
            throw new BadRequestException("Intended class is required");
        }


        if (req.phone == null || req.phone.isBlank()) {
            throw new BadRequestException("Phone is required");
        }

        // Enum safe parsing
        AdmissionForm.Gender genderEnum;
        try {
            genderEnum = AdmissionForm.Gender.valueOf(req.gender.toUpperCase());
        } catch (IllegalArgumentException ex) {
            throw new BadRequestException("Invalid gender value: " + req.gender);
        }

        try {
            AdmissionForm form = new AdmissionForm();

            form.setApplicantName(req.applicantName.trim());
            form.setDob(req.dob);
            form.setGender(genderEnum);

            form.setIntendedClass(req.intendedClass);
            form.setSession(req.session);
            form.setBirthCertificateNo(req.birthCertificateNo);
            form.setPreviousSchool(req.previousSchool);

            form.setFatherName(req.fatherName);
            form.setMotherName(req.motherName);
            form.setGuardianName(req.guardianName);

            form.setPhone(req.phone);
            form.setEmail(req.email);

            form.setCurrentAddress(req.currentAddress);
            form.setPermanentAddress(req.permanentAddress);

            // Default values
            form.setApplicationStatus(AdmissionForm.ApplicationStatus.PENDING);
            form.setApplicationDate(java.time.LocalDateTime.now());

            return formRepo.save(form);

        } catch (Exception ex) {
            // Catch DB or unexpected errors
            throw new RuntimeException("Failed to save admission form", ex);
        }
    }

     public AdmissionResponse status(String email){
        AdmissionForm form=formRepo.findByEmail(email).orElseThrow(()->new RuntimeException("Not found"));
        AdmissionResponse response=new AdmissionResponse();
        response.setApplicantName(form.getApplicantName());
        response.setEmail(form.getEmail());
        response.setStatus(form.getApplicationStatus().name());
        return  response;
     }
}