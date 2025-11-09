import React, { useEffect, useState } from "react";

const STORAGE_KEY = "fls_students";

/* Small, accessible React Modal that uses Bootstrap CSS classes but does not depend on bootstrap.js */
function Modal({ title, show, onClose, children, footer }) {
  if (!show) return null;

  return (
    <>
      <div
        className="modal d-block"
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">{children}</div>
            {footer && <div className="modal-footer">{footer}</div>}
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" />
    </>
  );
}

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark sticky-top"
      style={{ backgroundColor: "#236b45" }}
    >
      <div className="container">
        <a
          className="navbar-brand fw-bold d-flex align-items-center"
          href="#home"
        >
          <img
            src="/img/logo.png"
            alt="logo"
            width="46"
            height="46"
            className="me-2"
          />
          Future Leaders School
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          id="navbarNav"
          className="collapse navbar-collapse justify-content-end"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#admission">
                Admission
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faculty">
                Faculty
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#vision">
                Vision
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#subjects">
                Subjects
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const style = {
    minHeight: "50vh",
    backgroundImage: "url('/img/Future Leader School.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <section
      id="home"
      className="d-flex align-items-center text-center text-white"
      style={{ position: "relative" }}
    >
      <div style={{ ...style, width: "100%", padding: "6rem 0" }}>
        <div className="container">
          <h1
            className="display-4 fw-bold"
            style={{
              color: "#fff",
              textShadow: "2px 2px 6px rgba(0,0,0,0.35)",
            }}
          >
            Welcome to Future Leaders School
          </h1>
          <p className="lead" style={{ color: "#f8f9fa" }}>
            Building Futures, One Leader at a Time
          </p>
        </div>
      </div>
    </section>
  );
}

function Vision() {
  return (
    <section id="vision" className="py-5 text-center">
      <div className="container">
        <div className="card p-4 shadow border-0">
          <h2 className="mb-3" style={{ color: "#236b45", fontWeight: 700 }}>
            Our Vision
          </h2>
          <p className="lead px-md-5">
            At Future Leaders School, we aspire to create a learning environment
            that inspires curiosity, compassion, and courage. Our mission is to
            nurture confident learners who excel academically and morally.
          </p>
        </div>
      </div>
    </section>
  );
}

