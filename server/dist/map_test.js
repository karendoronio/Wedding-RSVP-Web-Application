"use strict";
// import * as assert from 'assert';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// TODO (5e): copy over your mutable map tests from HW7
//            add tests for the function that gets all the keys in the map
const assert = __importStar(require("assert"));
const map_1 = require("./map");
// TODO: write test cases for the methods of your map class
// MaputableMapImpl function test cases
describe("map", function () {
    const map = (0, map_1.makeMutableMap)();
    map.setValue('age', 31);
    it('hasKey', function () {
        // straight-line code: min 2 tests per subdomain
        assert.deepStrictEqual(map.hasKey('age'), true);
        assert.deepStrictEqual(map.hasKey('old'), false);
        assert.deepStrictEqual(map.hasKey('young'), false);
    });
    it('getValue', function () {
        map.setValue('old', 45); // adds new pair to map
        // straight-line code: min 2 tests per subdomain
        assert.deepStrictEqual(map.getValue('age'), 31);
        assert.deepStrictEqual(map.getValue('old'), 45);
        // tests if non-existent pair is passed into function 
        assert.throws(() => map.getValue('young'), Error);
    });
    it('setValue', function () {
        // straight-line code: min 2 tests per subdomain 
        // checks obj state and return values when replacing keys with existing keys 
        assert.deepStrictEqual(map.setValue('age', 29), true);
        assert.deepStrictEqual(map.getValue('age'), 29);
        assert.deepStrictEqual(map.setValue('old', 31), true);
        assert.deepStrictEqual(map.getValue('old'), 31);
        // straight-line code: min 2 tests per subdomain 
        // checks obj state and return values when replacing keys with existing keys 
        assert.deepStrictEqual(map.setValue('young', 18), false);
        assert.deepStrictEqual(map.getValue('young'), 18);
        assert.deepStrictEqual(map.setValue('infant', 3), false);
        assert.deepStrictEqual(map.getValue('infant'), 3);
    });
    it('clear', function () {
        // straight-line code: min 2 tests per subdomain to test obj state 
        map.clear();
        assert.deepStrictEqual(map.hasKey('infant'), false);
        map.setValue('impossible', 69);
        map.clear();
        assert.deepStrictEqual(map.hasKey('impossible'), false);
    });
    it('return', function () {
        // straight-line code: min 2 tests per subdomain to test obj state 
        map.setValue('into the woods', 88);
        assert.deepStrictEqual(map.getKeys(), ['into the woods']);
        map.setValue('out of the woods', 9);
        assert.deepStrictEqual(map.getKeys(), ['into the woods', 'out of the woods']);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwX3Rlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvbWFwX3Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwQyx1REFBdUQ7QUFDdkQsMEVBQTBFO0FBQzFFLCtDQUFpQztBQUNqQywrQkFBbUQ7QUFFbkQsMkRBQTJEO0FBRTNELHVDQUF1QztBQUN2QyxRQUFRLENBQUMsS0FBSyxFQUFFO0lBQ1osTUFBTSxHQUFHLEdBQXVCLElBQUEsb0JBQWMsR0FBRSxDQUFDO0lBQ2pELEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRXhCLEVBQUUsQ0FBQyxRQUFRLEVBQUU7UUFDVCxnREFBZ0Q7UUFDaEQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNqRCxNQUFNLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdkQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsVUFBVSxFQUFFO1FBQ1gsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyx1QkFBdUI7UUFDaEQsZ0RBQWdEO1FBQ2hELE1BQU0sQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNoRCxNQUFNLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDaEQsc0RBQXNEO1FBQ3RELE1B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