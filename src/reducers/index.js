import { combineReducers } from "redux";
import poductosReducer from "./productosReducer";
import alertaReducer from "./alertaReducer";

export default combineReducers({
  productos: poductosReducer,
  alerta: alertaReducer,
});
