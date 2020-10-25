import axios from "axios";

const GET_SINGLE_STUDENT = "GET_SINGLE_STUDENT";

const setSingleStudent = (student) => (
  {
    type: GET_SINGLE_STUDENT,
    student
  }
);

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

export default function singleStudentReducer (state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_STUDENT:
      return action.student
    default: return state
  }
};