import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const AntTabs = withStyles({
    root: {
        color: "rgba(235, 235, 235, 0.5)",
    },
    indicator: {
        display: "none",
    },
})(Tabs);

const AntTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        fontSize: '14px',
        fontFamily: "lato",
        paddingRight: '25px',
        paddingLeft: '20px',
        marginLeft: '-7px',
        fontWeight: '400',
        opacity: 1,
        overflow: "visible",
        position: "relative",

        '&:hover': {
            color: 'white',
        },
        '&$selected': {
            color: 'white',
            fontWeight: '700',
        },
        '&$selected::before': {
            background: 'linear-gradient(rgb(72 72 90), #111828, #111828)',
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            borderBottom: '0',
        },
        '&:focus': {
            color: 'white',
        },
        '&::before': {
            content: "''",
            position: 'absolute',
            top: 0, right: 0, bottom: 0, left: 0,
            zIndex: '-1',
            background: 'linear-gradient(#111828, #111828)',
            border: '1px solid #1f2737',
            borderBottom: '3px solid #1f2737',
            borderRadius: '10px 10px 0 0',
            transform: 'perspective(10px) rotateX(2deg) scale(1, 1)',
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 7% 100%)',
        },
    },
    selected: {
        
    },
}))((props) => <Tab disableRipple {...props} />);


const useStyles = makeStyles((theme) => ({
    push: {
        marginLeft: "auto",
    },
    horyzontalLine: {
        width: "100%",
        height: "6px",
        backgroundColor: "#111828",
        borderBottom: '1px solid #1f2737',
        boxSizing: 'border-box',
    },

}));

const rightTabsTemplate = [
    { label: "Cost Explorer", link: "#" },
    { label: "iAM", link: "#" }
];


export default function CustomizedTabs({ dashboards, rightTabs = rightTabsTemplate }) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <>
            <AntTabs className={classes.root} value={value} onChange={handleChange} aria-label="dashboard navbar">

                {dashboards.map(dashboard => (

                    <AntTab className={classes.customTab} label={dashboard} key={dashboard} />

                ))}

                {rightTabs.map((elem, index) => (
                    <AntTab className={index === 0 ? classes.push : ''} label={elem.label} key={elem.label} />
                ))}


            </AntTabs>
            <div className={classes.horyzontalLine}></div>
        </>
    );
}
