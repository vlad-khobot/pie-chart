export const multiFilterStyles ={
    wrapper: {
      width: '313px',
      boxSizing: "border-box",
      borderRadius: "10px",
      border: '1px solid rgba(255, 255, 255, 0.2)',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      display: "flex",
      alignItems: 'center',
      height: "40px",
      "&:hover": {
        border: '1px solid rgba(255, 255, 255, 1)',
      }
    },
    textField: {
      padding: "0 !important",
      "& *": {
        padding: "0 !important",
      },
      "& input": {
        paddingRight: "50px !important",
      }
    },
    filterIconOn: {
      position: "relative",
      top: 2,
      marginLeft: "10px",
      marginRight: "5px",
      color: "#1E96FC",
    },
    filterIconOff: {
      position: "relative",
      top: 2,
      marginLeft: "10px",
      marginRight: "5px",
      color: "rgba(235, 235, 235, 0.5)",
    }
  
  };