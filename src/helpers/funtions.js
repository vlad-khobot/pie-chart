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

export function getVPSAimagesData(data, userName) {
  return data
    .filter(({ name }) => name === userName)
    .map(user => {
      const total =
        user['Updated'] +
        user['Update available'] +
        user['Update required'] +
        user['Out of support'];
      return {
        arr: [
          {
            name: 'Updated',
            value: user['Updated'],
            fill: '#08ad36',
          },
          {
            name: 'Update available',
            value: user['Update available'],
            fill: '#1b7b36',
          },
          {
            name: 'Update required',
            value: user['Update required'],
            fill: '#de7800',
          },
          {
            name: 'Out of support',
            value: user['Out of support'],
            fill: '#e31c1c',
          },
        ],
        total,
      };
    });
}
