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

  spaceTrimmer(){
    let originalStrLength = this.strToRepair.length;
    let strForExtraSpaces = '';
    let spaces = ' ';
    let dotSign = '.';
    let comaSign = ',';

    for (let i = 0; i < originalStrLength; i++){
      if (this.strToRepair[i] == dotSign ||
         this.strToRepair[i] == comaSign) {
          strForExtraSpaces += this.strToRepair[i] + spaces;
          continue;
      }
      strForExtraSpaces += this.strToRepair[i];
    }

    let strForDeletedSpaces = '';
    let SpacedStrLength = strForExtraSpaces.length

    for (let i = 0; i < SpacedStrLength ; i++){
      if (strForExtraSpaces[i] == spaces &&
         (strForExtraSpaces[i+1] == comaSign ||
          strForExtraSpaces[i+1] == dotSign ||
          strForExtraSpaces[i+1] == spaces)) {
          continue;
      }
      strForDeletedSpaces += strForExtraSpaces[i];
    }
    this.strToRepair = strForDeletedSpaces
    return this.strToRepair;
  }


  // dotComaFrame() {
  //   let strLength = this.strToRepair.length;
  //   let strTemp = '';
  //   let spaces = ' ';
  //   let dotSign = '.';
  //   let comaSign = ',';
  //   for (let i = 0; i < strLength ; i++){
  //     if (this.strToRepair[i] == dotSign ||
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
// console.log(strNew.dotComaFrame())
console.log(strNew.spaceTrimmer())