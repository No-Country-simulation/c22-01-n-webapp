DROP TABLE IF EXISTS ROLES CASCADE;

DROP TABLE IF EXISTS USERS CASCADE;

DROP TABLE IF EXISTS SPECIALTIES CASCADE;

DROP TABLE IF EXISTS APPOINTMENTS CASCADE;

DROP TABLE IF EXISTS SPECIALTIES_AND_APPOINTMENTS CASCADE;

DROP TABLE IF EXISTS HISTORIES CASCADE;

-- ==============================
-- ROLES
-- ==============================
CREATE TABLE IF NOT EXISTS roles (
    id_role SERIAL PRIMARY KEY,
    role_name VARCHAR(50) NOT NULL
);

-- ==============================
-- USERS
-- ==============================
CREATE TABLE IF NOT EXISTS users (
    id_user SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    document_type VARCHAR(5) NOT NULL,
    document_number VARCHAR(30) UNIQUE NOT NULL,
    phone VARCHAR(20) UNIQUE NOT NULL,
    picture TEXT,
    license_number VARCHAR(50),
    fk_role INT REFERENCES roles(id_role) NOT NULL,
    -- validación: si es DOCTOR (role=2), license_number obligatorio
    CONSTRAINT chk_doctor_license CHECK (
        (fk_role = 2 AND license_number IS NOT NULL)
        OR (fk_role <> 2 AND license_number IS NULL)
    )
);

-- ==============================
-- SPECIALTIES
-- ==============================
CREATE TABLE IF NOT EXISTS specialties (
    id_specialty SERIAL PRIMARY KEY,
    specialty_name VARCHAR(100) NOT NULL UNIQUE
);

-- ==============================
-- USERS_SPECIALTIES
-- ==============================
CREATE TABLE IF NOT EXISTS users_specialties (
    id_user_specialty SERIAL PRIMARY KEY,
    fk_user INT REFERENCES users(id_user) NOT NULL,
    fk_specialty INT REFERENCES specialties(id_specialty) NOT NULL,
    UNIQUE(fk_user, fk_specialty)
);

-- Trigger para validar que solo DOCTORES puedan tener especialidades
CREATE OR REPLACE FUNCTION validate_user_specialty()
RETURNS TRIGGER AS $$
DECLARE
    user_role INT;
BEGIN
    SELECT fk_role INTO user_role FROM users WHERE id_user = NEW.fk_user;

    IF user_role <> 2 THEN
        RAISE EXCEPTION 'User % is not a doctor, cannot assign specialty', NEW.fk_user;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_validate_user_specialty
BEFORE INSERT OR UPDATE ON users_specialties
FOR EACH ROW
EXECUTE FUNCTION validate_user_specialty();

-- ==============================
-- APPOINTMENTS
-- ==============================
CREATE TABLE IF NOT EXISTS appointments (
    id_appointment SERIAL PRIMARY KEY,
    fk_patient INT REFERENCES users(id_user) NOT NULL,
    fk_doctor INT REFERENCES users(id_user) NOT NULL,
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    appointment_date DATE NOT NULL,
    appointment_time TIME NOT NULL,
    status VARCHAR(20) NOT NULL CHECK (status IN ('SCHEDULED', 'COMPLETED', 'CANCELLED'))
);

-- Trigger para validar roles de doctor y paciente
CREATE OR REPLACE FUNCTION validate_appointment_roles()
RETURNS TRIGGER AS $$
DECLARE
    role_patient INT;
    role_doctor INT;
BEGIN
    SELECT fk_role INTO role_patient FROM users WHERE id_user = NEW.fk_patient;
    SELECT fk_role INTO role_doctor FROM users WHERE id_user = NEW.fk_doctor;

    IF role_patient <> 1 THEN
        RAISE EXCEPTION 'User % is not a patient', NEW.fk_patient;
    END IF;

    IF role_doctor <> 2 THEN
        RAISE EXCEPTION 'User % is not a doctor', NEW.fk_doctor;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_validate_appointment_roles
BEFORE INSERT OR UPDATE ON appointments
FOR EACH ROW
EXECUTE FUNCTION validate_appointment_roles();

-- ==============================
-- HISTORIES
-- ==============================
CREATE TABLE IF NOT EXISTS histories (
    id_history SERIAL PRIMARY KEY,
    fk_patient INT REFERENCES users(id_user) NOT NULL,
    fk_doctor INT REFERENCES users(id_user) NOT NULL,
    fk_appointment INT REFERENCES appointments(id_appointment) NOT NULL,
    description TEXT NOT NULL,
    prescription TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Trigger para validar que fk_doctor sea doctor y fk_patient paciente
CREATE OR REPLACE FUNCTION validate_history_roles()
RETURNS TRIGGER AS $$
DECLARE
    role_patient INT;
    role_doctor INT;
BEGIN
    SELECT fk_role INTO role_patient FROM users WHERE id_user = NEW.fk_patient;
    SELECT fk_role INTO role_doctor FROM users WHERE id_user = NEW.fk_doctor;

    IF role_patient <> 1 THEN
        RAISE EXCEPTION 'User % is not a patient', NEW.fk_patient;
    END IF;

    IF role_doctor <> 2 THEN
        RAISE EXCEPTION 'User % is not a doctor', NEW.fk_doctor;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_validate_history_roles
BEFORE INSERT OR UPDATE ON histories
FOR EACH ROW
EXECUTE FUNCTION validate_history_roles();

-- ==============================
-- SEED DATA
-- ==============================
INSERT INTO roles (role_name) VALUES
    ('PATIENT'),
    ('DOCTOR'),
    ('ADMIN');
