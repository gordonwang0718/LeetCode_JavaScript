/*
	By pass the left or right sub-tree depending on the number of nodes in that sub-tree
	Keep track of k, when bypassing left sub-tree, subtract the left_num_nodes + root from k.

	Time: O(h) since we're traversing only along the height of the tree and not visiting all the nodes
	Space: O(h), same reasoning.
*/