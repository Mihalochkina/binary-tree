'use strict';

class BinaryTree {
	
	constructor() {
		this.root = null;
	}

	insert(data) { 
	
		this.root = putNode( this.root, data); 
		
		function putNode(node, data){ 
			if ( !node ) return new Node(data); 

			if (node.data > data ){ 
				node.left = putNode( node.left, data); 
			} else if (node.data < data) { 
				node.right = putNode(node.right, data); 
			} else if (node.data == data){ 
				node.data = data; 
			} 
			return node; 
		}
	}

	contains(data) { 
		var currentNode = this.root;
		while (currentNode != null){ 
			if (currentNode.data > data) { 
				currentNode = currentNode.left; 
			} else if (currentNode.data < data) { 
				currentNode = currentNode.right; 
			} else if (currentNode.data == data ) { 
				return true;
			} 
		} 
		return false; 
	}

	remove(data) {
		
		this.root = deleteNode(this.root, data);
	
		function deleteNode(node, data) {
			if(!node) return null;
			
			if(node.data < data) {
				node.right = deleteNode(node.right, data);
			} else if(node.data > data) {
				node.left = deleteNode(node.left, data);
			} else if(!node.left) {
				return node.right;
			} else if(!node.right) {
				return node.left;
			} else {
				node.data = min(node.right);
				node.right = deleteNode(node.right, node.data);	
			}							
			return node;
		}
		
		function min(node) {
			if(node.left) {
				return node.left.data;
			}
			return node.data;
		}
	}
	
	size() {

		var getCount = function (node) {
		
			var count = 1;
			
			if(node.left) {
				count += getCount(node.left);
			}		
			if(node.right) {
				count += getCount(node.right);
			}
			return count;
		}	
	
		if(!this.root) {
			return 0;
		}
	
		return getCount(this.root);
	}
	

	isEmpty() {
		return !this.root;
	}
}
