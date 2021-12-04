import { test, expect } from '@jest/globals';
import example from '.';

type Test = {
    case: string;
    val: string;
    expect: any;
};

let tests: Test[] = [
    {
        case: 'a basic example',
        val: 'testing',
        expect: 'testing',
    }
]

for (let t = 0; t < tests.length; t++) {

    let atest = tests[t];


    test(atest.case, () => {

        let result = example(atest.val);

        expect(result).toBe(atest.expect);

    });

};
