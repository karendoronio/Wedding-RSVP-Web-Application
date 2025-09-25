"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeMutableMap = void 0;
/**
 * Implementation of MutableMap that provides map functionalities such as: verify if a key exists in a map,
 * returns the value associated with a map, set a (key, value) pair in a map and clear its contents.
 *  */
class MutableMapImpl {
    /**
     * @effects obj = empty map
     */
    constructor() {
        this.hasKey = (key) => {
            return this.map.has(key);
        };
        this.getValue = (key) => {
            const value = this.map.get(key);
            if (value === undefined) {
                throw new Error("No key found.");
            }
            else {
                return value;
            }
        };
        this.setValue = (key, value) => {
            const isReplaced = this.hasKey(key);
            this.map = this.map.set(key, value);
            return isReplaced;
        };
        this.clear = () => {
            this.map = new Map;
        };
        this.getKeys = () => {
            return Array.from(this.map.keys());
        };
        this.returnKeys = () => {
            return Array.from(this.map.keys());
        };
        this.returnValues = () => {
            return Array.from(this.map.values());
        };
        this.map = new Map;
    }
}
/**
 * Returns an instance the class MutableMapImpl with the attributes of a MutableMap interface
 * @returns an obj of a MutableMapImpl
 */
const makeMutableMap = () => {
    return new MutableMapImpl();
};
exports.makeMutableMap = makeMutableMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL21hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUE2REE7OztNQUdNO0FBQ04sTUFBTSxjQUFjO0lBSWhCOztPQUVHO0lBQ0g7UUFJQSxXQUFNLEdBQUcsQ0FBQyxHQUFXLEVBQVcsRUFBRTtZQUM5QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQztRQUVGLGFBQVEsR0FBRyxDQUFDLEdBQVcsRUFBSyxFQUFFO1lBQzFCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hDLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtnQkFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUNwQztpQkFBTTtnQkFDSCxPQUFPLEtBQUssQ0FBQzthQUNoQjtRQUNMLENBQUMsQ0FBQTtRQUNELGFBQVEsR0FBRyxDQUFDLEdBQVcsRUFBRSxLQUFRLEVBQVcsRUFBRTtZQUMxQyxNQUFNLFVBQVUsR0FBWSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3BDLE9BQU8sVUFBVSxDQUFDO1FBQ3RCLENBQUMsQ0FBQztRQUNGLFVBQUssR0FBRyxHQUFTLEVBQUU7WUFDZixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQztRQUNGLFlBQU8sR0FBRyxHQUFrQixFQUFFO1lBQzFCLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDO1FBQ0YsZUFBVSxHQUFHLEdBQWtCLEVBQUU7WUFDN0IsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUM7UUFDRixpQkFBWSxHQUFHLEdBQVEsRUFBRTtZQUNyQixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBO1FBQ3hDLENBQUMsQ0FBQztRQS9CRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDO0lBQ3ZCLENBQUM7Q0FnQ0o7QUFDRDs7O0dBR0c7QUFDSSxNQUFNLGNBQWMsR0FBRyxHQUFxQixFQUFFO0lBQ2pELE9BQU8sSUFBSSxjQUFjLEVBQUUsQ0FBQztBQUNoQyxDQUFDLENBQUM7QUFGVyxRQUFBLGNBQWMsa0JBRXpCIn0=