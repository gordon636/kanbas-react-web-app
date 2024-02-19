import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaChevronDown, FaPlus, FaRegCheckCircle } from "react-icons/fa";
import { useParams } from "react-router";
function ModuleList() {
    const { courseId } = useParams();
    const modulesList = modules.filter((module) => module.course === courseId);
    const [selectedModule, setSelectedModule] = useState(modulesList[0]);
    return (
        <>
            <div className="d-flex justify-content-end gap-2 mb-3 p-3">
                <button type="button" className="btn btn-light btn-sm rounded ps-3 pe-3 border">Collapse All</button>
                <button type="button" className="btn btn-light btn-sm rounded ps-3 pe-3 border">View Progress</button>
                <button type="button" className="btn btn-light btn-sm rounded ps-3 pe-3 border"><FaRegCheckCircle style={{ color: "green" }} />Publish All<FaChevronDown /></button>
                <button type="button" className="btn btn-danger btn-sm rounded ps-3 pe-3 border">
                    <FaPlus /> Module
                </button>
                <button type="button" className="btn btn-light btn-sm rounded pl-0 ps-3 pe-3 border">
                    <FaEllipsisV />
                </button>
            </div>
            <hr />
            <ul className="list-group wd-modules">
                {modulesList.map((module) => (
                    <li
                        className="list-group-item"
                        onClick={() => setSelectedModule(module)}>
                        <div>
                            <FaEllipsisV className="me-2" />
                            {module.name}
                            <span className="float-end">
                                <FaCheckCircle className="text-success" />
                                <FaPlusCircle className="ms-2" />
                                <FaEllipsisV className="ms-2" />
                            </span>
                        </div>
                        {selectedModule._id === module._id && (
                            <ul className="list-group">
                                {module.lessons?.map((lesson) => (
                                    <li className="list-group-item">
                                        <FaEllipsisV className="me-2" />
                                        {lesson.name}
                                        <span className="float-end">
                                            <FaCheckCircle className="text-success" />
                                            <FaEllipsisV className="ms-2" />
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}
export default ModuleList;