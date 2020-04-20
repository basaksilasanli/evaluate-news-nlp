import {textChecker} from '../src/client/js/textChecker'


describe('Test, the function "textChecker()" should exist' , () => {
    test('It should return true', async () => {
        expect(textChecker).toBeDefined();
    });
});
describe('Test, the function "textChecker()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof textChecker).toBe("function");
    });
});
