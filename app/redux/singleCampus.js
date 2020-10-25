import axios from "axios";

//ACTION TYPES
const GET_SINGLE_CAMPUS = "GET_SINGLE_CAMPUS";
const UPDATE_SINGLE_CAMPUS = "UPDATE_SINGLE_CAMPUS";

//ACTION CREATORS
const setSingleCampus = (campus) => (
  {
    type: GET_SINGLE_CAMPUS,
    campus
  }
);

const updateSingleCampus = (campus) => (
  {
    type: UPDATE_SINGLE_CAMPUS,
    campus
  }
);

//THUNK
export const fetchSigleCampus = (id) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`/api/campuses/${id}`);
      dispatch(setSingleCampus(data))
    } catch (error) {
        console.error (error)
     }
  }
};

export const updateCampus = (campus, id) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.put(`/api/campuses/${id}`,campus);
      dispatch(updateSingleCampus(data))
    } catch (error) {
        console.error (error)
    }
  }
};

//REDUCER
export default function singleCampusReducer (state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_CAMPUS:
      return action.campus
    case UPDATE_SINGLE_CAMPUS:
      return action.campus
    default: return state
  }
};