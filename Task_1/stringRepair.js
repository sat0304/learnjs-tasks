'use strict';

const STR = 'The quick, brown .fox ,jumps over.the lazy ,dog.';
const NAMEOFSOMETHING = 'bAlAnErTop';
const RUSTR = 'Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно . ';

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
    let spacedStrLength = strForExtraSpaces.length

    for (let i = 0; i < spacedStrLength ; i++){
      if (strForExtraSpaces[i] == spaces &&
         (strForExtraSpaces[i+1] == comaSign ||
          strForExtraSpaces[i+1] == dotSign ||
          strForExtraSpaces[i+1] == spaces)) {
          continue;
      }
      strForDeletedSpaces += strForExtraSpaces[i];
    }
    this.strToRepair = strForDeletedSpaces.slice(0,-1)
    return this.strToRepair;
  }

  wordCounterInString(){
    let counterWords = 0;
    let originalStrLength = this.strToRepair.length;
    let spaces = ' ';

    if (this.strToRepair.length != spaces) counterWords = 1;

    for (let i = 0; i < originalStrLength; i++){
      if (this.strToRepair[i] == spaces) counterWords += 1;
      }
    // console.log(this.strToRepair[originalStrLength-1])
    return counterWords;
    }

    
    
}

let strNew = new Repair_string(NAMEOFSOMETHING);
console.log(strNew.titleString())
console.log(strNew.wordCounterInString())

strNew = new Repair_string(STR)
console.log(strNew.spaceTrimmer())
console.log(strNew.wordCounterInString())

strNew = new Repair_string(RUSTR)
console.log(strNew.spaceTrimmer())
console.log(strNew.wordCounterInString())