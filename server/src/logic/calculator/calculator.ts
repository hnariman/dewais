import { vocabulary } from "../../vocabulary";

export type List = Record<keyof typeof vocabulary | string, number>;


class Calculator {
    static calculate(target: string): List {
        // base response object with empty mandatory fields
        // ! can be cached for optimisations 
        const response: List = Object.keys(vocabulary).reduce((prev, current) => ({ ...prev, [current]: 0 }), {});

        // remove newlines, numbers and punctuation symbols if any
        const allExceptLettersAndSpace = /[^a-zA-Z\ ]/g;
        const str = target.replace(allExceptLettersAndSpace, " ");

        str.split(' ').forEach(word => {
            for (const [key, values] of Object.entries(vocabulary)) {
                if (values.includes(word)) {
                    response[key] = response[key] + 1;
                }
            }
        })
        return response;

    }
}

export default Calculator;
