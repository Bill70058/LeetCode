var RecentCounter = function() {
    this.list = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.list.push(t);
    while(this.list[0] < t-3000){
        this.list.shift();
    }
    return this.list.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
