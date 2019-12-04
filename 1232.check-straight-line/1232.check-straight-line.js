/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    for(let i = 3; i < coordinates.length; i++){
        if((coordinates[1][1]-coordinates[0][1])*(coordinates[i][0]-coordinates[0][0])!=(coordinates[i][1]-coordinates[0][1])*(coordinates[1][0]-coordinates[0][0]))
                return false;
        }
    
    return true;
};

module.exports = checkStraightLine;