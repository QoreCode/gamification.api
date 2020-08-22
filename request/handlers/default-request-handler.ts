import { REQUEST_CODES, RequestHandler } from './request-handler';

export class DefaultRequestHandler extends RequestHandler {
    public resolve(status: REQUEST_CODES, data: any): Error {
        if (status === REQUEST_CODES.UNAUTHORIZED) {
            throw new Error('Для выполнения данной операции необходимо авторизоваться');
        }

        throw new Error('Сервер недоступен, повторите попытку позже');
    }
}
