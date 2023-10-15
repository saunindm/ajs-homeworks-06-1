export default function orderByProps(object, propsOrder) {
    const propsSortedAlphabetically = Object.keys(object).sort((word1, word2) => word1 > word2 ? 1 : -1);
    const propsNotInOrder = propsSortedAlphabetically.filter(item => !propsOrder.includes(item));
    const sortedPropsKeys = Array.from(propsOrder).concat(propsNotInOrder);
    const sortedPropsList = [];
    sortedPropsKeys.forEach((property, i) => {
        for (const prop in object) {
            if (prop === property) {
                const sortedProp = {};
                sortedProp.key = prop;
                sortedProp.value = object[prop];
                sortedPropsList[i] = sortedProp;
            }
        }
    });
    return sortedPropsList;
}
