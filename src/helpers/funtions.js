export function getMaxValue(data, field) {
  return Math.max.apply(null, Object.values(data.map(obj => obj[field])));
}
export function getVisibleUsers(data, field) {
  return data
    .filter(obj => obj[field] > 0)
    .map(user => {
      return {
        user: user.name,
        fill: user.fill,
      };
    });
}
export function getUsersSupportStatisticWithoutFill(data) {
  return JSON.parse(JSON.stringify(data))
    .map(obj => {
      delete obj['fill'];
      return obj;
    })
    .filter(
      obj =>
        obj['Updated'] +
          obj['Update available'] +
          obj['Update required'] +
          obj['Out of support'] >
        0,
    );
}
