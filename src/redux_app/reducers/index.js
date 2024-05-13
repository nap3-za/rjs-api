import { combineReducers } from "redux";
import account from "./account";
import errors from "./error";
import app from "./app";

export default combineReducers({
    account,
    error,
    app,
});
