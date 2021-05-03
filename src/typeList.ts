/* eslint-disable @typescript-eslint/no-unused-vars */

//boolean
let bool: boolean = true;

//number
let num: number = 0;

//string
let str: string = "Y";

//Array
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

//tuple(配列の中身の型)
let tuple: [number, string] = [0, "A"];

// any
let any1: any = false;

//void(関数が何も返さないことを表す)
const funcA = (): void => {
  let test = "Test";
};

//null
let null1: null = null;

//undefined
let undefined1: undefined = undefined;

//object
let obj1: object = {}; //何でも入ってしまう
//オブジェクトのプロパティに型を指定
let obj2: { id: number; name: string } = { id: 1, name: "yuuki" };
