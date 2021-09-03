class Node {
    constructor(data,next =null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

//insert the first node
//insert the last  node
//insert at index
//remove at index
//clear list
//print the data

 insertFirst(data) {
    this.head = new Node(data,this.head);
 
}
printListData() {
   let current = this.head;
    while(current){
        console.log(current.data);
        current = current.next;
    }
}
}

const l1 = new LinkedList();
l1.insertFirst(100);
l1.insertFirst(200);
l1.insertFirst(300);
l1.printListData();