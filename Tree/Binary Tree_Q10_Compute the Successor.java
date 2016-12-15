/*
	In Binary Tree, Inorder successor of a node is the next node in Inorder traversal of the Binary 
	Tree. Inorder Successor is NULL for the last node in Inoorder traversal.
	In Binary Search Tree, Inorder Successor of an input node can also be defined as the node with 
	the smallest key greater than the key of input node. So, it is sometimes important to find next 
	node in sorted order.

	Method 1 (Uses Parent Pointer) 
	In this method, we assume that every node has parent pointer.

	The Algorithm is divided into two cases on the basis of right subtree of the input node being 
	empty or not.

	Input: node, root // node is the node whose Inorder successor is needed.
	output: succ // succ is Inorder successor of node.

	1) If right subtree of node is not NULL, then succ lies in right subtree. Do following.
	   Go to right subtree and return the node with minimum key value in right subtree.
	2) If right sbtree of node is NULL, then succ is one of the ancestors. Do following.
       Travel up using the parent pointer until you see a node which is left child of it’s parent. 
       The parent of such a node is the succ.
*/

// Java program to find minimum value node in Binary Search Tree
 
// A binary tree node
class Node {
 
    int data;
    Node left, right, parent;
 
    Node(int d) {
        data = d;
        left = right = parent = null;
    }
}
 
class BinaryTree {
 
    static Node head;
 
    /* Given a binary search tree and a number, 
     inserts a new node with the given number in 
     the correct place in the tree. Returns the new 
     root pointer which the caller should then use 
     (the standard trick to avoid using reference 
     parameters). */
    Node insert(Node node, int data) {
 
        /* 1. If the tree is empty, return a new,     
         single node */
        if (node == null) {
            return (new Node(data));
        } else {
 
            Node temp = null;
             
            /* 2. Otherwise, recur down the tree */
            if (data <= node.data) {
                temp = insert(node.left, data);
                node.left = temp;
                temp.parent = node;
 
            } else {
                temp = insert(node.right, data);
                node.right = temp;
                temp.parent = node;
            }
 
            /* return the (unchanged) node pointer */
            return node;
        }
    }
 
    Node inOrderSuccessor(Node root, Node n) {
 
        // step 1 of the above algorithm 
        if (n.right != null) {
            return minValue(n.right);
        }
 
        // step 2 of the above algorithm
        Node p = n.parent;
        while (p != null && n == p.right) {
            n = p;
            p = p.parent;
        }
        return p;
    }
 
    /* Given a non-empty binary search tree, return the minimum data  
     value found in that tree. Note that the entire tree does not need
     to be searched. */
    Node minValue(Node node) {
        Node current = node;
 
        /* loop down to find the leftmost leaf */
        while (current.left != null) {
            current = current.left;
        }
        return current;
    }
 
    // Driver program to test above functions
    public static void main(String[] args) {
        BinaryTree tree = new BinaryTree();
        Node root = null, temp = null, suc = null, min = null;
        root = tree.insert(root, 20);
        root = tree.insert(root, 8);
        root = tree.insert(root, 22);
        root = tree.insert(root, 4);
        root = tree.insert(root, 12);
        root = tree.insert(root, 10);
        root = tree.insert(root, 14);
        temp = root.left.right.right;
        suc = tree.inOrderSuccessor(root, temp);
        if (suc != null) {
            System.out.println("Inorder successor of " + temp.data + 
                                                      " is " + suc.data);
        } else {
            System.out.println("Inorder successor does not exist");
        }
    }
}
 
/*
	Method 2 (Search from root) 
	Parent pointer is NOT needed in this algorithm. The Algorithm is divided into two cases on 
	the basis of right subtree of the input node being empty or not.

	Input: node, root // node is the node whose Inorder successor is needed.
	output: succ // succ is Inorder successor of node.

	1) If right subtree of node is not NULL, then succ lies in right subtree. Do following.
	   Go to right subtree and return the node with minimum key value in right subtree.
	2) If right sbtree of node is NULL, then start from root and us search like technique. Do 
	   following. Travel down the tree, if a node’s data is greater than root’s data then go right 
	   side, otherwise go to left side.
*/

struct node * inOrderSuccessor(struct node *root, struct node *n)
{
    // step 1 of the above algorithm
    if( n->right != NULL )
        return minValue(n->right);
 
    struct node *succ = NULL;
 
    // Start from root and search for successor down the tree
    while (root != NULL)
    {
        if (n->data < root->data)
        {
            succ = root;
            root = root->left;
        }
        else if (n->data > root->data)
            root = root->right;
        else
           break;
    }
 
    return succ;
}