import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = assignments.find(
        (assignment) => assignment._id === assignmentId);
    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div>
            <div className="d-flex justify-content-end align-items-center gap-2 mb-3 p-3">
                <p className="text-success"><FaCheckCircle /> Published</p>
                <button type="button" className="btn btn-light btn-sm rounded pl-0 ps-3 pe-3 border"><FaEllipsisV /></button>
            </div>
            <hr />
            <h2>Assignment Name</h2>
            <input value={assignment?.title}
                className="form-control mb-2" />
            <button onClick={handleSave} className="btn btn-success ms-2 float-end">
                Save
            </button>
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="btn btn-danger float-end">
                Cancel
            </Link>
        </div>
    );
}
export default AssignmentEditor;