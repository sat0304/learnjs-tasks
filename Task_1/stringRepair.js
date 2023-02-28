'use strict';

const STR = 'The quick, brown .fox ,jumps over.the lazy ,dog.';
const NAMEOFSOMETHING = 'bAlAnErTop'

class Repair_string {

  constructor(strToRepair) {
    this.strToRepair = strToRepair;
  }

  titleString(){
    let firstString = this.strToRepair[0].toUpperCase();
    let secondString = this.strToRepair.toLowerCase();
    this.strToRepair = firstString + secondString.slice(1,);
    return this.strToRepair;
  }

  spaceExtractor(){
    let strLength = this.strToRepair.length;
    let strTemp = '';
    let spaces = ' ';
    let pointSign = '.';
    let comaSign = ',';
    for (let i = 0; i < strLength ; i++){
      if (this.strToRepair[i] == pointSign ||
         this.strToRepair[i] == comaSign) {
          strTemp += this.strToRepair[i] + spaces;
          continue;
      }
      strTemp += this.strToRepair[i];
    }
    let strTemp2 = '';
    for (let i = 0; i < strLength ; i++){
      if (strTemp[i] == spaces &&
         (strTemp[i+1] == comaSign ||
          strTemp[i+1] == pointSign ||
          strTemp[i+1] == spaces)) {
          // strTemp += this.strToRepair[i] + spaces;
          continue;
      }
      strTemp2 += strTemp[i];
    }
    this.strToRepair = strTemp2
    return this.strToRepair;
  }


  // pointComaFrame() {
  //   let strLength = this.strToRepair.length;
  //   let strTemp = '';
  //   let spaces = ' ';
  //   let pointSign = '.';
  //   let comaSign = ',';
  //   for (let i = 0; i < strLength ; i++){
  //     if (this.strToRepair[i] == pointSign ||
  //        this.strToRepair[i] == comaSign) {
  //         strTemp += this.strToRepair[i] + spaces;
  //         continue;
  //     }
  //     strTemp += this.strToRepair[i];
  //   }
  //   this.strToRepair = strTemp
  //   return this.strToRepair;
  // }
  // get strToRepair() {
  //   return this._strToRepair;
  // }

  // set strToRepair(value) {
  //   if (value.length < 4) {
  //     this._strToRepair = "Name is too short!";
  //     return;
  //   }
  //   this._strToRepair = value;
  // }

}

// console.log(stringRepair.spaceExtractor());
let strNew = new Repair_string(NAMEOFSOMETHING);
// console.log(strNew.strToRepair)
console.log(strNew.titleString())
strNew = new Repair_string(STR)
// console.log(strNew.pointComaFrame())
console.log(strNew.spaceExtractor())