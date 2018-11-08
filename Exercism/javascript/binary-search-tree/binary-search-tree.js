export default class BinarySearchTree {
    constructor(root) {
        this.data = root
    }
    insert(num) {
        let iterator = this;
        while (iterator.data) { //go to the next leaf if this leaf is storing data
            if (num <= iterator.data) { //go to the left leaf for <=
                if (!iterator.left) //create a leaf if left leaf does not exist
                    iterator.left = new Object;
                iterator = iterator.left; 
            } else if (num > iterator.data) { //go to the right leaf for >
                if (!iterator.right)
                    iterator.right = new Object; //create a leaf if right leaf does not exist
                iterator = iterator.right;
            }
        }
        iterator.data = num; //store the data to the final leaf
    }
    each(callback, obj = this) {
        //declare a new instance preventing mutating the original class
        let originalObj = {};
        const newObj = new BinarySearchTree(obj)
        if (newObj.data.hasOwnProperty('data'))
        originalObj.data = newObj.data.data
        if (newObj.data.hasOwnProperty('right'))
        originalObj.right = newObj.data.right
        if (newObj.data.hasOwnProperty('left'))
        originalObj.left = newObj.data.left
        
        //loop until the second from left most leaf
        let iterator = originalObj;
        while (iterator.hasOwnProperty('left') && iterator.left.hasOwnProperty('left')) {
            iterator = iterator.left;
        }

        //for leaf with property {data:foo, left:{data: bar}}
        if (iterator.hasOwnProperty('left')) {
            callback(iterator.left.data)
            //for leaf with property {data:foo, left:{data:bar, right:{data: baz}}}
            if (iterator.left.hasOwnProperty('right')) {
                //store the object of 'right' and delete it, then pass it to this method and call it, then recall the whole object with the deleted property
                const rightObj = iterator.left.right;
                delete iterator.left;
                this.each(callback, rightObj);
                this.each(callback, originalObj);
            } else { //for leaf with only property {data: foo}
                //delete the object of 'left' and then recall the whole object with the deleted property
                delete iterator.left;
                this.each(callback, originalObj);
            }
        } else if (iterator.hasOwnProperty('right')) { //for leaf with property {data: foo, right:{data: bar}}
            callback(iterator.data)
            //store the object of 'right' and delete it, then pass it to this method and call it but not recall the whole method since we've already handle it above
            const rightObj = iterator.right;
            delete iterator.right;
            this.each(callback, rightObj);
        } else { //for leaf with only property {data: foo}
            //basically call the data from the root of the tree
            callback(iterator.data);
        }
    }
}