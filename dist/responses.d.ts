export declare const responseTypes: {
    SUCCESS: string;
    NO_CONTENT: string;
    PARTIAL_SUCCESS: string;
    BAD_REQUEST: string;
    UNAUTHORIZED: string;
    FORBIDDEN: string;
    NOT_FOUND: string;
    DUPLICATE_ENTRY: string;
    INTERNAL_ERROR: string;
    UNIMPLEMENTED: string;
};
export interface IStatuses {
    code: Number;
    type: String;
    error: Boolean;
    message: String;
}
export declare const responses: {
    [status: number]: IStatuses;
};
export interface IRequestResponse {
    status: number;
    body: Object;
    type: String;
    url: String;
}
export interface IDispatch {
    type: String;
    payload?: Object;
}
export interface IParseResponse {
    dispatch?(dispatchOptions: IDispatch): void;
    dispatchType?: String;
    publicEndpoint?: Boolean;
    shouldDispatch?: Boolean;
    payload?: Object;
}
