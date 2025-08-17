# **MediConnect**

#### Funcionalidades principales:

1. **Registro de usuarios**:

   - Roles: Paciente, Doctor, Administrador.
   - Datos básicos: nombre, apellido, email, telefono, edad, estado contraseña, foto, especialidad (para doctores).

2. **Iniciar Sesión**:

   - Correo y Contraseña

3. **Agendamiento de citas**:

   - Paciente selecciona fecha y doctor disponible.
   - Sistema valida disponibilidad.

4. **Gestión de disponibilidad**:

   - Doctores configuran horarios.

5. **Vista de citas**:

   - Pacientes: citas agendadas.
   - Doctores: lista de pacientes programados.

6. **Historial de Citas**:
   - Doctores pueden ver el historial anterior del paciente

---

#### Arquitectura:

- **Frontend**: React/Next.js
- **Backend**: Node.js (Typescript)
- **Base de datos**: PostgreSQL

---

#### Pasos básicos:

1. **Base de datos**:
   - Tablas: usuarios (roles), Citas, Disponibilidad.
2. **API**:
   - Endpoints: registro, login, agendar cita, listar citas.

### Diagrama Base de datos

![Diagrama MediConnect](https://res.cloudinary.com/ddo3iuibt/image/upload/v1733500894/lrabdpno9csq2szk528z.png)

### **FrontEnd**

**Juan Carlos Dias**

### BackEnd

**Jacinto Jose Gutierrez Cantillo**  
**Juan Daniel Pacheco Perez**
