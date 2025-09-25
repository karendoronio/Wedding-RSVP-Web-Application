// TODO (Q5): 
//  a) Copy over your mutable map interface from HW7
//  b) Add a function that gets all the keys from the map
//  c) Create a class that implements the interface with a TS Map as its field
//  d) Implement a factory function that creates a new instance of the class
/**
 * Represents a mutable map of (key, value) pairs
 */
export interface MutableMap<V> {
    /**
     * Check if there is some value associated with a given key in the map (obj) and return a boolean.
     * @param key is a key to determine if there is some value associated in the map
     * @returns contains-key(key, obj)
     */
    hasKey: (key: string) => boolean;

    /**
     * Get the value associated with a given key if such a pair exists in the map,
     * otherwise appropriately handle keys that do not exist.
     * @param key is a key to find the corresponding value for
     * @returns get-value(key, obj)
     * @throws Error when !contains-key(key, obj)
     */
    getValue: (key: string) => V;

    /**
     * Set a value for a given key in the map, replacing the current value if a pair with the given key 
     * already exists. Return a boolean indicating if a value was replaced.
     * @param key is a key to find the corresponding value for
     * @param value is a new value to replace old value associated with key
     * @returns contains-key(key, obj_0)
     * @modifies obj
     * @effects value_0 = value if true, otherwise add (key, value) to map
     */
    setValue: (key: string, value: V) => boolean;

    /**
     * Clear all pairs from the map
     * @modifies obj
     * @effects obj is now empty
     */
    clear: () => void;
    /**
     * Returns all the keys from all the (key, value) pairs in the map
     * @returns get-keys(obj)
     */
    getKeys:() => Array<string>;
    /**
     * gets all the keys
     * @returns get-keys(obj)
     */
    returnKeys: () => Array<string>

    /**
     * gets all the values
     * @returns all values of obj
     */
     returnValues: () => Array<V>


}
/**
 * Implementation of MutableMap that provides map functionalities such as: verify if a key exists in a map,
 * returns the value associated with a map, set a (key, value) pair in a map and clear its contents.
 *  */ 
class MutableMapImpl<V> implements MutableMap<V> {
    // AF: obj = this.map
    map: Map<string, V>;

    /**
     * @effects obj = empty map
     */
    constructor() {
        this.map = new Map;
    }

    hasKey = (key: string): boolean => {
        return this.map.has(key);
    };

    getValue = (key: string): V => {
        const value = this.map.get(key);
        if (value === undefined) {
            throw new Error("No key found.");
        } else {
            return value;
        }
    }
    setValue = (key: string, value: V): boolean => {
        const isReplaced: boolean = this.hasKey(key);
        this.map = this.map.set(key, value);
        return isReplaced;
    };
    clear = (): void => {
        this.map = new Map;
    };
    getKeys = (): Array<string> => {
        return Array.from(this.map.keys());
    };
    returnKeys = (): Array<string> => {
        return Array.from(this.map.keys());
    };
    returnValues = (): V[] => { 
        return Array.from(this.map.values()) 
    };

}
/** 
 * Returns an instance the class MutableMapImpl with the attributes of a MutableMap interface
 * @returns an obj of a MutableMapImpl
 */
export const makeMutableMap = <V>(): MutableMap<V> => {
    return new MutableMapImpl();
};