package com.example.backend.teacher.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "class_routines",
        uniqueConstraints = @UniqueConstraint(
                columnNames = {"class_id","session_id","subject_id","day_of_week","time_slot"}
        ))
public class ClassRoutine {

    @Id
    private String routineId;

    @Column(name = "class_id", nullable = false)
    private Integer classId;

    @Column(name = "subject_id", nullable = false)
    private String subjectId;

    @ManyToOne
    @JoinColumn(name = "teacher_id", nullable = false)
    private Teacher teacher;

    @Column(name = "session_id", nullable = false)
    private Integer sessionId;

    private String dayOfWeek; // Mon, Tue...
    private String timeSlot;  // "09:00-10:00"
    private String roomNo;

    public enum dayOfWeek{
        Mon,Tue,Wed,Thu,Fri,Sat
    }
}