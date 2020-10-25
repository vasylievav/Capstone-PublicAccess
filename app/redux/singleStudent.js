import axios from "axios";

//ACTION TYPES
const GET_SINGLE_STUDENT = "GET_SINGLE_STUDENT";
const UPDATE_SINGLE_STUDENT = "UPDATE_SINGLE_STUDENT";

//ACTION CREATORS
const setSingleStudent = (student) => (
  {
    type: GET_SINGLE_STUDENT,
    student
  }
);

const updateSingleStudent = (student) => (
  {
    type: UPDATE_SINGLE_STUDENT,
    student
  }
);

//THUNK
export const fetchSingleStudent = (id) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`/api/students/${id}`);
      dispatch(setSingleStudent(data))

    } catch (error) {
      console.error (error)
      }
  }
};

export const updateStudent = (student, id) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.put(`/api/students/${id}`, student);
      dispatch(updateSingleStudent(data))
    } catch (error) {
        console.error (error)
      }
  }
};

export default function singleStudentReducer (state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_STUDENT:
      return action.student
    case UPDATE_SINGLE_STUDENT:
      return action.student
    default: return state
  }
};