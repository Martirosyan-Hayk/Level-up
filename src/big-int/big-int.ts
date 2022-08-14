
namespace types {

    export class BigInt {

        valueInString: string;
        positive: boolean;
        static max = Math.pow(2, 53) - 1;
        static itemMax = 99999;

        constructor();
        constructor(value: number);
        constructor(bigInt: BigInt);
        constructor(stringInteger: string);

        constructor(value?: number | string | BigInt) {
            if (typeof value === "number") {

                this.valueInString = '';

                if (value < 0) {
                    this.positive = false;
                    value *= -1;
                } else {
                    this.positive = true;
                }

                let arrayOfStringValues = value.toString().match(/.{1,5}/g);

                if (arrayOfStringValues) {
                    arrayOfStringValues.forEach(element => {
                        this.valueInString += element;
                    });
                }
            } else if (typeof value === "string") {
                
                this.positive = (value[0] != '-');
                this.valueInString = value.substring(1);
                
            } else if (value instanceof BigInt) {
                this.positive = value.positive;
                this.valueInString = value.valueInString;
            } else {
                this.valueInString = '';
                this.positive = true;
            }
        }
        
        add(lhs: BigInt): BigInt {
            let tmp: BigInt = new BigInt(this);
            tmp.addEqual(lhs);
        
            return tmp;
        }

        addEqual(lhs: BigInt): BigInt {
            // if (!lhs.positive){
            //     this.subEqual(lhs);
            //     return this;
            // }

            let value: string = '';
            let sum = 0;
            let carry = 0;
            let i = this.valueInString.length - 1;
            let j = lhs.valueInString.length - 1;

            while (i >= 0 || j >= 0) {
                if (i >= 0 && j >= 0) {
                    sum = parseInt(this.valueInString[i], 10) + parseInt(lhs.valueInString[j], 10) + carry;
                    carry = 0;
                } else if (i >= 0) {
                    sum = parseInt(this.valueInString[i], 10) + carry;
                    carry = 0;
                } else {
                    sum = parseInt(lhs.valueInString[j], 10) + carry;
                    carry = 0;
                }


                let itemMax = this.getItemMax(sum);
                
                if (sum > itemMax && sum.toString().length >= 2) {
                    carry = 1;
                    for(let k = 0; k < itemMax.toString().length; ++k) {
                        let a =  (sum - (itemMax + 1)).toString();
                        value = (sum - (itemMax + 1)).toString() + value;
                    }
                } else {
                    value = sum.toString() + value;
                }
                --i;
                --j;
            }

            if (carry) {
                value = '1' + value;
            }

            this.valueInString = value;

            return this;
        }

        // // sub(lhs: BigInt): BigInt {}
        // subEqual(lhs: BigInt): BigInt {}

        print(): void {
            if(!this.positive) {
                console.log('-');
            }
            console.log(this.valueInString);
        }

        private getItemMax(value: number): number {
           let length = value.toString().length;
            
           let max: number = 0;
           let maxDigit = 9;
           let multiplyNumber = 1;
           for (let i = 0; i < length - 1; ++i) {
               max += maxDigit * multiplyNumber;
               multiplyNumber *= 10;
           }
            
           return max;
        }

        private toArrayOfNumber(value: string): number[] {

            let array: number[] = [];
            let arrayOfStringValues = value.match(/.{1,5}/g);

            if (arrayOfStringValues && arrayOfStringValues.length > 1) {
                arrayOfStringValues.forEach(element => {
                    array.push(parseInt(element));
                });
            }

            return array;
        }

    }
}

let a = new types.BigInt(100);
let b = new types.BigInt(12);

// a.print();
// b.print();
const c = a.add(b);
a.print()
c.print();