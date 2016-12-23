/*LC208 Implement Trie (Prefix Tree)*/

/*Solution 1*/
/**
 * @constructor
 * Initialize your data structure here.
 */
var TrieNode = function() {
  this.nodes = [];
  this.endFlag = false;
};

var Trie = function() {
  this.root = new TrieNode();
  this.root.endFlag = true;
};

/**
 * @param {string} word
 * @return {void}
 * Inserts a word into the trie.
 */
Trie.prototype.insert = function(word) {
  var node = this.root;

  for (var i = 0, len = word.length; i < len; i++) {
    var item = word.charCodeAt(i) - 97;
    if (!node.nodes[item]) {
      node.nodes[item] = new TrieNode();
    }
    node = node.nodes[item];
  }

  node.endFlag = true;
};

/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the trie.
 */
Trie.prototype.search = function(word) {
  var node = this.root;

  for (var i = 0, len = word.length; i < len; i++) {
    var item = word.charCodeAt(i) - 97;
    if (node.nodes[item])
      node = node.nodes[item];
    else
      return false;
  }

  return node.endFlag;
};

/**
 * @param {string} prefix
 * @return {boolean}
 * Returns if there is any word in the trie
 * that starts with the given prefix.
 */
Trie.prototype.startsWith = function(prefix) {
  var node = this.root;

  for (var i = 0, len = prefix.length; i < len; i++) {
    var item = prefix.charCodeAt(i) - 97;
    if (node.nodes[item])
      node = node.nodes[item];
    else
      return false;
  }

  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var trie = new Trie();
 * trie.insert("somestring");
 * trie.search("key");
 */

 /*Solution 2*/
 var TrieNode = function(key) {
    return {
        key: key,
        isWord: false,
        children: {}
    }
};

var Trie = function() {
    this.root = TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 * Inserts a word into the trie.
 */
Trie.prototype.insert = function(word) {
    var tree = this.root;
    var i, curr;
    
    for(i = 0; i < word.length; i++) {
        curr = word[i];
        if(!tree.children[curr]) {
            tree.children[curr] = TrieNode(curr);
        }
        tree = tree.children[curr];
    }
    
    tree.isWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the trie.
 */
Trie.prototype.search = function(word) {
    var tree = this.root;
    
    for(var i = 0; i < word.length; i++) {
        var curr = word[i];
        
        if(!tree.children[curr]) {
            return false;
        }
        
        tree = tree.children[curr];
    }
    
    return tree.isWord;
};

/**
 * @param {string} prefix
 * @return {boolean}
 * Returns if there is any word in the trie
 * that starts with the given prefix.
 */
Trie.prototype.startsWith = function(prefix) {
    var tree = this.root;
    
    for(var i = 0; i < prefix.length; i++) {
        var curr = prefix[i];
        
        if(!tree.children[curr]) {
            return false;
        }
        
        tree = tree.children[curr];
    }
    
    return true;    
};

/**
 * Your Trie object will be instantiated and called as such:
 * var trie = new Trie();
 * trie.insert("somestring");
 * trie.search("key");
 */

 