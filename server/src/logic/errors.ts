/* 
AWS Lambdas have 2 types of errors, we want to handle them properly in advance
if we don't Lambda|Step Function may get into "infinite retry" state and waste lot of money

* Another solution is to check for prior requestID 

1. API Gateway Error:

    {
        "isBase64Encoded" : "boolean",
        "statusCode": "number",
        "headers": { ... },
        "body": "JSON string"
    }

2. Lambda Error:

    {
        "errorType": "ReferenceError",
        "errorMessage": "x is not defined",
        "trace": [
        "ReferenceError: x is not defined",
        "    at Runtime.exports.handler (/var/task/index.js:2:3)",
        "    at Runtime.handleOnce (/var/runtime/Runtime.js:63:25)",
        "    at process._tickCallback (internal/process/next_tick.js:68:7)"
        ]
    }

List of invoke errors: https://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html#API_Invoke_Errors
*/

// TODO: reuse my error classes and error handler npm
import { z } from 'zod'; 

const GatewayError = z.object({
    isBase64Encoded: z.boolean(),
    statusCode: z.number().min(100).max(600), // RFC-9110
    headers: z.unknown(), // need to test based on config
    body: z.string() // union type here to limit & be super predictable
})

const FunctionError = z.object({
    errorType: z.string(),
    errorMessage: z.string(),
    trace: z.array(z.string()).optional()
})

export type IAPIGatewayError = z.infer<typeof GatewayError>;
export type ILambdaError = z.infer<typeof FunctionError>;

export class LambdaError extends Error { //implements IAPIGatewayError{ 
    message = "Lambda Error occured, our technicals are informed and on the way";
}

export class APIGatewayError extends Error { //implements IAPIGatewayError{ 
    message = "Something went wrong with infrastructure, please try again";
}

export type SomeError = IAPIGatewayError | ILambdaError | Error | unknown;

// export const errorHandler = (error: SomeError) => {
//     if (error?.statusCode) {
//         return {
//             ...error,
//             customMessage: "Infrastructure error, please try again later"
//         }
//     } else if (error?.errorType) {
//         return {
//             ...error,
//             customMessage: "Something went wrong, out technical staff is informed and will fix it shortly"
//         }
//     } else {
//         return {
//             customMessage: "Something went wront, please try again"
//         }
//     }
// }