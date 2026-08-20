import { useState } from "react";
import { Filter, Download, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { employees } from "../data/employees";

const EmployeeManagement = () => {
  const navigate = useNavigate();

  const [openActionId, setOpenActionId] = useState<number | string | null>(
    null,
  );

  const handleViewProfile = (employeeId: number | string) => {
    setOpenActionId(null);
    navigate(`/employee-profile/${employeeId}`);
  };

  const handleEditProfile = (employeeId: number | string) => {
    setOpenActionId(null);

    // Edit Profile functionality can be added here later.
    console.log("Edit Profile:", employeeId);
  };

  return (
    <div className="employee-management">
      {/* Breadcrumb */}
      <div className="employee-breadcrumb">Dashboard / Employee Management</div>

      {/* Main Employee Card */}
      <div className="employee-card">
        {/* Card Header */}
        <div className="employee-card-header">
          <h2>Employee Management</h2>

          <div className="employee-card-actions">
            {/* Filter */}
            <button type="button" className="filter-button" title="Filter">
              <Filter size={22} />
            </button>

            {/* Export */}
            <button type="button" className="export-button">
              <Download size={16} />
              Export
              <ChevronDown size={15} />
            </button>
          </div>
        </div>

        {/* Employee Table */}
        <div className="employee-table-container">
          <table className="employee-table">
            <thead>
              <tr>
                <th>Name(s)</th>
                <th>Dept</th>
                <th>Job Title</th>
                <th>Start Date</th>
                <th>Category</th>
                <th>Gender</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  {/* Name */}
                  <td>
                    <div className="employee-name">{employee.name}</div>
                  </td>

                  {/* Department */}
                  <td>{employee.department}</td>

                  {/* Job Title */}
                  <td>{employee.jobTitle}</td>

                  {/* Start Date */}
                  <td>{employee.startDate}</td>

                  {/* Category */}
                  <td>
                    <span className="employee-category">
                      {employee.category}
                    </span>
                  </td>

                  {/* Gender */}
                  <td>{employee.gender}</td>

                  {/* Actions */}
                  <td className="employee-action-cell">
                    <div className="action-dropdown-wrapper">
                      <button
                        type="button"
                        className="employee-dropdown-button"
                        onClick={() =>
                          setOpenActionId(
                            openActionId === employee.id ? null : employee.id,
                          )
                        }
                      >
                        Actions
                        <ChevronDown size={15} />
                      </button>

                      {/* Action Dropdown */}
                      {openActionId === employee.id && (
                        <div className="action-dropdown">
                          <button
                            type="button"
                            className="action-dropdown-item"
                            onClick={() => handleViewProfile(employee.id)}
                          >
                            View Profile
                          </button>

                          <button
                            type="button"
                            className="action-dropdown-item"
                            onClick={() => handleEditProfile(employee.id)}
                          >
                            Edit Profile
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeManagement;
