class BitVector {
    constructor(bitSize) {
        var BIT = 32;
        this.size = bitSize;
    
        let elementCount = Math.ceil(bitSize / BIT);
    
        this.vector = new Array(elementCount);
    
        for (let i = 0; i < elementCount; i++) {
            this.vector[i] = 0;
        }
    }


    set(bitIndex) {
        this.checkPassedIndex(bitIndex);
        this.vector |= (1 << bitIndex);
    }
    get(bitIndex) {
        this.checkPassedIndex(bitIndex);
        let value = this.vector & (1 << bitIndex);

        return value != 0;
    }
    clear(bitIndex) {
        this.checkPassedIndex(bitIndex);
        this.vector &= ~(1 << bitIndex);
    }

    clearAll() {
        for (let i = 0; i < elementCount; i++) {
            this.vector[i] = 0;
        }
    }

    getSize() {
        return this.size;
    }

    checkPassedIndex(index) {
        if (index > this.size) {
            throw new Error("Index out of bounds");
        }
    }
    
}

let vector = new BitVector(100);
console.log(vector.get(90));
vector.set(90);
console.log(vector.get(90));
vector.clear(90);
console.log(vector.get(90));
vector.set(1000);
console.log(vector.get(1000));