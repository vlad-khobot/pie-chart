export const loadingBarData = {
  total: 140,
  used: 60,
  get free() {
    return this.total - this.used;
  },
};
