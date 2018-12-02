// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree
const Stack = require("../stack/index");
let counter = 0;

class Node {
    constructor(data){
        this.isVisited = false,
        this.neighbours = [],
        this.data = data,
        this.startTime,
        this.endTime
	}
	
	toString(){
		console.log(`Data: ${this.data} - Start Time: ${this.startTime} - End Time: ${this.endTime}`)
	}
}

class Tree {
    dfsUsingList(source){
		let nodesAfterDfs = [];
		let dfsStack = new Stack();
		source.startTime = ++counter;
		source.isVisited = true;
		dfsStack.push(source);

		while(!dfsStack.isEmpty()){
			let poppedElement = dfsStack.pop();
			poppedElement.endTime = ++counter;
			nodesAfterDfs.push(poppedElement); 

			let neighbours = poppedElement.neighbours;

			neighbours.forEach(neighbour => {
				if(neighbour && !neighbour.isVisited){
					neighbour.isVisited = true;
					neighbour.startTime = ++counter;
					dfsStack.push(neighbour);
				}
			});
		}
		return nodesAfterDfs;
	}
	
	dfsUsingRecursion(source,nodesAfterDfs = []){
		source.isVisited = true;
		source.endTime = ++counter;
		nodesAfterDfs.push(source);

		let neighbours = source.neighbours;
		neighbours.forEach(neighbour => {
			if(neighbour && !neighbour.isVisited){
				neighbour.startTime = ++counter;
				this.dfsUsingRecursion(neighbour);
			}
		});
		return nodesAfterDfs;
	}
}

function main(){
        let node40 = new Node(40);
		let node10 = new Node(10);
		let node20 = new Node(20);
		let node30 = new Node(30);
		let node60 = new Node(60);
		let node50 = new Node(50);
		let node70 = new Node(70);

		node40.neighbours.push(node10);
		node40.neighbours.push(node20);
		node10.neighbours.push(node30);
		node20.neighbours.push(node10);
		node20.neighbours.push(node30);
		node20.neighbours.push(node60);
		node20.neighbours.push(node50);
		node30.neighbours.push(node60);
		node60.neighbours.push(node70);
		node50.neighbours.push(node70);

		let tree = new Tree();
		/* let nodesAfterDfs = tree.dfsUsingList(node40);
		nodesAfterDfs.forEach(node => node.toString()); */

		let nodesAfterDfs;
		node40.startTime = ++counter;
		nodesAfterDfs = tree.dfsUsingRecursion(node40, nodesAfterDfs);
		nodesAfterDfs.forEach(node => node.toString());
}

main();

module.exports = { Tree, Node };
