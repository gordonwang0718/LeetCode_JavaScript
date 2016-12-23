/*LC270 Closest Binary Search Tree Value*/
var closestValue = function(root, target) {
    if(root.val === target) return root.val;
    if(root.val < target) {
        if(root.right === null) return root.val;
        var right = closestValue(root.right, target);
        if(Math.abs(root.val - target) <= Math.abs(right - target)) return root.val;
        return right;
    } else {
        if(root.left === null) return root.val;
        var left = closestValue(root.left, target);
        if(Math.abs(root.val - target) <= Math.abs(left - target)) return root.val;
        return left;
    }
};

/*LC272 Closest Binary Search Tree Value II*/