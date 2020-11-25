/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const result =  haystack.split(needle);
    if(needle === "") return 0;
    if(result.length === 1) return -1;
    return result[0].length
};