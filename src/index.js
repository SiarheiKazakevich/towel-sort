// You should implement your task here.

module.exports = function towelSort(matrix) {
    //return [];
    if (!matrix || matrix.length === 0) return [];

    return matrix.reduce((acc, curr, i) => {
        return acc.concat(i % 2 === 0 ? curr : curr.reverse());
    }, []);
};
