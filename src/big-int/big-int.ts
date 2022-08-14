
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
            if (!lhs.positive){
                this.subEqual(lhs);
                return this;
            }

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

        sub(lhs: BigInt): BigInt {
            let tmp: BigInt = new BigInt(this);
            tmp.subEqual(lhs);
        
            return tmp;
        }

        subEqual(lhs: BigInt) {
            let bigger: BigInt = this;
            let smaller: BigInt = lhs;

            if (this.valueInString.length === lhs.valueInString.length) {
                if (!this.positive && lhs.positive) {
                    bigger = lhs;
                    smaller = this;
                } else if (this.positive && lhs.positive) {
                    if (parseInt(this.valueInString[0], 10) < parseInt(lhs.valueInString[0], 10)) {
                        bigger = lhs;
                        smaller = this;
                    }
                } else if (!this.positive && !lhs.positive) {
                    if (parseInt(this.valueInString[0], 10) < parseInt(lhs.valueInString[0], 10)) {
                        bigger = lhs;
                        smaller = this;
                    }
                }
            } else if (this.valueInString.length < lhs.valueInString.length && lhs.positive) {
                bigger = lhs;
                smaller = this;
            }

            let value: string = '';
            let biggerIndex = bigger.valueInString.length - 1;
            let smallerIndex = smaller.valueInString.length - 1;

            while (biggerIndex >= 0 && smallerIndex >= 0) {
                let biggerValue = parseInt(bigger.valueInString[biggerIndex], 10);
                let smallerValue = parseInt(smaller.valueInString[smallerIndex], 10);
                if(biggerValue < smallerValue) {
                    let count = 0;
                    let i = biggerIndex - 1;
                    while (i >= 0) {
                        if (bigger.valueInString[i] === '0') {
                            ++count;
                        } else {
                            ++count;
                            break;
                        }
                        --i;
                    }
                    let tmp = parseInt(this.valueInString[biggerIndex - count], 10);
                    
                        let tmpValue = '';
                        for (let i = 0; i <  bigger.valueInString.length; ++i) {
                            if (i != biggerIndex - count) {
                                tmpValue += bigger.valueInString[i];
                            } else {
                                tmp -= 1;
                                if (tmp && i != 0) {
                                    tmpValue += tmp.toString();
                                }
                                ++i;
                                while(count > 0) {
                                    let tmp2 = parseInt(this.valueInString[i], 10);
                                    tmpValue += tmp2 ? (tmp2 - 1).toString() : '9';
                                    --count;
                                    ++i;
                                }
                            }
                        }
                        value += tmpValue.split('').reverse().join('');
                        --biggerIndex;
                        --smallerIndex;
                } else {
                    value += (biggerValue - smallerValue).toString();
                    --biggerIndex;
                    --smallerIndex;
                }
            }

            while(biggerIndex >= 0 || smallerIndex >= 0) {
                if (biggerIndex >= 0) {
                    value += bigger.valueInString[biggerIndex--];
                } else {
                    value += smaller.valueInString[smallerIndex--];
                }
            }


            this.valueInString = value.split('').reverse().join('');

            return this;
        }

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

    }
}

let a = new types.BigInt(99);
let b = new types.BigInt(11);

a.print();
b.print();
const c = a.sub(b);
a.subEqual(b)
a.print();
c.print();