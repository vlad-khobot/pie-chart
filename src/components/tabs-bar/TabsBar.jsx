import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const AntTabs = withStyles({
    root: {
        color: "rgba(235, 235, 235, 0.5)",
    },
    indicator: {
        backgroundColor: "#111828",
    },
})(Tabs);

const AntTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        minWidth: 72,
        backgroundColor: "#111828",
        border: "1px solid rgba(46, 53, 69, 0.5)",
        borderRadius: "5.5px 5.5px 0 0",
        fontSize: '14px',
        fontWeight: theme.typography.fontWeightRegular,
        fontFamily: "lato",
        opacity: 1,
        '&:hover': {
            color: 'white',
        },
        '&$selected': {
            color: 'white',
            fontWeight: 'bold',
        },
        '&:focus': {
            color: 'white',
        },

    },
    selected: {
        background: "linear-gradient(rgb(72 72 90), #111828, #111828)",
    },
}))((props) => <Tab disableRipple {...props} />);


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "space-between",
    },
    horyzontalLine: {
        width: "100%",
        height: "4px",
        backgroundColor: "#111828",
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
                    <AntTab label={dashboard} key={dashboard} />
                ))}
                {rightTabs.map(elem => (
                    <AntTab label={elem.label} key={elem.label} />
                ))}

            </AntTabs>
            <div className={classes.horyzontalLine}></div>
        </>
    );
}
