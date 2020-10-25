import axios from "axios";

//ACTION TYPES
const SET_CAMPUSES = "SET_CAMPUSES";
const CREATE_NEW_CAMPUS = "CREATE_NEW_CAMPUS";
const DELETE_CAMPUS = "DELETE_CAMPUS";

//ACTION CREATORS
export const setCampuses = (campuses) => (
  {
    type:SET_CAMPUSES,
    campuses
  }
);

export const createNewCampus = (addedCampus) => (
  {
    type: CREATE_NEW_CAMPUS,
    addedCampus
  }
);

const deleteCampus = (id) => (
  {
    type: DELETE_CAMPUS,
    id
  }
);

//THUNK
export const fetchCampuses = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get("/api/campuses");
      dispatch (setCampuses(data));
    } catch (error) {
      console.error(error)
    }
  }
};

export const addCampus = (addedCampus) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.post("/api/campuses", addedCampus);
      dispatch (createNewCampus(data))
    } catch (error) {
      console.error(error)
    }
  }
};

export const deleteExistingCampus = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/campuses/${id}`);
      dispatch(deleteCampus(id));
    } catch (error) {
        console.error(error)
    }
  }
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function campusesReducer(state = [], action) {
 switch (action.type) {
    case SET_CAMPUSES:
         return {...state, campuses: action.campuses}.campuses;
    case CREATE_NEW_CAMPUS:
        return {...state, campuses: [...state, action.addedCampus]}.campuses;
    case DELETE_CAMPUS:
        return state.filter(campus =>campus.id!=action.id);
   default: return state
 }
};
