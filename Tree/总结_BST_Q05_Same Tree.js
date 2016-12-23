/*LC100 Same Tree*/
var isSameTree = function(p, q) {
    if(p === null && q === null) return true;
    if(p === null || q === null || p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

