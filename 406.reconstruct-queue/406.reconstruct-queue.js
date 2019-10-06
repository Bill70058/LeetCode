/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
        // [7,0], [7,1], [6,1], [5,0], [5,2], [4,4]

        people.sort((a,b)=>{
            return a[0] === b[0]?a[1]-b[1]:b[0]-a[0];
        });


        // 再一个一个插入。
        // [7,0]
        // [7,0], [7,1]
        // [7,0], [6,1], [7,1]
        // [5,0], [7,0], [6,1], [7,1]
        // [5,0], [7,0], [5,2], [6,1], [7,1]
        // [5,0], [7,0], [5,2], [6,1], [4,4], [7,1]
        people.forEach(function(individual,index){
            // console.log(individual,index);
            if(individual[1] < index){
                people.splice(index,1);
                people.splice(individual[1],0,individual);
            }
            //console.log(people);
        });
        
        return people;
};

module.exports = reconstructQueue;

console.log(reconstructQueue([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]));