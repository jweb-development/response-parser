import { IRequestResponse, IParseResponse, IStatuses } from './responses';
export interface IUnhandled {
    error: Boolean;
    message: String;
}
export declare const parseResponse: (response: IRequestResponse, parseOptions?: IParseResponse) => (IStatuses | IUnhandled);
