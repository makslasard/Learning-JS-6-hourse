
// ruleKey = 'color', ruleValue = 'silver'
var countMatches = function (items, ruleKey, ruleValue) {
    return items.filter((ruleKey, ruleValue) => ruleKey === ruleValue).length
};
console.log(countMatches([["phone", "blue", "pixel"], ["computer", "silver", "phone"], ["phone", "gold", "iphone"]], "type", "phone"))


