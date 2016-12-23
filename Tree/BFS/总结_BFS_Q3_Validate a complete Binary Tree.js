var validateACBT = function(root) {
	if(root === null) return;
	var queue = [];
	queue.push(root);
	var flag = false;

	while(queue.length !== 0) {
		var size = queue.length;
		for(var i = 0; i < size; i++) {
			var cur = queue.shift();
			if(cur.left !== null) {
				if(flag) return false;
				queue.push(cur.left)
			} else {
				flag = true;
			}

			if(cur.right !== null) {
				if(flag) return false;
				queue.push(cur.right);
			} else {
				flag = true;
			}
		}
	}

	return true;
}