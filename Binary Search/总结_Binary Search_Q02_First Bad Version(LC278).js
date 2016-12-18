/*TYPE 1*/
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if(n === 0) return -1;
        if(n === 1) return 1;
        var start = 1;
        var end = n;
        while(start + 1 < end) {
            var mid = start + parseInt((start + end) / 2);
            if(isBadVersion(mid)) end = mid;
            else start = mid;
        }
        if(isBadVersion(start)) return start;
        return end;
    };
};