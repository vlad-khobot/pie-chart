export const pieChartStyles = {
  root: {
    width: 100,
    height: 100,
    maxWidth: 360,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 150,
    zIndex: 1,
    '&::-webkit-scrollbar': {
      width: '0.4em',
    },
    '&::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.5)',
      borderRadius: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      border: '1px solid slategrey',
      borderRadius: '10px',
    },
    paddingRight: 8,
    boxSizing: 'border-box',
  },
  listItem: {
    padding: 0,
  },
  text: {
    fontSize: 9,
    lineHeight: 2,
    color: '#e4e9eb',
    marginLeft: 4,
  },
};
