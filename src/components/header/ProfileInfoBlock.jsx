import { Avatar} from "@material-ui/core";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    small: {
        width: "25px",
        height: "25px",
        marginLeft: "15px",
        fontSize: "1rem",
    },
    profileInfo: {
        display: 'flex',
        boxSizing: 'border-box',
        alignItems: 'center',
        paddingLeft: '25px',
        paddingRight: '24px',
        color: "rgba(235, 235, 235, 0.5)",
    },
}));

const ProfileInfoBlock = ({ profile }) => {


    let carvedName = profile.name.length > 50 ? profile.name.substr(0, 50) + "...": profile.name;
 
    const classes = useStyles();

    return (
            <div className={classes.profileInfo}>

                <span className={"crop-text"}>
                    {carvedName}
                </span>
                <Avatar className={classes.small} alt={profile.name} src={profile.avatarLink}>{profile.name[0].toUpperCase()}</Avatar>

            </div>
    );
};

export default ProfileInfoBlock;