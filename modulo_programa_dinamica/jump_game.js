var canJump = function (grid) {
    let memo = new Array(grid.length).fill(-1); // -1 for UNKNOWN
    memo[memo.length - 1] = 1; // 1 for GOOD

    const canJumpFromPosition = (position) => {
        if (memo[position] !== -1) {
            return memo[position] === 1;
        }

        let furthestJump = Math.min(position + grid[position], grid.length - 1);
        for (let nextPosition = position + 1; nextPosition <= furthestJump; nextPosition++) {
            if (canJumpFromPosition(nextPosition)) {
                memo[position] = 1; // 1 for GOOD
                return true;
            }
        }

        memo[position] = 0; // 0 for BAD
        return false;
    };

    return canJumpFromPosition(0);
}

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
