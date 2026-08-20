import { useState } from "react";
import { useParams } from "react-router-dom";
import { Pencil, UserRound, CalendarDays } from "lucide-react";

import { employees } from "../data/employees";

type ProfileSection =
  | "personal"
  | "contact"
  | "nextOfKin"
  | "education"
  | "guarantor"
  | "family"
  | "job"
  | "financial";

type EducationView = "academic" | "records" | "professional";

const EmployeeProfile = () => {
  const { id } = useParams();

  const employee = employees.find((item) => String(item.id) === String(id));

  const [activeSection, setActiveSection] =
    useState<ProfileSection>("personal");

  const [educationView, setEducationView] = useState<EducationView>("academic");

  const employeeName = employee?.name || "JohnDoe";
  const department = employee?.department || "Design";
  const jobTitle = employee?.jobTitle || "UI UX Designer";
  const category = employee?.category || "Full time";

  const sections: {
    id: ProfileSection;
    label: string;
  }[] = [
    {
      id: "personal",
      label: "Personal Details",
    },
    {
      id: "contact",
      label: "Contact Details",
    },
    {
      id: "nextOfKin",
      label: "Next of kin Details",
    },
    {
      id: "education",
      label: "Education Qualifications",
    },
    {
      id: "guarantor",
      label: "Guarantor Details",
    },
    {
      id: "family",
      label: "Family Details",
    },
    {
      id: "job",
      label: "Job Details",
    },
    {
      id: "financial",
      label: "Financial Details",
    },
  ];

  const handleSectionClick = (section: ProfileSection) => {
    setActiveSection(section);

    if (section === "education") {
      setEducationView("academic");
    }
  };

  return (
    <div className="employee-profile-page">
      {/* ==================================================
          BREADCRUMB
      ================================================== */}

      <div className="profile-breadcrumb">
        <span>Employee Mgmt</span>
        <span>/</span>
        <span>Employee Profile</span>
        <span>/</span>
        <strong>{employeeName}</strong>
      </div>

      {/* ==================================================
          PROFILE LAYOUT
      ================================================== */}

      <div className="profile-layout">
        {/* ==================================================
            LEFT PROFILE MENU
        ================================================== */}

        <div className="profile-section-menu">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              className={`profile-section-button ${
                activeSection === section.id ? "active" : ""
              }`}
              onClick={() => handleSectionClick(section.id)}
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* ==================================================
            RIGHT PROFILE CARD
        ================================================== */}

        <div className="profile-details-card">
          {/* ==================================================
              PERSONAL DETAILS
          ================================================== */}

          {activeSection === "personal" && (
            <div className="personal-details-content">
              <button
                type="button"
                className="personal-edit-button"
                title="Edit Profile"
              >
                <Pencil size={36} strokeWidth={1.8} />
                <span>Edit</span>
              </button>

              <div className="personal-profile-icon">
                <UserRound size={76} strokeWidth={1.8} />
              </div>

              <div className="personal-dots">...</div>

              <div className="personal-name-section">
                <span className="personal-label">Employee Name</span>

                <strong className="personal-name">{employeeName}</strong>
              </div>

              <div className="personal-department-section">
                <span className="personal-label">Department</span>

                <strong className="personal-value">{department}</strong>
              </div>

              <div className="personal-job-row">
                <div className="personal-job-item">
                  <span className="personal-label">Job Title</span>

                  <strong className="personal-value">{jobTitle}</strong>
                </div>

                <div className="personal-job-item">
                  <span className="personal-label">Job Category</span>

                  <strong className="personal-value">{category}</strong>
                </div>
              </div>
            </div>
          )}

          {/* ==================================================
              CONTACT DETAILS
          ================================================== */}

          {activeSection === "contact" && (
            <div className="contact-details-content">
              <div className="contact-two-column">
                <div className="contact-field">
                  <label>Phone Number 1</label>

                  <div className="contact-value">099344434</div>
                </div>

                <div className="contact-field">
                  <label>Phone Number 2</label>

                  <div className="contact-value">Phone Number 2</div>
                </div>
              </div>

              <div className="contact-field full-width">
                <label>E-mail Address</label>

                <div className="contact-value">
                  abebekebede@gmail.
                  <br />
                  com
                </div>
              </div>

              <div className="contact-field city-field">
                <label>City of residence</label>

                <div className="contact-value">hawasa</div>
              </div>

              <div className="contact-field full-width address-field">
                <label>Residential Address</label>

                <div className="contact-value address-value">
                  bethel, alembank
                </div>
              </div>
            </div>
          )}

          {/* ==================================================
              NEXT OF KIN
          ================================================== */}

          {activeSection === "nextOfKin" && (
            <div className="next-of-kin-details-content">
              <div className="next-of-kin-two-column">
                <div className="next-of-kin-field">
                  <label>Next of kin name</label>

                  <div className="next-of-kin-value">birhanu mesfin</div>
                </div>

                <div className="next-of-kin-field">
                  <label>Job / Occupation</label>

                  <div className="next-of-kin-value">Accountant</div>
                </div>
              </div>

              <div className="next-of-kin-two-column">
                <div className="next-of-kin-field">
                  <label>Phone Number</label>

                  <div className="next-of-kin-value">093333322</div>
                </div>

                <div className="next-of-kin-field">
                  <label>Relationship</label>

                  <div className="next-of-kin-value relationship-value">
                    <span>Relative</span>
                    <span className="relationship-arrow">⌄</span>
                  </div>
                </div>
              </div>

              <div className="next-of-kin-field next-of-kin-address-field">
                <label>Residential Address</label>

                <div className="next-of-kin-value next-of-kin-address">
                  Debrezeit
                </div>
              </div>
            </div>
          )}

          {/* ==================================================
              EDUCATION QUALIFICATIONS
          ================================================== */}

          {activeSection === "education" && (
            <div className="education-details-content">
              {/* ==================================================
                  SCREEN 1
                  ACADEMIC DETAILS
              ================================================== */}

              {educationView === "academic" && (
                <div
                  className="education-academic-panel"
                  onClick={() => setEducationView("records")}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      setEducationView("records");
                    }
                  }}
                >
                  <h2 className="education-details-title">
                    Academic / Academic Details
                  </h2>

                  <div className="education-two-column">
                    <div className="education-field">
                      <label>Name of Institution</label>

                      <div className="education-value">Jimma University</div>
                    </div>

                    <div className="education-field">
                      <label>Degree</label>

                      <div className="education-value">Bachelors Degree</div>
                    </div>
                  </div>

                  <div className="education-field education-full-width">
                    <label>Field of Study</label>

                    <div className="education-value">Computer Science</div>
                  </div>

                  <div className="education-two-column">
                    <div className="education-field">
                      <label>Start Date</label>

                      <div className="education-value education-date-value">
                        <span>01/01/1998</span>

                        <CalendarDays size={16} strokeWidth={1.8} />
                      </div>
                    </div>

                    <div className="education-field">
                      <label>End Date</label>

                      <div className="education-value education-date-value">
                        <span>01/01/2019</span>

                        <CalendarDays size={16} strokeWidth={1.8} />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ==================================================
                  SCREEN 2
                  ACADEMIC / PROFESSIONAL RECORDS
              ================================================== */}

              {educationView === "records" && (
                <div className="education-records-section">
                  <h2 className="education-records-title">Academic Records</h2>

                  <h3 className="education-records-heading">
                    Academic Records
                  </h3>

                  <div className="education-record-card">
                    <strong>Jimma university</strong>

                    <span>B.Sc in Computer Science, May 2014 - May 2019</span>
                  </div>

                  <div className="education-record-card">
                    <strong>Cathederal school</strong>

                    <span>sep 2008 - June 2012</span>
                  </div>

                  <h3 className="education-records-heading professional-heading">
                    Professional Qualifications
                  </h3>

                  <button
                    type="button"
                    className="education-record-card education-record-button"
                    onClick={() => setEducationView("professional")}
                  >
                    <strong>CCNA Certification</strong>
                  </button>

                  <button
                    type="button"
                    className="education-record-card education-record-button"
                    onClick={() => setEducationView("professional")}
                  >
                    <strong>Google UI / UX Certification</strong>

                    <span>at Google Inc., September 2021 - September 2022</span>
                  </button>

                  <button
                    type="button"
                    className="education-record-card education-record-button education-web-developer"
                    onClick={() => setEducationView("professional")}
                  >
                    <strong>Web Developer</strong>

                    <span>at EAI, May 2019 - September 2021</span>

                    <p>
                      • Collaborated with team to deliver valuable features
                      meeting business and customer needs.
                    </p>
                  </button>
                </div>
              )}

              {/* ==================================================
                  SCREEN 3
                  PROFESSIONAL DETAILS
              ================================================== */}

              {educationView === "professional" && (
                <div className="professional-details-section">
                  <h2 className="professional-details-title">
                    Professional Records / Professional Details
                  </h2>

                  <div className="professional-two-column">
                    <div className="professional-field">
                      <label>Company Name</label>

                      <div className="professional-value">EAI</div>
                    </div>

                    <div className="professional-field">
                      <label>Title</label>

                      <div className="professional-value">Web Developer</div>
                    </div>
                  </div>

                  <div className="professional-two-column">
                    <div className="professional-field">
                      <label>Employment Type</label>

                      <div className="professional-value professional-select-value">
                        <span>Remote</span>

                        <span className="professional-dropdown-arrow">●</span>
                      </div>
                    </div>

                    <div className="professional-field">
                      <label>Location</label>

                      <div className="professional-value">Ethiopia</div>
                    </div>
                  </div>

                  <div className="professional-two-column">
                    <div className="professional-field">
                      <label>Start Date</label>

                      <div className="professional-value professional-date-value">
                        <span>01/01/2020</span>

                        <CalendarDays size={16} strokeWidth={1.8} />
                      </div>
                    </div>

                    <div className="professional-field">
                      <label>End Date</label>

                      <div className="professional-value professional-date-value">
                        <span>01/01/2021</span>

                        <CalendarDays size={16} strokeWidth={1.8} />
                      </div>
                    </div>
                  </div>

                  <div className="professional-field professional-description-field">
                    <label>Description</label>

                    <div className="professional-description">
                      <div>
                        • Gathering and evaluating product requirements, in
                        collaboration with product managers and the developers
                      </div>

                      <div>
                        • Illustrating design ideas using storyboards, process
                        flows, and sitemaps.
                      </div>

                      <div>
                        • Designing graphic user interface pages and elements,
                        like menus, tabs, and widgets
                      </div>

                      <div>
                        • Design wireframes, mockups, storyboards, and fully
                        interactive prototype design
                      </div>

                      <div>
                        • Conduct Usability testing to ensure alignment to
                        design strategy
                      </div>

                      <div>• Conduct an ongoing user research</div>

                      <div>
                        • Implementation of UI/UX best practices and principles
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ==================================================
              GUARANTOR DETAILS
          ================================================== */}

          {activeSection === "guarantor" && (
            <div className="guarantor-details-content">
              <h2 className="guarantor-details-title">Guarantor Details</h2>

              <div className="guarantor-card">
                <strong className="guarantor-name">MR Natnael melaku</strong>

                <span className="guarantor-description">
                  Head of Design Team, Microsoft Inc - 090 500 500 600
                </span>
              </div>

              <div className="guarantor-card">
                <strong className="guarantor-name">Mrs. Gelila moges</strong>
              </div>
            </div>
          )}

          {/* ==================================================
              FAMILY DETAILS
          ================================================== */}

          {activeSection === "family" && (
            <div className="family-details-content">
              <h2 className="family-details-title">Family Details</h2>

              <div className="family-details-card">
                <strong className="family-member-name">Mr Abel DOE</strong>

                <div className="family-member-info">
                  Relationship : Brother
                  <span className="family-divider">|</span>
                  Phone No : 090 300 540 9
                </div>

                <div className="family-member-address">
                  Address: djibouti Street Addis abeba
                </div>
              </div>
            </div>
          )}

          {/* ==================================================
              FINANCIAL DETAILS - FIGMA SCREEN
          ================================================== */}

          {activeSection === "financial" && (
            <div className="financial-details-content">
              <h2 className="financial-details-title">Financial Details</h2>

              {/* BANK NAME */}

              <div className="financial-field financial-bank-field">
                <label>Bank Name</label>

                <div className="financial-value">CBE</div>
              </div>

              {/* ACCOUNT NUMBER + ACCOUNT NAME */}

              <div className="financial-two-column">
                <div className="financial-field">
                  <label>Account No</label>

                  <div className="financial-value">100022342434423</div>
                </div>

                <div className="financial-field">
                  <label>Account Name</label>

                  <div className="financial-value">ABEBE KEBEDE</div>
                </div>
              </div>

              {/* UPDATE BUTTON */}

              <div className="financial-button-wrapper">
                <button type="button" className="financial-update-button">
                  Update Account Details
                </button>
              </div>
            </div>
          )}

          {/* ==================================================
              OTHER SECTIONS
          ================================================== */}

          {activeSection !== "personal" &&
            activeSection !== "contact" &&
            activeSection !== "nextOfKin" &&
            activeSection !== "education" &&
            activeSection !== "guarantor" &&
            activeSection !== "family" &&
            activeSection !== "financial" && (
              <div className="profile-placeholder">
                <h3>
                  {
                    sections.find((section) => section.id === activeSection)
                      ?.label
                  }
                </h3>

                <p>
                  This section will be implemented according to the
                  corresponding Figma design.
                </p>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
