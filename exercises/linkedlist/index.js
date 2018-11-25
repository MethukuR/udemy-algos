// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    insertFirst(data){
        this.head = new Node(data, this.head);
    }

    size(){
        let size = 0;
        let tempNode = this.head;
        while(tempNode){
            ++size;
            tempNode = tempNode.next;
        }
        return size;
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        if(!this.head){
            return null;
        }
        
        let tempNode = this.head;
        while(tempNode.next){
            tempNode = tempNode.next
        }
        return tempNode;
    }

    clear(){
        this.head = null;
    }

    removeFirst(){
        //empty list
        if(!this.head){
            return;
        }
        let firstNode= this.head;
        this.head = firstNode.next;
        firstNode.next = null;
    }

    removeLast(){
        //empty list
        if(!this.head){
            return;
        }

        //only one element
        if(!this.head.next){
            this.head = null;
            return;
        }

        let tempNode = this.head;
        while(tempNode.next.next){
            tempNode = tempNode.next;
        }
        tempNode.next = null;
    }

     insertLast(data){
        let newNode = new Node(data);

        if(!this.head){
            this.head = newNode;
        }

        let tempNode = this.head;
        while(tempNode.next){
            tempNode = tempNode.next;
        }
        tempNode.next = newNode;
    } 

     getAt(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
          if (counter === index) {
            return node;
          }
    
          counter++;
          node = node.next;
        }
        return null;
      } 

      removeAt(index){
        if(!this.head){
            return;
        }

        if(index === 0){
            this.head = this.head.next;
        }

        let previousNode = this.getAt(index - 1);
        if(previousNode && previousNode.next){
            previousNode.next = previousNode.next.next;
        }
      }

      insertAt(data, index){
          if(!this.head){
              this.head = new Node(data);
              return;
          }

          if(index === 0){
              this.head = new Node(data, this.head.next);
              return;
          }

          let previousNode = this.getAt(index - 1) || this.getLast();
          let tempNode = previousNode.next;
          previousNode.next =  new Node(data, tempNode);
      }
}

module.exports = { Node, LinkedList };
