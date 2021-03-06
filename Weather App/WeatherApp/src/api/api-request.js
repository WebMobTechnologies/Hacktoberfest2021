import {axiosInstance} from './api-instance';
import {isNetworkConnected} from 'src/utils';
import {ResponseCode} from 'src/utils/Constants';

export const METHOD_GET = 'get';
export const METHOD_POST = 'post';
export const METHOD_PUT = 'put';
export const REQ_JSON = 'json';
export const REQ_FORM_DATA = 'form-data';

export class APIRequest {
    doRequest() {
        isNetworkConnected().then((data) => {
            const isInternet = JSON.parse(data);
            if (isInternet) {
                switch (this.method) {
                    case METHOD_GET:
                        axiosInstance
                            .get(this.url)
                            .then((response) => this.onAPIResponse(response))
                            .catch((error) => this.onAPIError(error));
                        break;
                    case METHOD_PUT:
                        axiosInstance
                            .put(this.url, this.params)
                            .then((response) => this.onAPIResponse(response))
                            .catch((error) => this.onAPIError(error));
                        break;
                    case METHOD_POST:
                    default:
                        axiosInstance
                            .post(this.url, this.params, this.config)
                            .then((response) => this.onAPIResponse(response))
                            .catch((error) => this.onAPIError(error));
                        break;
                }
            } else {
                this.onAPIError({
                    status: ResponseCode.NO_INTERNET,
                    meta: {
                        message: 'Internet connection not available.',
                    },
                });
            }
        });
    }

    onAPIResponse = (response) => {
        this.onResponse(response, this.reqID);
    };

    onAPIError = (error) => {
        this.onError(error, this.reqID);
    };

    static Builder = class {
        constructor() {
            this.axios = new APIRequest();
        }

        reqURL(url: string) {
            this.axios.url = url;
            return this;
        }

        post() {
            this.axios.method = METHOD_POST;
            return this;
        }

        get() {
            this.axios.method = METHOD_GET;
            return this;
        }

        put() {
            this.axios.method = METHOD_PUT;
            return this;
        }

        jsonParams(params) {
            this.axios.reqType = REQ_JSON;
            this.axios.params = params;
            return this;
        }

        params(key, value) {
            this.axios.reqType = REQ_FORM_DATA;
            if (this.axios.params === undefined || this.axios.params === null) {
                this.axios.params = new FormData();
            }
            this.axios.params.append(key, value);
            return this;
        }

        addFile(key, uri, type = 'image/jpeg', name = '') {
            this.axios.reqType = REQ_FORM_DATA;

            // this.config = {
            //     ...this.config,
            //     'Content-Type': 'multipart/form-data'
            // }

            if (this.axios.params === undefined || this.axios.params === null) {
                this.axios.params = new FormData();
            }
            this.axios.params.append(key, {
                uri: uri,
                type: type, //or photo.type
                name: name,
            });
            return this;
        }

        addFilesWithParam(param, fileArray) {
            this.axios.reqType = REQ_FORM_DATA;
            if (this.axios.params === undefined || this.axios.params === null) {
                this.axios.params = new FormData();
                for (let file of fileArray) {
                    let mime = file.image.mime;
                    if (mime === undefined || mime === null || mime === '') {
                        mime = 'image/jpeg';
                    }

                    let name = file.imageName;
                    if (name === undefined || name === null) {
                        name = '';
                    }

                    this.axios.params.append(file.param_pic, {
                        uri: file.image.path,
                        type: mime,
                        name: name,
                    });
                }

                let keys = Object.keys(param);
                for (let key of keys) {
                    this.axios.params.append(key, param[key]);
                }
            }

            return this;
        }

        setReqId(reqID) {
            this.axios.reqID = reqID;
            return this;
        }

        setLoading(isLoading) {
            this.axios.isLoading = isLoading;
            return this;
        }

        response(onResponse) {
            this.axios.onResponse = onResponse;
            return this;
        }

        error(onError) {
            this.axios.onError = onError;
            return this;
        }

        build() {
            return this.axios;
        }
    };
}
