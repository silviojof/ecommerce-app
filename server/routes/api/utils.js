module.exports = (n) => {
    const string = String(n);
    const isFloat = /(\d+)\.(\d+)/.exec(string);
    if (isFloat) {
      return {
        amount: Number(isFloat[1]),
        decimals: isFloat[2],
      }
    } else {
      return {
        amount: n,
        decimals: '00',
      }
    }
};