import { makeStyles } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import MyButton from '../../../common/UI/MyButton';
import { ErrorMessage } from '@hookform/error-message';

const useStyles = makeStyles(() => ({
    paddingTop: {
        paddingTop: 33,
    },
    formPart: {
        display: 'flex',
        alignSelf: "center",
        flexDirection: "column",
        margin: "0px 122px 16px 104px",
        padding: "16px 30px 13px 25px",
        marginBottom: 16,
        backgroundColor: "#EBEBEB",
        borderRadius: "29px",
        "& > input, select": {
            height: 40,
            width: 519,
            boxSizing: "border-box",
            border: "1px solid rgba(46, 53, 69, 0.5)",
            backgroundColor: "white",
            marginBottom: 15,
            borderRadius: 20,
            paddingLeft: 15,
            "&:focus": {
                outline: 'none',
                boxShadow: '0 0 1pt 1pt cornflowerblue',
            }
        },
        "& > label": {fontSize: 14, marginBottom: 8 },
    },
    anotherMail: {
        color: "#1E96FC",
        fontSize: 14,
        fontWeight: "bold",
        alignSelf: "flex-end",
        marginTop: 4,
        marginBottom: 3,
        cursor: 'pointer',
    },
    buttonBlock: {
        display: "flex",
        justifyContent: "flex-end",
        margin: "33px 30px 16px 30px",
        "& > button": {
            height: 36,
            borderRadius: 20,
            marginLeft: 13,
            "&:last-child": { padding: "0 47px" }
        },
    }, required: { color: "red" }
}));

export default function InviteUser({ handleClose }) {

    const classes = useStyles();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        handleClose();
    };
    //console.log("erssssrors", errors);

    const [showOtherMailForm, setOtherMailForm] = useState(false);

    function showMailForm() {
        setOtherMailForm(!showOtherMailForm);
    }

    return (

            <form className={classes.paddingTop} onSubmit={handleSubmit(onSubmit)}>

                <div className={classes.formPart}>

                    <label htmlFor="name"><span className={classes.required}>*</span>Full Name</label>
                    <ErrorMessage errors={errors} name="fullName" render={() => <p style={{ color: "red", fontSize: 14 }}>enter your full name</p>} />
                    <input type="text" id="name" placeholder="Full Name" {...register("fullName", { required: true, pattern: /[A-Za-zА-Яа-яЁё \s]{2}/i })} />

                    <label htmlFor="email"><span className={classes.required}>*</span>Email address</label>
                    <ErrorMessage errors={errors} name="emailAddress" render={() => <p style={{ color: "red", fontSize: 14 }}>enter your email</p>} />
                    <input type="email" id="email" placeholder="Email address" {...register("emailAddress", { required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g })} />

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
                            + Add another email address
                        </div>
                    }
                </div>

                <div className={classes.buttonBlock}>
                    <MyButton onClick={handleClose} buttonStyle="disabled">Cancel</MyButton>
                    <MyButton type="submit">Send</MyButton>
                </div>
            </form>
    );
}