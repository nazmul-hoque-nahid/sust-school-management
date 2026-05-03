package com.example.backend.admission.repository;

import com.example.backend.admission.entity.AdmissionForm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdmissionFormRepository extends JpaRepository<AdmissionForm,String> {
    Optional<AdmissionForm> findByEmail(String email);
}
