import { Avatar, makeStyles } from '@material-ui/core';
import React from 'react';
import ActiveSwitchTab from './ActiveSwitchTab';
import { ReactComponent as ArrowIcon } from "./arrowIcon.svg";


const useStyles = makeStyles({
    root: {
        backgroundColor: "#F6F8F8",
        borderRadius: '10px',
        padding: "0 20px",
        fontFamily: "Lato",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        lineHeight: "17px",
        "& :first-child": {
            borderTop: "none",
        },
        margin: "0 14px 15px 14px",
    },
    row: {
        display: "flex",
        alignItems: "center",
        borderTop: "1px solid #DADADA",
        height: "65px",
    },
    fieldName: {
        width: '165px',
        "& + div": {
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
        },
    },
    small: {
        width: "25px",
        height: "25px",
        marginRight: "10px",
        fontSize: "1rem",
    },
});


export default function DetailedInformation({ isCompany, email, number, employer, currentOrganization, parentOrganization, jobTitle, country, active, website }) {
    const classes = useStyles();

    let contactsMarkup, businessInfoMarkup;
    if (isCompany) {
        contactsMarkup = <>
            <div className={classes.fieldName}>Website</div>
            <div>{website}</div>
            <ArrowIcon />
        </>;

        businessInfoMarkup = <>

            <div className={classes.row}>
                <div className={classes.fieldName}>Switch Organization</div>
                <div>
                    <Avatar className={classes.small} alt='current organization logo'>
                        {currentOrganization[0]}
                    </Avatar>
                    {currentOrganization}
                </div>
                <ArrowIcon />
            </div>

            <div className={classes.row}>
                <div className={classes.fieldName}>Parent Organization</div>
                <div>
                    <Avatar className={classes.small} alt='parent organization logo'>
                        {parentOrganization[0]}
                    </Avatar>
                    {parentOrganization}
                </div>
                <ArrowIcon />
            </div>
        </>;

    } else {
        contactsMarkup = <>
            <div className={classes.fieldName}>Email</div>
            <div>{email}</div>
            <ArrowIcon />
        </>;

        businessInfoMarkup = <>

            <div className={classes.row}>
                <div className={classes.fieldName}>Organization Name</div>
                <div>
                    <Avatar className={classes.small} alt="employer logo">{employer[0]}</Avatar>
                    {employer}
                </div>
                <ArrowIcon />
            </div>

            <div className={classes.row}>
                <div className={classes.fieldName}>Job Title</div><div>{jobTitle}</div>
                <ArrowIcon />
            </div>
        </>;
    }

    return (
        <>
            <div className={classes.root}>

                <div className={classes.row}>
                    {contactsMarkup}
                </div>

                <div className={classes.row}>
                    <div className={classes.fieldName}>Phone Number</div><div>{number}</div>
                    <ArrowIcon />
                </div>
            </div>

            <div className={classes.root}>

                {businessInfoMarkup}

                <div className={classes.row}>
                    <div className={classes.fieldName}>Country</div>
                    <div>
                        <Avatar className={classes.small} alt="national flag">{country[0]}</Avatar>
                        {country}
                    </div>
                    <ArrowIcon />
                </div>

                <div className={classes.row}>
                    <div className={classes.fieldName}>Active</div>
                    <div><ActiveSwitchTab /></div>
                    <ArrowIcon />
                </div>

            </div>
        </>
    );
}

DetailedInformation.defaultProps = {
    isCompany: false,
    website: "somewebcite.com",
    email: "somemail@mail.com",
    number: "(555)-555-5555",
    employer: "Regular Company inc.",
    currentOrganization: "Cool Company inc.",
    parentOrganization: "Big Company inc.",
    jobTitle: "Marketing Coordinator",
    country: "Germany",
    active: true,
};
