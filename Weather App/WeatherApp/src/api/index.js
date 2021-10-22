import {APIRequest, METHOD_GET, METHOD_POST} from './api-request';

// export const API_LOGIN = 1;
export const APIURL = {};

export class RequestManager {
    doRequest = (requestURLObject, param, onResponse, onError) => {
        requestURLObject = Object.assign({}, requestURLObject);
        let queryParam = null;

        let url = null;
        let requestBuilder = new APIRequest.Builder();

        switch (requestURLObject.type) {
            case METHOD_GET: {
                requestBuilder.get();
                break;
            }

            case METHOD_POST: {
                requestBuilder.post();
                requestBuilder.jsonParams(param);
                break;
            }

            default: {
                break;
            }
        }

        url = requestURLObject.url;

        if (requestURLObject.urlParam) {
            queryParam = this.objectToQuerystring(requestURLObject.urlParam);
            url = `${url}${queryParam}`;
        }

        requestBuilder.setReqId(requestURLObject.id);
        requestBuilder.reqURL(url);

        if (onResponse) {
            requestBuilder.response(onResponse);
        }

        if (onError) {
            requestBuilder.error(onError);
        }

        requestBuilder.build().doRequest();
    };

    objectToQuerystring = (obj) => {

        return Object.keys(obj).reduce(function (str, key, i) {
            var delimiter, val;

            delimiter = i === 0 ? '?' : '&';
            key = encodeURIComponent(key);
            val = encodeURIComponent(obj[key]);

            if (typeof obj[key] === 'undefined' || obj[key] == '') {
                //s   return (i === 0 && length > 1) ? '?' : '';
            }

            return [str, delimiter, key, '=', val].join('');
        }, '');
    };
}

export {APIRequest};
