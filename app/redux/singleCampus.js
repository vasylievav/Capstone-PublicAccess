import axios from "axios";

const GET_SINGLE_CAMPUS = "GET_SINGLE_CAMPUS";

export const setSingleCampus = (campus) => (
  {
    type: GET_SINGLE_CAMPUS,
    campus
  }
);

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

export default function singleCampusReducer (state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_CAMPUS:
      return action.campus
    default: return state
  }
};