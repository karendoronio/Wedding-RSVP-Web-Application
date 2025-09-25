// import * as assert from 'assert';

// TODO (5e): copy over your mutable map tests from HW7
//            add tests for the function that gets all the keys in the map
import * as assert from 'assert';
import { MutableMap, makeMutableMap } from './map';

// TODO: write test cases for the methods of your map class

// MaputableMapImpl function test cases
describe("map", function() {
    const map: MutableMap<number> = makeMutableMap();
    map.setValue('age', 31);

    it('hasKey', function() {
        // straight-line code: min 2 tests per subdomain
        assert.deepStrictEqual(map.hasKey('age'), true);
        assert.deepStrictEqual(map.hasKey('old'), false);
        assert.deepStrictEqual(map.hasKey('young'), false);
    });

    it('getValue', function() {
        map.setValue('old', 45); // adds new pair to map
        // straight-line code: min 2 tests per subdomain
        assert.deepStrictEqual(map.getValue('age'), 31);
        assert.deepStrictEqual(map.getValue('old'), 45);
        // tests if non-existent pair is passed into function 
        assert.throws(() => map.getValue('young'), Error);
    });

    it('setValue', function() {
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
    })

    it('clear', function(){
       // straight-line code: min 2 tests per subdomain to test obj state 
        map.clear();
        assert.deepStrictEqual(map.hasKey('infant'), false);
        map.setValue('impossible', 69)
        map.clear()
        assert.deepStrictEqual(map.hasKey('impossible'), false)
    })

    it('return', function(){
        // straight-line code: min 2 tests per subdomain to test obj state 
         map.setValue('into the woods', 88);
         assert.deepStrictEqual(map.getKeys(), ['into the woods']);
         map.setValue('out of the woods', 9)
         assert.deepStrictEqual(map.getKeys(), ['into the woods', 'out of the woods']);
     })
})
