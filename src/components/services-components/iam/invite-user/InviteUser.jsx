import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import MyButton from '../../../common/UI/MyButton';
import * as yup from "yup";
import { Form, Formik } from 'formik';

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
        "& > label": { fontSize: 14, marginBottom: 8 },
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
    }, required: { color: "red", fontSize: 12 }
}));

export default function InviteUser({ handleClose }) {

    const classes = useStyles();

    const validation = yup.object().shape({
        fullname: yup.string().typeError("only string").required("required field"),
        email: yup.string().email("enter email").required("required field"),
        otherMail: yup.string().email("enter email"),
    });

    const [showOtherMailForm, setOtherMailForm] = useState(false);

    function showMailForm() {
        setOtherMailForm(!showOtherMailForm);
    }

    return (
        <Formik
            initialValues={{
                fullname: "",
                email: "",
                role: "",
                jobTitle: "",
                otherMail: "",
                organization: "",
            }}
            validateOnBlur
            onSubmit={(values) => {
                console.log(values);
                handleClose();
            }}
            validationSchema={validation}
        >
            {({ values, errors, touched, handleChange, handleBlur, isValid, dirty }) => (

                <Form className={classes.paddingTop} >

                    <div className={classes.formPart}>

                        <label htmlFor="fullname"><span className={classes.required}>*</span>Full Name</label>
                        {touched.fullname && errors.fullname && <p className={classes.required}>{errors.fullname}</p>}
                        <input value={values.fullname} onChange={handleChange} onBlur={handleBlur} type="text" name="fullname" placeholder="Full Name" />

                        <label htmlFor="email"><span className={classes.required}>*</span>Email address</label>
                        {touched.email && errors.email && <p className={classes.required}>{errors.email}</p>}
                        <input value={values.email} onChange={handleChange} onBlur={handleBlur} type="email" name="email" placeholder="Email address" />

                    </div>

                    <div className={classes.formPart}>
                        <label htmlFor="role">Role</label>
                        <input value={values.role} onChange={handleChange} type="text" name="role" placeholder="Role" />

                        <label htmlFor="organization">Organization</label>

                        <select value={values.organization} onChange={handleChange} name="organization">
                            <option value=""></option>
                            <option value="Org 1">Org 1</option>
                            <option value="Org 2">Org 2</option>
                            <option value="Org 3">Org 3</option>
                        </select>

                        <label htmlFor="jobTitle">Job Title</label>
                        <input value={values.jobTitle} onChange={handleChange} type="text" name="jobTitle" placeholder="Job Title" />

                        {showOtherMailForm ?
                            <>
                                <label htmlFor="otherMail">Another email address</label>
                                {touched.otherMail && errors.otherMail && <p className={classes.required}>{errors.otherMail}</p>}
                                <input value={values.otherMail} onChange={handleChange} onBlur={handleBlur} type="email" name="otherMail" placeholder="Email address" />
                            </>
                            :
                            <div onClick={showMailForm} className={classes.anotherMail}>
                                + Add another email address
                            </div>
                        }
                    </div>

                    <div className={classes.buttonBlock}>
                        <MyButton onClick={handleClose} buttonStyle="disabled">Cancel</MyButton>
                        <MyButton type="submit" disabled={!isValid && dirty}>Send</MyButton>
                    </div>
                </Form>
            )}
        </Formik>
    );
}