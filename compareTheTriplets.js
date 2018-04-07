function solve(a0, a1, a2, b0, b1, b2) {
    var alice = [a0, a1, a2];
    var bob = [b0, b1, b2];
    var bob_score = 0;
    var alice_score = 0;
    var result = [];
    
    for (var i = 0; i < bob.length; i++) {
        if(bob[i] > alice[i])
            bob_score++;
        else if (bob[i] < alice[i])
            alice_score++;
    }
    result.push(alice_score);
    result.push(bob_score);
    return result;
}