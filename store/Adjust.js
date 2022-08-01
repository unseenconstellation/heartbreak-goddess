import {depAttrs} from './Attr'
export function adjust(id) {
    let you = JSON.parse(localStorage.getItem("your-chars")).find(you => you.id === id)
    let characters = [...you.charactersMet, you]
    let char = characters.find(character => character.id === id)
    char.attributes.forEach(attribute => {
        console.log("problem?")
        char.depAttributes.forEach((attr) => {
            attr.depend = depAttrs.find(dependent=> dependent.name === attr.name).depend
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
export function adjustCreator(char) {
    char.attributes.forEach(attribute => {
        console.log("problem?")
        char.depAttributes.forEach((attr) => {
            attr.depend = depAttrs.find(dependent=> dependent.name === attr.name).depend
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