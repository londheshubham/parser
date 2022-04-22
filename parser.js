var billData = [];
var table = document.getElementsByTagName('table')[4];
var rows = table.rows;
for (var i = 0; i < rows.length; i++) {
    var rowText = rows[i].firstChild.textContent;
    if (~rowText.indexOf('@')) {
        billData.push(rowText);
    }
}
const data = billData[0].split(' ')

const processedData = data.filter(a => a !== '')
arrayData = processedData.map((currVal, index) => [processedData[index], processedData[index + 1]])
const numIndex = [];
processedData.map((val, i) => {

    if (isNaN(parseFloat(val))) {

    }
    else {
        numIndex.push(i)
    }
})

const keyPairs = {}


numIndex.map(i => {
    const key = processedData[i - 2] + ' ' + processedData[i - 1]
    keyPairs[key] = processedData[i];
})

console.log(keyPairs)