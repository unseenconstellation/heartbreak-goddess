import { characters } from "./Characters";
export function adjust(id) {
    console.log(characters)
    let char = characters.find(character => character.id === id)
    char.attributes.forEach(attribute => {
        char.depAttributes.forEach((attr) => {
            if (attr.reliance.includes(attribute.name)) {
                if (attr.reliance.length > 1) {
                    let orderedArray = [];
                    let properties = char.attributes.filter((attribute) => {
                        return attr.reliance.includes(attribute.name);
                    });
                    let indexedProperties = properties.map((proAttr) => {
                        let index = attr.reliance.indexOf(proAttr.name);
                        return { ...proAttr, index };
                    });
                    let count = 0;
                    while (orderedArray.length !== attr.reliance.length) {
                        orderedArray.push(
                            indexedProperties.find((attr) => {
                                return attr.index === count;
                            })
                        );
                        count++;
                    }
                    attr.depend(orderedArray);
                } else {
                    attr.depend(attribute.value);
                }
            }
        });

    })

}