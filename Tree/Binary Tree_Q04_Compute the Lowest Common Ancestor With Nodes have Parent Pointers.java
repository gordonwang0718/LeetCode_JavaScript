/*
	Set 2:
	If we are given a BST where every node has parent pointer, then LCA can be easily determined 
	by traversing up using parent pointer and printing the first intersecting node.

	We can solve this problem using BST properties. We can recursively traverse the BST from root. 
	The main idea of the solution is, while traversing from top to bottom, the first node n we 
	encounter with value between n1 and n2, i.e., n1 < n < n2 or same as one of the n1 or n2, 
	is LCA of n1 and n2 (assuming that n1 < n2). So just recursively traverse the BST in, if 
	node’s value is greater than both n1 and n2 then our LCA lies in left side of the node, if 
	it’s is smaller than both n1 and n2, then LCA lies on right side. Otherwise root is LCA 
	(assuming that both n1 and n2 are present in BST)
*/

// Recursive Java program to print lca of two nodes
  
// A binary tree node
class Node 
{
    int data;
    Node left, right;
  
    Node(int item) 
    {
        data = item;
        left = right = null;
    }
}
  
class BinaryTree 
{
    Node root;
      
    /* Function to find LCA of n1 and n2. The function assumes that both
       n1 and n2 are present in BST */
    Node lca(Node node, int n1, int n2) 
    {
        if (node == null)
            return null;
  
        // If both n1 and n2 are smaller than root, then LCA lies in left
        if (node.data > n1 && node.data > n2)
            return lca(node.left, n1, n2);
  
        // If both n1 and n2 are greater than root, then LCA lies in right
        if (node.data < n1 && node.data < n2) 
            return lca(node.right, n1, n2);
  
        return node;
    }
  
    /* Driver program to test lca() */
    public static void main(String args[]) 
    {
        // Let us construct the BST shown in the above figure
        BinaryTree tree = new BinaryTree();
        tree.root = new Node(20);
        tree.root.left = new Node(8);
        tree.root.right = new Node(22);
        tree.root.left.left = new Node(4);
        tree.root.left.right = new Node(12);
        tree.root.left.right.left = new Node(10);
        tree.root.left.right.right = new Node(14);
  
        int n1 = 10, n2 = 14;
        Node t = tree.lca(tree.root, n1, n2);
        System.out.println("LCA of " + n1 + " and " + n2 + " is " + t.data);
  
        n1 = 14;
        n2 = 8;
        t = tree.lca(tree.root, n1, n2);
        System.out.println("LCA of " + n1 + " and " + n2 + " is " + t.data);
  
        n1 = 10;
        n2 = 22;
        t = tree.lca(tree.root, n1, n2);
        System.out.println("LCA of " + n1 + " and " + n2 + " is " + t.data);
  
    }
}