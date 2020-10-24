import axios from "axios";

//ACTION TYPES
const SET_STUDENTS = "SET_STUDENTS";
const CREATE_NEW_STUDENT = "CREATE_NEW_STUDENT";

//ACTION CREATORS
export const setStudents = (students) => (
  {
    type: SET_STUDENTS,
    students
  }
);

export const createNewStudent = (addedStudent) => (
  {
    type: CREATE_NEW_STUDENT,
    addedStudent
  }
);


////THUNK
export const fetchStudents = () => {
  return async (dispatch) => {
    try{
      const {data} = await axios.get("/api/students");
      dispatch(setStudents(data));
    } catch (error){
        console.error(error)
    }
  }
};

export const addStudent = (addedStudent) =>{
  return async (dispatch) => {
    try {
      const {data} = await axios.post("/api/students", addedStudent);
      dispatch (createNewStudent(data))
    } catch (error) {
      console.error (error)
    }
  }
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function studentsReducer(state =[], action) {
  switch (action.type){
    case SET_STUDENTS:
      return {...state, students:action.students}.students;
    case CREATE_NEW_STUDENT:
      return {...state, students: [...state, action.addedStudent]}.students;
    default: return state
  }
};
