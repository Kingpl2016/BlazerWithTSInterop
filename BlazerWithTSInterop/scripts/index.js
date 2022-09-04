import { Hello, HelloInstance } from "./hello";
export { Hello, HelloInstance } from "./hello";
export class Index {
    hello() {
        HelloInstance.hello();
    }
    static goodbye() {
        Hello.goodbye();
    }
}
export var IndexInstance = new Index();
//# sourceMappingURL=index.js.map