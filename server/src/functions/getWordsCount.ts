import { APIGatewayProxyEvent, Handler, Context } from "aws-lambda"
import { Logger } from '@aws-lambda-powertools/logger';
import { z } from 'zod';
import Calculator, { List } from "../logic/calculator/calculator";

const logger = new Logger();

const bodySchema = z.string()
    .min(1, { message: "string is too short" })
    .max(1024, { message: "string is too long" });


export const handler: Handler = async (event: APIGatewayProxyEvent, ctx: Context): Promise<string | List> => {
    logger.addContext(ctx);
    try {

        logger.debug(`body: ${event.body}`);
        const body = await bodySchema.parseAsync(event.body);
        logger.debug(`requested text: ${body}`);
        return Calculator.calculate(body);

    } catch (error) {

        logger.error(`unhandled error: ${JSON.stringify(error)}`);
        return 'error';

    }
}