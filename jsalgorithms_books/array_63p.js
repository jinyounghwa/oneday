var averageTempDay1 = [72,75,79,81,81];
var averageTempDay2 = [81,79,75,73,72];

var averageTemp = [];
averageTemp[0] = [72,75,79,79,81,81];
averageTemp[1] = [81,79,75,75,73,72];

// function printMatrix(myMatrix) {
//     for (var i = 0; i<myMatrix.length; i++) {
//         for (var j =0; j < myMatrix[i].length; j++) {
//             console.log(myMatrix[i][j]);
//         }
//     }
// }

var matrix3x3 = [];
for (var i =0; i < 3; i++){
    matrix3x3[i] = [];
    for (var j=0; j < 3; j ++){
        matrix3x3[i][j] = [];
        for (var z=0; z<3; z++) {
            matrix3x3[i][j][z] = i + j + z;
        }
    }
}

for (var i =0; i <matrix3x3.length; i++){
    for (var j=0; j<matrix3x3[i].length; j++){
        for(var z=0; z<matrix3x3[i][j];z++){
            console.log(matrix3x3[i][j][z]);
        }
    }
}