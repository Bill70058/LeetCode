/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {根值} root
 * @param {目标左值} p
 * @param {目标右值} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // if(root == null){
    //     return root;
    // }
    // var temp = root.val,
    //       pVal = p.val,
    //       qVal = q.val;
    // if(pVal < root.val && q.val<root.val){
    //     lowestCommonAncestor(root.left,p,q);
    // }else if(pVal > root.val && qVal > root.val){
    //     lowestCommonAncestor(root.right,p,q);
    // }else {
    //     return root;
    // }
    
    
    var temp = root;
    //如果输入目标左值大于右值则对调
     if(p.val > q.val) {
        [p, q] = [q, p];
        // let a = p;
        // p = q;
        // q = a;
    }
    while(temp != null){
        //根据搜索树的特性，左值小于根值，右值大于根值，或者左值 or 右值 等于根值的情况下该根值就是公共根
        if(p.val < temp.val && q.val > temp.val || (q.val == temp.val) || (p.val == temp.val)){
            return temp;
            //如果目标左值和右值都小于根值，那么搜索左子树
        }else if(p.val < temp.val && q.val < temp.val){
            temp = temp.left;
            //如果目标左值和右值都大于根值则搜索右子树
        }else {
            temp = temp.right;
        }
    }
};