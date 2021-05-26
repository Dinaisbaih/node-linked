const prompt = require('prompt-sync')({sigint: true});
class Node {
    constructor(year, highlight, nextNode) {
        this.year = year;
        this.highlight = highlight;
        this.nextNode = nextNode;
    }
}


class LinkedList {
    constructor(year, highlight) {
        this.head = new Node(year, highlight);
 }
insertBegining = (year, highlight) => {
    const node = new Node(year, highlight, this.head);
    this.head = node;
 };



getLinkedList = () => {
    let current = this.head
    while(current){
        console.log(`age: ${current.year}, highlight: ${current.highlight}`)
        current = current.nextNode;
    }
}
insertHighLight = (year) => {
    let current = this.head;
    while(current.year < year){
        let currentYear = current.year + 1;
        if (current.nextNode && current.nextNode.year === currentYear){
            current = current.nextNode;
        }else{
            let highlight = prompt(`Enter highlight for age: ${currentYear}`);
            let newNode = new Node(currentYear, highlight, current.nextNode);
            current.nextNode = newNode;
            current = newNode;
         }
      } 
   }
}
const yearList = new LinkedList(7, "I turned seven");
yearList.insertBegining(3, "I started walking");
yearList.insertBegining(1, "i was born");

let year = prompt(" age: ");
yearList.insertHighLight(year);
yearList.getLinkedList();



