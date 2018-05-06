import {Route} from './route';

class RouteHttp extends Route {
    method;

    goTo(store, paramsArr, queryParamsObject) {
        const paramsObject = this.getParamsObject(paramsArr);
        store.router.goTo(this, paramsObject, store, queryParamsObject);
    }
}

export {RouteHttp as Route};
