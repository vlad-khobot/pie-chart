import {makeStyles } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { ReactComponent as CloseIcon } from './closeIcon.svg';
import MyButton from '../../../common/UI/MyButton';

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        backgroundColor: "white",
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        fontFamily: "Lato",
        fontSize: 16,
        width: 800,
        "& form": {
            display: "flex",
            flexDirection: "column",
            paddingTop: 33,
        }
    },
    header: {
        display: "flex",
        alignItems: "center",
        position: "relative",
        height: 54,
        paddingLeft: 21,
        color: "white",
        fontSize: 24,
        lineHeight: "29px",
        backgroundColor: "#111828",
        "& > svg": { position: "absolute", right: 9, top: 8, }
    },
    formPart: {
        display: 'flex',
        alignSelf: "center",
        flexDirection: "column",
        padding: "16px 30px 7px 25px",
        marginBottom: 16,
        backgroundColor: "#EBEBEB",
        borderRadius: "29px",
        "& > input, select": {
            height: 40,
            width: 519,
            boxSizing: "border-box",
            border: "1px solid rgba(46, 53, 69, 0.5)",
            backgroundColor: "white",
            marginBottom: 20,
            borderRadius: 20,
            paddingLeft: 15,
            "&:focus": {
                outline: 'none',
                boxShadow: '0 0 1pt 1pt cornflowerblue',
            }
        },
        "& > label": { marginBottom: 8 },
    },
    anotherMail: {
        color: "#1E96FC",
        fontSize: 16,
        fontWeight: "bold",
        alignSelf: "flex-end",
        marginBottom: 8,
        cursor: 'pointer',
    },
    buttonBlock: {
        display: "flex",
        alignSelf: "flex-end",
        margin: "16px 30px ",
        "& > button": {
            marginLeft: 13,
            "&:last-child": { padding: "0 47px" }
        },
    },
}));

export default function InviteUser({handleClose}) {

    const classes = useStyles();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        handleClose();
    };
    //console.log(errors);

    const [showOtherMailForm, setOtherMailForm] = useState(false);

    function showMailForm() {
        setOtherMailForm(!showOtherMailForm);
    }

    return (

        <div className={classes.root}>

            <div className={classes.header}>Invite User <CloseIcon onClick={handleClose}/></div>


            <form onSubmit={handleSubmit(onSubmit)}>

                <div className={classes.formPart}>
                    <label htmlFor="name">*Full Name</label>
                    <input type="text" id="name" placeholder="Full Name" {...register("Full name", { required: true, pattern: /[A-Za-zА-Яа-яЁё]{4,}/i })} />

                    <label htmlFor="email">*Email address</label>
                    <input type="email" id="email" placeholder="Email address" {...register("email address", { required: true })} />
                </div>

                <div className={classes.formPart}>
                    <label htmlFor="role">Role</label>
                    <input type="text" id="role" placeholder="Role" {...register("Role", {})} />

                    <label htmlFor="organization">Organization</label>

                    <select id="organization" {...register("Organization", {})}>
                        <option value=""></option>
                        <option value="Org 1">Org 1</option>
                        <option value="Org 2">Org 2</option>
                        <option value="Org 3">Org 3</option>
                    </select>

                    <label htmlFor="job_title">Job Title</label>
                    <input type="text" id="job_title" placeholder="Job Title" {...register("Job Title", {})} />

                    {showOtherMailForm ?
                        <>
                            <label htmlFor="otherMail">Another email address</label>
                            <input type="email" id="otherMail" placeholder="Email address" {...register("other email")} />
                        </>
                        :
                        <div onClick={showMailForm} className={classes.anotherMail}>
                            + Add another email address</div>
                    }
                </div>

                <div className={classes.buttonBlock}>
                    <MyButton onClick={handleClose} buttonStyle="disabled">Cancel</MyButton>
                    <MyButton type="submit">Send</MyButton>
                </div>
            </form>

        </div>
    );
}