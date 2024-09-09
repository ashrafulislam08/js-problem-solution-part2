//Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

const h = heights2[0].length
for(const height of heights2) {
  if(height.length < h ) {
    console.log(height)
  }
}