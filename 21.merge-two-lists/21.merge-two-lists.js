
/**
 * 
 * @param {当前元素的值} element 
 * 链接 - https://juejin.im/entry/59cb70995188256aa423b680
 */

//节点
function Node(element) {
    this.element = element;   //当前节点的元素
    this.next = null;         //下一个节点链接
    // console.log(element,this.element);
}

//链表类
function LList () {
    this.head = new Node( 'head' );     //头节点
    this.find = find;                   //查找节点
    this.insert = insert;               //插入节点
    this.remove = remove;               //删除节点
    this.findPrev = findPrev;           //查找前一个节点
    this.display = display;             //显示链表
}

//查找给定节点

function find ( item ) {
    var currNode = this.head;
    while ( currNode.element != item ){
        currNode = currNode.next;
    }
    // console.log('---------------------find--------------------');
    return currNode;
}

//插入节点

function insert ( newElement , item ) {
    var newNode = new Node( newElement );
    var currNode = this.find( item );
    newNode.next = currNode.next;
    currNode.next = newNode;
    // console.log('---------------------insert--------------------');
    // console.log(currNode.element);
}

//显示链表元素

function display () {
    var currNode = this.head;
    while ( !(currNode.next == null) ){
        console.log( currNode.next.element );
        currNode = currNode.next;
    }
    console.log('---------------------display--------------------');
}

function dis (list) {
    var currNode = list.head;
    while ( !(currNode.next == null) ){
        console.log( currNode.next.element );
        currNode = currNode.next;
    }
    // console.log('---------------------display--------------------');
}

//查找带删除节点的前一个节点

function findPrev( item ) {
    var currNode = this.head;
    while ( !( currNode.next == null) && ( currNode.next.element != item )){
        currNode = currNode.next;
    }
    return currNode;
}

//删除节点

function remove ( item ) {
    var prevNode = this.findPrev( item );
    if( !( prevNode.next == null ) ){
        prevNode.next = prevNode.next.next;
    }
}



var l1 = new LList();
l1.insert(1,'head');
l1.insert(2,1);
l1.insert(4,2);
// l1.display();
// console.log(l1.head.next.element);


var l2 = new LList();
l2.insert(1,'head');
l2.insert(1,1);
l2.insert(2,1);
// l2.display();

function mergeLinkedList (list1, list2) {
    // 存放两个链表key的数组
    var array = [];
    // 最终需要返回的新链表
    var list = new LList();
    // 第一个链表的头节点
    var listHead1 = list1.head;
    // 第二个链表的头节点
    var listHead2 = list2.head;

    // 把第一个链表的所有key存进数组
    while (listHead1) {
        array.push(listHead1.element);
        listHead1 = listHead1.next;
    }
    // 把第二个链表的所有key存进数组
    while (listHead2) {
        array.push(listHead2.element);
        listHead2 = listHead2.next;
    }
    对数组排序
    array = array.sort(function(a, b){
        return a - b;
    })

    // for(let i = 0; i < array.length-1; i++){
    //     for(let j = 0; j < array.length-i-1; j++){
    //         if(array[j]>array[j+1]){
    //             let temp = array[j];
    //             array[j] = array[j+1];
    //             array[j+1] = temp;
    //         }
    //     }
    // }

    list.insert(array[0],'head');
    for(let i = 1; i < array.length; i++){
        list.insert(array[i],array[i-1]);
    }
    // 使用数组重新构建一个链表
    // array.forEach(function(key){
    //     list.insert(key);
    // });

    return list;
}


var list = mergeLinkedList(l1,l2);
dis(list);
