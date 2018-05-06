import { viewsForDirector } from './utils-node';
import * as director from "director";

const createDirectorRouter = (views, store, Component) => {
    return new director.http.Router({
        ...viewsForDirector(views, store, Component)
    });
};

export const startRouter = (views, store, Component) => {
    //create director configuration
    return createDirectorRouter(views, store, Component);
};
