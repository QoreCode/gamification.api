import { REQUEST_CODES, RequestHandler } from './handlers/request-handler';
import { IRequestCriteriaProps } from './request-criteria';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { config } from './config';

enum REQUEST_METHODS {
    GET_METHOD = 'get',
    PUT_METHOD = 'put',
    POST_METHOD = 'post',
    PATCH_METHOD = 'patch',
    DELETE_METHOD = 'delete'
}

export class Request {
    public static getInstance(errorHandler: RequestHandler): Request {
        if (Request.instance === undefined) {
            Request.instance = new Request(errorHandler);
        }

        return Request.instance;
    }

    private static instance: Request;

    private errorHandler: RequestHandler;

    private constructor(errorHandler: RequestHandler) {
        this.errorHandler = errorHandler;
    }

    public post(url: string, params?: IRequestCriteriaProps): Promise<any> {
        return this.send(url, REQUEST_METHODS.POST_METHOD, params);
    }

    public get(url: string, params?: IRequestCriteriaProps): Promise<any> {
        return this.send(url, REQUEST_METHODS.GET_METHOD, params);
    }

    public put(url: string, params?: IRequestCriteriaProps): Promise<any> {
        return this.send(url, REQUEST_METHODS.PUT_METHOD, params);
    }

    public patch(url: string, params?: IRequestCriteriaProps): Promise<any> {
        return this.send(url, REQUEST_METHODS.PATCH_METHOD, params);
    }

    public delete(url: string, params?: IRequestCriteriaProps): Promise<any> {
        return this.send(url, REQUEST_METHODS.DELETE_METHOD, params);
    }

    private async send(url: string, method: REQUEST_METHODS, params?: IRequestCriteriaProps): Promise<any> {
        const path = `${config.protocol}://${config.domain}/api/${url}`;

        const axiosRequestConfig: AxiosRequestConfig = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'Authorization',
                'X-Requested-With': 'XMLHttpRequest'
            },
            url: path,
            responseType: 'json',
            method,
            data: params
        };

        try {
            const response: AxiosResponse = await axios(axiosRequestConfig);
            const successStatus = [REQUEST_CODES.OK, REQUEST_CODES.CREATED, REQUEST_CODES.DELETED];

            if (successStatus.some((code: REQUEST_CODES) => response.status === code)) {
                return response.data;
            }

            this.errorHandler.resolve(response.status, response.data);
        } catch (e) {
            console.log(e);
        }
    }
}
