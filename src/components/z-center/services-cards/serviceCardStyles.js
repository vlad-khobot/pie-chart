export const serviceCardStyles = {
    root: {
        "& div": {
            display: "flex",
            boxSizing: "border-box",
        },
        display: "flex",
        fontFamily: 'Roboto',
        marginRight: "50px",
        marginTop: "18px",
        alignItems: 'stretch',
        flexDirection: "column",
        boxSizing: "border-box",
        color: "white",
        background: 'linear-gradient(122.62deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.25) 100%)',
        filter: 'drop-shadow(0px 0px 5.21978px rgba(0, 0, 0, 0.15))',
        borderRadius: "4px",
        border: "1px solid rgba(255, 255, 255, 0.6)",

        width: "300px",
        minHeight: "120px",
    },
    activeRoot: {
        justifyContent: "flex-start",
        alignItems: "center",
        background: 'rgba(255, 255, 255, 0.1)',
        boxShadow: '0px 0px 5.21978px rgba(0, 0, 0, 0.15)',
        height: '40px',
        fontWeight: "bold", fontSize: "13px", lineHeight: "16px"
    },

    inactiveRoot:{
        color: "#1E96FC",
        backgroundColor: "white",
        borderRadius: "4px 4px 0 0",
        height: '40px',
        fontWeight: "bold", fontSize: "13px", lineHeight: "16px"
    },
    emptyService:{
        background: 'rgba(30, 150, 252, 1)',
        borderRadius: "4px 4px 0 0",
        height: '40px',
        fontWeight: "bold", fontSize: "13px", lineHeight: "16px"
    },

    titleContent: {
        justifyContent: "flex-start",
        alignItems: "center",
        width: "220px",
        padding: "10px",
        "& span": {
            paddingLeft: "9px",
        }
    },
    titleAmount: {
        margin: "auto",
        fontWeight: 900, fontSize: "24px"
    },
    descriptionRoot: {
        borderTop: "1px solid #65646D",
        flexGrow: 1,
        fontSize: "14px",
    },
    descriptionContent: {
        padding: '10px',
        width: "220px",
    },
    fullDescriptionContent: {
        padding: '10px',
    },
    buttonBlock: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
    },
    button: {
        color: "#BEBEBE",
        fontSize: "12px",
        marginRight: "10px",
        marginLeft: "10px",
        marginBottom: "10px",
        width: "50px",
        height: "20px",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "10px",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    btnActive: {
        backgroundColor: "rgba(30, 150, 252, 0.8)",
        color: "white",
    },
}