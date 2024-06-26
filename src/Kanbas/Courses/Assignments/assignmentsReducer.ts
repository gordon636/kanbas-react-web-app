import { createSlice } from "@reduxjs/toolkit";
import { db } from "../../Database";

export interface IAssignment {
    _id: string,
    title: string,
    course: string,
    description: string,
    points: number,
    dueDate: string,
    availableFromDate: string,
    availableUntilDate: string
}

const initialState = {
    assignments: db.assignments,
    assignment: { title: "New Assignment 123", course: "RS101" },
};


const assignmentSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action) => {
            state.assignments = [
                { ...action.payload, _id: new Date().getTime().toString() },
                ...state.assignments,
            ];
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) => {
                if (assignment._id === action.payload._id) {
                    return action.payload;
                } else {
                    return assignment;
                }
            });
        },
        selectAssignment: (state, action) => {
            state.assignment = action.payload;
        },
    },
});


export const { addAssignment, deleteAssignment,
    updateAssignment, selectAssignment } = assignmentSlice.actions;
export default assignmentSlice.reducer;