function aVeryBigSum(n, ar) {
    var total = 0;
    
    for (var i = 0; i < n; i ++) {
        total += ar[i];
    }
    return total;
}