function Faculty() {
  const faculty = [
    {
      name: "Mr. Ali Raza",
      subject: "Mathematics",
      bio: "Building logical and analytical minds through numbers.",
      img: "/img/Maths Teacher.png",
    },
    {
      name: "Mr. Ahmed Khan",
      subject: "English",
      bio: "Fostering creativity and expression through language.",
      img: "/img/English Teacher.png",
    },
    {
      name: "Ms. Ayesha Riaz",
      subject: "Science",
      bio: "Encouraging curiosity to explore the wonders of science.",
      img: "/img/Science Teacher.png",
    },
    {
      name: "Mrs. Sarah Ahmed",
      subject: "Social Studies",
      bio: "Instilling awareness of our world, history, and community.",
      img: "/img/SocialStudiesTeacher.png",
    },
    {
      name: "Mr. Bilal Haider",
      subject: "Computer Studies",
      bio: "Empowering students with digital skills for tomorrow.",
      img: "/img/Computer Teacher.png",
    },
    {
      name: "Ms. Nadia Tariq",
      subject: "Urdu",
      bio: "Connecting students to our roots through Urdu literature.",
      img: "/img/Urdu Teacher.png",
    },
    {
      name: "Mr. Asaad Saeed",
      subject: "Islamiat",
      bio: "Teaching faith, values, and respect through Islamic studies.",
      img: "/img/Islamiat Teacher.png",
    },
    {
      name: "Mrs. Fatima Noor",
      subject: "Art",
      bio: "Encouraging creativity through colors and design.",
      img: "/img/Art Teacher.png",
    },
  ];

  return (
    <section id="faculty" className="py-5 bg-light">
      <div className="container">
        <h2
          className="text-center mb-5"
          style={{ color: "#236b45", fontWeight: 700 }}
        >
          Our Faculty
        </h2>
        <div className="row g-4">
          {faculty.map((f, idx) => (
            <div className="col-md-3 col-sm-6" key={idx}>
              <div className="card h-100">
                <img
                  src={f.img}
                  className="card-img-top"
                  alt={f.name}
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
                <div className="card-body">
                  <h5 className="card-title">{f.name}</h5>
                  <p className="text-muted">{f.subject}</p>
                  <p className="mb-0">{f.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Subjects() {
  const list = [
    "Mathematics",
    "English",
    "Science",
    "Social Studies",
    "Computer Studies",
    "Urdu",
    "Islamiat",
    "Art",
  ];
  return (
    <section id="subjects" className="py-5 bg-light">
      <div className="container">
        <h2
          className="text-center mb-5"
          style={{ color: "#236b45", fontWeight: 700 }}
        >
          Subjects Offered
        </h2>
        <div className="row g-4">
          {list.map((s, i) => (
            <div className="col-md-3 col-sm-6" key={i}>
              <div className="card text-center p-3 h-100">
                <h5 className="fw-bold text-success">{s}</h5>
                <p>{subjectBlurb(s)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function subjectBlurb(s) {
  switch (s) {
    case "Mathematics":
      return "Enhances problem-solving and analytical thinking abilities.";
    case "English":
      return "Develops reading, writing, and communication skills.";
    case "Science":
      return "Explores natural phenomena through experiments and logic.";
    case "Social Studies":
      return "Promotes understanding of history, geography, and culture.";
    case "Computer Studies":
      return "Introduces technology skills essential for the digital age.";
    case "Urdu":
      return "Encourages appreciation for national language and literature.";
    case "Islamiat":
      return "Builds moral character through Islamic teachings and values.";
    case "Art":
      return "Develops creativity, imagination, and visual expression skills.";
    default:
      return "";
  }
}

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#236b45",
        color: "#fff",
        textAlign: "center",
        padding: "30px 0",
      }}
    >
      <div className="container">
        <p className="mb-1">
          📧 info@FutureLeadersSchool.com | ☎ +92 300 1234567
        </p>
        <p>
          <i className="bi bi-facebook mx-2"></i>
          <i className="bi bi-twitter mx-2"></i>
          <i className="bi bi-instagram mx-2"></i>
        </p>
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Future Leaders School. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}

function AdmissionForm({ onAdd }) {
  const initial = {
    fullName: "",
    dob: "",
    email: "",
    contact: "",
    grade: "",
    address: "",
  };
  const [form, setForm] = useState(initial);
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validate() {
    if (!form.fullName.trim()) return "Full name is required";
    if (!form.email.trim()) return "Email is required";
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) return "Invalid email";
    if (!form.contact.trim()) return "Contact is required";
    if (!form.grade) return "Select grade level";
    return "";
  }

  function handleSubmit(e) {
    e.preventDefault();
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    onAdd({ ...form });
    setForm(initial);
    setError("");
  }

  return (
    <form id="admissionForm" className="row g-3" onSubmit={handleSubmit}>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="col-md-6">
        <label className="form-label">Full Name</label>
        <input
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          type="text"
          className="form-control"
          required
        />
      </div>
      <div className="col-md-6">
        <label className="form-label">Date of Birth</label>
        <input
          name="dob"
          value={form.dob}
          onChange={handleChange}
          type="date"
          className="form-control"
          required
        />
      </div>
      <div className="col-md-6">
        <label className="form-label">Email Address</label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          className="form-control"
          required
        />
      </div>
      <div className="col-md-6">
        <label className="form-label">Contact Number</label>
        <input
          name="contact"
          value={form.contact}
          onChange={handleChange}
          type="tel"
          className="form-control"
          required
        />
      </div>
      <div className="col-md-6">
        <label className="form-label">Grade Level Applying For</label>
        <select
          name="grade"
          value={form.grade}
          onChange={handleChange}
          className="form-select"
          required
        >
          <option value="">Choose...</option>
          <option>Nursery</option>
          <option>KG</option>
          <option>Grade 1</option>
          <option>Grade 2</option>
          <option>Grade 3</option>
          <option>Grade 4</option>
          <option>Grade 5</option>
          <option>Grade 6</option>
          <option>Grade 7</option>
          <option>Grade 8</option>
        </select>
      </div>
      <div className="col-md-6">
        <label className="form-label">Address</label>
        <input
          name="address"
          value={form.address}
          onChange={handleChange}
          type="text"
          className="form-control"
          required
        />
      </div>
      <div className="col-12 text-center mt-3">
        <button type="submit" className="btn btn-primary px-5 py-2">
          Submit
        </button>
      </div>
    </form>
  );
}

function StudentsTable({ students, onEdit, onDelete }) {
  return (
    <div className="table-responsive bg-white p-3 rounded shadow-sm">
      {students.length === 0 ? (
        <div className="p-4 text-center">No applicants yet.</div>
      ) : (
        <table className="table align-middle">
          <thead>
            <tr style={{ backgroundColor: "#236b45", color: "#fff" }}>
              <th>Full Name</th>
              <th>DOB</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Grade</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id}>
                <td>{s.fullName}</td>
                <td>{s.dob || "-"}</td>
                <td>{s.email}</td>
                <td>{s.contact}</td>
                <td>{s.grade}</td>
                <td>{s.address}</td>
                <td>
                  <div className="btn-group" role="group">
                    <button
                      className="btn btn-sm btn-warning"
                      onClick={() => onEdit(s)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => {
                        if (confirm("Delete this applicant?")) onDelete(s.id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

function EditForm({ student, onSave, onCancel }) {
  const [form, setForm] = useState(
    student || {
      fullName: "",
      dob: "",
      email: "",
      contact: "",
      grade: "",
      address: "",
    }
  );

  useEffect(() => {
    setForm(
      student || {
        fullName: "",
        dob: "",
        email: "",
        contact: "",
        grade: "",
        address: "",
      }
    );
  }, [student]);

  function handle(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave(form);
      }}
    >
      <div className="mb-2">
        <label className="form-label">Full Name</label>
        <input
          name="fullName"
          value={form.fullName}
          onChange={handle}
          className="form-control"
        />
      </div>
      <div className="mb-2">
        <label className="form-label">DOB</label>
        <input
          name="dob"
          value={form.dob}
          onChange={handle}
          type="date"
          className="form-control"
        />
      </div>
      <div className="mb-2">
        <label className="form-label">Email</label>
        <input
          name="email"
          value={form.email}
          onChange={handle}
          type="email"
          className="form-control"
        />
      </div>
      <div className="mb-2">
        <label className="form-label">Contact</label>
        <input
          name="contact"
          value={form.contact}
          onChange={handle}
          className="form-control"
        />
      </div>
      <div className="mb-2">
        <label className="form-label">Grade</label>
        <input
          name="grade"
          value={form.grade}
          onChange={handle}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Address</label>
        <input
          name="address"
          value={form.address}
          onChange={handle}
          className="form-control"
        />
      </div>
      <div className="text-end">
        <button
          type="button"
          className="btn btn-secondary me-2"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </div>
    </form>
  );
}

export default function App() {
  const [students, setStudents] = useState([]);
  const [showThankYou, setShowThankYou] = useState(false);
  const [editing, setEditing] = useState(null);
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) setStudents(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
  }, [students]);

  function addStudent(data) {
    const newOne = { id: Date.now().toString(), ...data };
    setStudents((s) => [newOne, ...s]);
    // show thank you modal
    setShowThankYou(true);
  }

  function updateStudent(id, updated) {
    setStudents((s) => s.map((x) => (x.id === id ? { ...x, ...updated } : x)));
  }

  function deleteStudent(id) {
    setStudents((s) => s.filter((x) => x.id !== id));
  }

  function handleEdit(student) {
    setEditing(student);
    setShowEdit(true);
  }

  function handleSaveEdit(updated) {
    if (!editing) return;
    updateStudent(editing.id, updated);
    setShowEdit(false);
    setEditing(null);
  }

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        backgroundColor: "#fafaf5",
        color: "#333",
      }}
    >
      <NavBar />
      <main className="container py-5">
        <Hero />

        <section id="vision" className="my-5">
          <Vision />
        </section>

        <section id="faculty" className="my-5">
          <Faculty />
        </section>

        <section id="subjects" className="my-5">
          <Subjects />
        </section>

        <section id="admission" className="my-5">
          <div className="row">
            <div className="col-lg-6">
              <h2 style={{ color: "#236b45", fontWeight: 700 }}>
                Admission Form
              </h2>
              <div className="card p-4 shadow-sm">
                <AdmissionForm onAdd={addStudent} />
              </div>
            </div>

            <div className="col-lg-6 mt-4 mt-lg-0">
              <h2 style={{ color: "#236b45", fontWeight: 700 }}>
                Applied Candidates
              </h2>
              <StudentsTable
                students={students}
                onEdit={handleEdit}
                onDelete={(id) => {
                  if (confirm("Delete this applicant?")) deleteStudent(id);
                }}
              />
            </div>
          </div>
        </section>

        <Modal
          title="Application Received"
          show={showThankYou}
          onClose={() => setShowThankYou(false)}
          footer={
            <button
              className="btn btn-primary"
              onClick={() => setShowThankYou(false)}
            >
              Close
            </button>
          }
        >
          <p>
            Thank you for applying. Please prepare for your admission test. You
            will receive further information via email.
          </p>
        </Modal>

        <Modal
          title="Edit Applicant"
          show={showEdit}
          onClose={() => {
            setShowEdit(false);
            setEditing(null);
          }}
          footer={null}
        >
          <EditForm
            student={editing}
            onSave={(u) => handleSaveEdit(u)}
            onCancel={() => {
              setShowEdit(false);
              setEditing(null);
            }}
          />
        </Modal>
      </main>

      <Footer />
    </div>
  );
}
