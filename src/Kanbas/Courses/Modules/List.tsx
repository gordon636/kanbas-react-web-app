import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaChevronDown, FaPlus, FaRegCheckCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./reducer";
import { KanbasState } from "../../store";

export interface lessonType {
    _id: string,
    name: string,
    description: string,
    module: string
}

function ModuleList() {
    const { courseId } = useParams();
    const moduleList = useSelector((state: KanbasState) =>
        state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) =>
        state.modulesReducer.module);
    const dispatch = useDispatch();
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
                <li className="list-group-item">
                    <div className="form-group">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" placeholder="Module Name" value={module.name}
                            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Description</label> <br />
                        <textarea className="form-control" placeholder="Module Description" value={module.description}
                            onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
                        />
                    </div>

                    <button type="button" className="btn btn-success p-2 m-2" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                        Add</button>
                    <button type="button" className="btn btn-primary p-2 m-2" onClick={() => dispatch(updateModule(module))}>
                        Update
                    </button>
                </li>

                {moduleList
                    .filter((module) => module.course === courseId)
                    .map((module) => (
                        <li
                            className="list-group-item"
                            onClick={() => dispatch(setModule(module))}>
                            <div>
                                <button type="button" className="btn btn-warning p-2 m-2"
                                    onClick={(event) => dispatch(setModule(module))}>
                                    Edit
                                </button>
                                <button type="button" className="btn btn-danger p-2 m-2"
                                    onClick={() => dispatch(deleteModule(module._id))}>
                                    Delete
                                </button>
                                <FaEllipsisV className="me-2" />
                                <h3>{module.name}</h3>
                                <p>{module.description}</p>
                            </div>
                            {module._id === module._id && (
                                <ul className="list-group">
                                    {module.lessons?.map((lesson: lessonType) => (
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