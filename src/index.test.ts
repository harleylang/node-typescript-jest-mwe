import { test, expect } from '@jest/globals';
import fx from '.';

type Test = {
    case: string;
    args: {[key: string]: any};
    expect: any;
};

let tests: Test[] = [
    {
        case: 'a basic test example',
        args: { 
            word: 'testing'
        },
        expect: 'estingteh',
    }
];

for (let t = 0; t < tests.length; t++) {
    let atest = tests[t];
    test(atest.case, () => {
        let result = fx(atest.args as any);
        expect(result).toBe(atest.expect);
    });
};
