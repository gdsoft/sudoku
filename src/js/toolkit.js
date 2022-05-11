const matrixToolkit = {
  /*
     * 创建行
     */
  makeRow(v = 0) {
    return new Array(9).fill(v);
  },

  /*
     * 创建九宫格数组
     */
  makeMatrix(v = 0) {
    return Array.from({ length: 9 }, () => this.makeRow(v));
  },

  /*
     * 洗牌算法
     */
  shuffleRow(array) {
    const randomAry = Array.from(
      { length: 9 },
      (_, idx) => ({ random: Math.random(), idx })
    );

    return randomAry.sort(({ random: r1 }, { random: r2 }) => {
      if (r1 == r2) return 0;
      return (r1 > r2) ? 1 : -1;
    })
      .map(({ _, idx }) => array[idx]);
  },
};

module.exports = matrixToolkit;
