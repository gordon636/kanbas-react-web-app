import React from "react";
import { FaCheckCircle, FaEdit, FaEllipsisV, FaPlus, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
function Assignments() {
    const { courseId } = useParams();
    const assignmentList = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-6">
                        <input id="assignments-textfield" className="form-control w-50" placeholder="Search for Assignments" />
                    </div>

                    <div className="col-6 text-end">
                        <button type="button" className="btn btn-light btn-sm rounded ps-3 pe-3 border"><FaPlus /> Group</button>
                        <button type="button" className="btn btn-danger btn-sm rounded ps-3 pe-3 border"><FaPlus /> Assignment</button>
                        <button type="button" className="btn btn-light btn-sm rounded pl-0 ps-3 pe-3 border">
                            <FaEllipsisV />
                        </button>
                    </div>
                </div>
            </div>

            <hr />
            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <div>
                        <FaEllipsisV className="me-2" /> ASSIGNMENTS
                        <span className="float-end">
                            <span className="badge text-dark border border-dark rounded p-1">40% of Total</span>
                            <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
                        </span>
                    </div>
                    <ul className="list-group">
                        {assignmentList.map((assignment) => (
                            <>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div style={{ paddingRight: "10px" }}>
                                            <FaEllipsisV className="me-2" />
                                            <FaEdit style={{ color: "green" }} />
                                        </div>
                                        <div style={{ flexGrow: 305 }}>
                                            <Link
                                                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} style={{ color: "black", textDecoration: "none" }}>{assignment.title}</Link>
                                            <span className="text-muted small"><br />
                                                <span style={{ color: "red" }}>Multiple Module</span> | <b>Due</b> Sep 18, 2022, at 11:59 pm | 100 pts
                                            </span>
                                        </div>
                                        <div style={{ flexGrow: 1 }}>
                                            <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" />
                                        </div>
                                    </div>
                                </li >
                            </>
                        ))}
                    </ul>
                </li >
            </ul >
        </>
    );
}
export default Assignments;