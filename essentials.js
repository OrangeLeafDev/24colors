class Colors24ESS {
    constructor() { }
    getInfo() {
        return {
                "id": "Colors24ESS",
                "name": "24Colors ESS",
                "blocks": [
                    {
                        "opcode": "substringy",
                        "blockType": Scratch.BlockType.BOOLEAN,
                        "text": "letters  through  of ",
                        arguments: {
                            "num1": {
                                "type": "number",
                                "defaultValue": "2"
                            },
                            "num2": {
                                "type": "number",
                                "defaultValue": "5"
                            },
                            "string": {
                                "type": "string",
                                "defaultValue": "hello world"
                            }
                        }
                        "disableMonitor": true
                    }
                ],
                "menus": {} //we will get back to this in a later tutorial
        }
    };

    substringy({ num1, num2, string }) {
        return string.substring(num1 - 1, num2);
    };
}
Scratch.extensions.register(new Colors24ESS());
