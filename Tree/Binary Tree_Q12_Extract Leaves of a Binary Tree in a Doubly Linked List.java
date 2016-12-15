/*
	Given a Binary Tree, extract all leaves of it in a Doubly Linked List (DLL). Note that the DLL 
	need to be created in-place. Assume that the node structure of DLL and Binary Tree is same, only 
	the meaning of left and right pointers are different. In DLL, left means previous pointer and 
	right means next pointer.

	Let the following be input binary tree
		        1
		     /     \
		    2       3
		   / \       \
		  4   5       6
		 / \         / \
		7   8       9   10


	Output:
	Doubly Linked List
	7<->8<->5<->9<->10

	Modified Tree:
	        1
	     /     \
	    2       3
	   /         \
	  4           6

	We need to traverse all leaves and connect them by changing their left and right pointers. 
	We also need to remove them from Binary Tree by changing left or right pointers in parent nodes. 
	There can be many ways to solve this. In the following implementation, we add leaves at the 
	beginning of current linked list and update head of the list using pointer to head pointer. 
	Since we insert at the beginning, we need to process leaves in reverse order. For reverse order, 
	we first traverse the right subtree then the left subtree. We use return values to update left or 
	right pointers in parent nodes.

*/

// Java program to extract leaf nodes from binary tree
// using double linked list
  
// A binay tree node
class Node 
{
    int data;
    Node left, right;
  
    Node(int item) 
    {
        data = item;
        right = left = null;
    }
}
  
public class BinaryTree 
{
    Node root;
    Node head; // will point to head of DLL  
    Node prev; // temporary pointer 
  
    // The main fuction that links the list list to be traversed
    public Node extractLeafList(Node root) 
    {
        if (root == null)
            return null;
        if (root.left == null && root.right == null) 
        {
            if (head == null) 
            {
                head = root;
                prev = root;
            } 
            else
            {
                prev.right = root;
                root.left = prev;
                prev = root;
            }
            return null;
        }
        root.left = extractLeafList(root.left);
        root.right = extractLeafList(root.right);
        return root;
    }
  
    //Prints the DLL in both forward and reverse directions.
    public void printDLL(Node head) 
    {
        Node last = null;
        while (head != null) 
        {
            System.out.print(head.data + " ");
            last = head;
            head = head.right;
        }
    }
  
    void inorder(Node node) 
    {
        if (node == null)
            return;
        inorder(node.left);
        System.out.print(node.data + " ");
        inorder(node.right);
    }
  
    // Driver program to test above functions
    public static void main(String args[]) 
    {
        BinaryTree tree = new BinaryTree();
        tree.root = new Node(1);
        tree.root.left = new Node(2);
        tree.root.right = new Node(3);
  
        tree.root.left.left = new Node(4);
        tree.root.left.right = new Node(5);
        tree.root.right.right = new Node(6);
        tree.root.left.left.left = new Node(7);
        tree.root.left.left.right = new Node(8);
        tree.root.right.right.left = new Node(9);
        tree.root.right.right.right = new Node(10);
  
        System.out.println("Inorder traversal of given tree is : ");
        tree.inorder(tree.root);
        tree.extractLeafList(tree.root);
        System.out.println("");
        System.out.println("Extracted double link list is : ");
        tree.printDLL(tree.head);
        System.out.println("");
        System.out.println("Inorder traversal of modified tree is : ");
        tree.inorder(tree.root);
    }
}