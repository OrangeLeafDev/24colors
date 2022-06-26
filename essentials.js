class Colors24ESS {
    constructor() { }
    getInfo() {
        return {
                "id": "Colors24ESS",
                "name": "24ColorsESS",
                "blocks": [
                    {
                        "opcode": "splitstringy",
                        "blockType": "reporter",
                        "text": "split string [string] using [split] grab item [num1]",
                        "arguments": {
                            "string": {
                                "type": "string",
                                "defaultValue": "a|b|c|d|e|f|g"
                            },
                            "split": {
                                "type": "string",
                                "defaultValue": "|"
                            },
                            "num1": {
                                "type": "number",
                                "defaultValue": "2"
                            }
                        }
                    }
                ],
                "menus": {} //we will get back to this in a later tutorial
        }
    };

    splitstringy({ string, split, num1 }) {
        stringHolder = "";
        stringLocator = 0;
        stringOutput = [];
        for (let i = 0; i < string.length; i++) {
            if (string.substring(i, i + 1) == split) {
                stringOutput.push(stringHolder);
                stringHolder = "";
                stringLocator++;
            } else {
                stringHolder += string.substring(i, i + 1);
            }
        }
        return stringOutput[num1]
    };
}
Scratch.extensions.register(new Colors24ESS());
