import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const MyTabs = withStyles({
    root: {
        marginTop: "20px",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: "15px",
        paddingLeft: "10px",
        height: 30,
        minHeight: 0,
    },
    indicator: {
        display: "none",
    },
})(Tabs);

const MyTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        fontSize: '14px',
        fontFamily: "lato",
        height: "30px",
        fontWeight: '400',
        padding: "6px 20px 6px 20px",
        minWidth: "0",
        color: "#A3AAB6",
        borderRadius: "15px",
        minHeight: 0,

        '&:hover': {
            color: 'white',
        },
        '&:focus': {
            color: 'white',
        },
    },
    selected: {
        color: 'white',
        fontWeight: '700',
        backgroundColor: "#1E96FCCC",
    },
}))((props) => <Tab disableRipple {...props} />);

const tabsTemplate = ["Users", "Roles", "Policies", "Access Keys"];

export default function InventoryBar({inventory = tabsTemplate}) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <MyTabs value={value} onChange={handleChange} aria-label="inventory bar">
                {inventory.map(elem => (
                    <MyTab label={elem} key={elem} />
                ))}
            </MyTabs>
        </>
    );
}