export const CHANGE_FILE="CHANGE_FILE";
export const CHANGE_ROW="CHANGE_ROW";
export const MODIFY_CELL="MODIFY_CELL";
export const MODIFY_ALL="MODIFY_ALL";

export function changeFile(fileURL,fileFormat) {
  return {
    type: CHANGE_FILE,
    fileURL,
    fileFormat
  }
}
export function changeRow(index) {
  return {type: CHANGE_ROW, index};
}
export function modifyCell(rowIndex,cellIndex,text) {
  return {
    type: MODIFY_CELL,
    rowIndex,
    cellIndex,
    text
  }
}
export function modifyAll(lrcText) {
  return {
    type: MODIFY_ALL,
    lrcText
  }
}
