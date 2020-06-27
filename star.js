for (let i = 1; i <= 5; i++){
    console.log('*'.repeat(i))
}
/* 
*
**
***
****
*****
*/

for (let i = 5; i >= 1; i--) {
    console.log('*'.repeat(i))
}

/* 
*****
****
***
**
*
*/

for (let i = 10; i >= 2; i -= 2) {
    console.log('*'.repeat(i))
}
/* 
**********
********
******
****
**
*/

for (let i = 1; i <= 16; i *= 2) {
    console.log('*'.repeat(i))
}

for (let i = 5; i >= 1; i--) {
    console.log(' '.repeat(5 - i) + '*'.repeat(i))
}
/* 
*****
 ****
  ***
   **
    *
*/

for (let i = 9; i>=1; i -= 2) {
    console.log(' '.repeat((9 - i) / 2) + '*'.repeat(i));
}
/* 
*********
 *******
  *****
   ***
    *
*/

// 0부터 시작할 경우
for (let i = 0; i < 5; i++) {
    console.log('*'.repeat(i + 1))
}


for (let i = 1; i <= 3; i++) {
    console.log(' '.repeat(3 - i) + '*'.repeat(i * 2 - 1))
}
for (let i = 2; i > 0; i--) {
    console.log(' '.repeat(3 - i) + '*'.repeat(i * 2 - 1))
}
/* 
  *
 ***
*****
 ***
  *
*/