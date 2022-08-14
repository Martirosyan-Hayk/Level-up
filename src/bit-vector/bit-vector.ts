class BitVector {
    bitSize: number;
    vector: number[];
    elementCount: number;  
    static BIT = 32;
    constructor(bitSize: number) {
        this.bitSize = bitSize;
    
        this.elementCount = Math.ceil(bitSize / BitVector.BIT);
    
        this.vector = new Array(this.elementCount);
    
        for (let i = 0; i < this.elementCount; i++) {
            this.vector[i] = 0;
        }
    }


    set(bitIndex: number) {
        this.checkPassedIndex(bitIndex);
        this.vector[this.getElementIndex(bitIndex)] |= (1 << bitIndex);
    }
    get(bitIndex: number) {
        this.checkPassedIndex(bitIndex);
        let value = this.vector[this.getElementIndex(bitIndex)] & (1 << bitIndex);

        return value != 0;
    }
    clear(bitIndex: number) {
        this.checkPassedIndex(bitIndex);
        this.vector[this.getElementIndex(bitIndex)] &= ~(1 << bitIndex);
    }

    clearAll() {
        for (let i = 0; i < this.elementCount; i++) {
            this.vector[i] = 0;
        }
    }

    getSize() {
        return this.bitSize;
    }

    private checkPassedIndex(index: number) {
        if (index > this.bitSize) {
            throw new Error("Index out of bounds");
        }
    }

    private getElementIndex(index: number) {
        return Math.floor(index / BitVector.BIT);
    }
}

let bitVector: BitVector = new BitVector(100);
console.log(bitVector.get(90));
bitVector.set(90);
console.log(bitVector.get(90));
bitVector.clear(90);
console.log(bitVector.get(90));
bitVector.set(1);
console.log(bitVector.get(1));
console.log(bitVector.get(1000));