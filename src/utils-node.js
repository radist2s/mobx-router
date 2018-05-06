import {getRegexMatches, getObjectKeys, isObject} from './utils';
import * as url from 'url';

const allowedRequestMethods = ['get', 'post'];

export const viewsForDirector = (views, store, routeFiredCallback) =>
    getObjectKeys(views).reduce((obj, viewKey) => {
        const view = views[viewKey];

        let method = 'get';

        if (view.method) {
            const methodIndex = allowedRequestMethods.indexOf(String(view.method).toLowerCase());

            if (methodIndex !== -1) {
                method = allowedRequestMethods[methodIndex];
            }
        }

        obj[view.path] = {
            [method]: function(...paramsArr) {
                const urlParsed = url.parse(this.req.url, true) || {};

                view.goTo(store, paramsArr, urlParsed.query || {});

                if (routeFiredCallback instanceof Function) {
                    routeFiredCallback(this.req, this.res, view, store);
                }
            }
        };

        return obj;
    }, {});

export {getRegexMatches, getObjectKeys, isObject};
