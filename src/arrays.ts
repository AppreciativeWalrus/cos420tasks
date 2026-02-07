/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if(numbers.length == 0) return [];
    let outs: number[] = [numbers[0],numbers[numbers.length-1]];
    return outs;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((x:number)=> 3*x);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    
    return numbers.map((x:string)=> parseInt(x)).map((x:number)=> (isNaN(x))?0:x);
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let tmp: string[] = amounts.map((x:string)=>x.indexOf('$')==0?x.substring(1):x);
    return stringsToIntegers(tmp);
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let tmp:string[] = messages.map((x:string)=>(x.endsWith('!'))?x.toUpperCase():x).filter((x:string):boolean => !(x.endsWith('?')));
    
    return tmp;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.filter((x:string):boolean=>x.length<4).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    
    return colors.length == colors.filter((x:string):boolean => ["red", "blue", "green"].includes(x)).length;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let tmp:number[] = [...addends];
    if(tmp.length == 0) tmp.splice(0,0,0);
    let out:string = tmp.reduce((out:string, x:number)=>out += x + "+", "");
    let sum:number = tmp.reduce((sum:number, x:number)=>sum += x, 0);
    return sum +"="+ out.substring(0,out.length-1);
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let tmp:number[] = [...values]; // copy to alter
    let first:number = tmp.findIndex((x:number)=>x<0); //first negative
    if(first == -1) first = tmp.length-1; //If no negative, point to last index. Has to be -1 because splice has to be +1.
    let sum:number = tmp.slice(0,first+1).reduce((sum:number, x:number)=>sum+=(x>0)?x:0, 0); //count up until the first negative. First +1 to be safe in No Negative case.
    
    tmp.splice(first+1,0,sum); //We want it to be AFTER the negative. So +1 to index.

    return tmp;
}
