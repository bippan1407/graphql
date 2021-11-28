type KV = {
    [key: string]: any
}

export enum errorName {
    NOT_FOUND = "NOT_FOUND",
    SERVER_ERROR = "SERVER_ERROR"
}

export const errorType: KV = {
    NOT_FOUND: {
        message: 'No such resource found.',
        statusCode: 403
    },
    SERVER_ERROR: {
        message: 'Server error.',
        statusCode: 500
    }
}