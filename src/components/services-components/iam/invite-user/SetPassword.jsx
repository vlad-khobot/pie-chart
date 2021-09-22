import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { IconButton, Input, InputAdornment, makeStyles } from '@material-ui/core';
import * as yup from "yup";
import MyButton from '../../../common/UI/MyButton';
import { HidePassword, ShowPassword } from './icons';

const useStyles = makeStyles(() => ({
    formPart: {
        display: 'flex',
        flexDirection: "column",
        padding: "27px 30px 7px 25px",
        margin: "49px 122px 72px 104px",
        backgroundColor: "#EBEBEB",
        borderRadius: "29px",
        fontSize: 14, fontFamily: "lato",
        "& .MuiInput-root": {
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
        "& > label": { marginBottom: 8,},
    },
    buttonBlock: {
        display: "flex",
        justifyContent: "flex-end",
        marginRight: 30, marginBottom: 20,
        "& > button": {
            marginLeft: 13,
            height: 36,
            borderRadius: 20,
            display: "flex", justifyContent: "center",
            "&:last-child": { padding: "0 47px" }
        },
    }, required: { color: "red",  margin: 0}
}));

export default function PasswordFormik({ handleClose }) {

    const classes = useStyles();

    const validation = yup.object().shape({
        password: yup.string().typeError("Only string").required("required field"),
        confirmPassword: yup.string()
            .oneOf([yup.ref("password")], "passwords must match")
            .required("required field"),
    });

    const [showPassword, setShowPassword] = useState(false);

    function switchShowPassword() {
        setShowPassword(!showPassword);
    }



    return (
        <Formik
            initialValues={{
                password: "",
                confirmPassword: "",
            }}
            validateOnBlur
            onSubmit={(values) => {
                console.log(values);
                handleClose();
            }}
            validationSchema={validation}
        >

            {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                <Form onSubmit={handleSubmit}>
                    <div className={classes.formPart}>

                        <label htmlFor="password"><span className={classes.required}>*</span>Set Password</label>

                        {touched.password && errors.password && <p className={classes.required}>{errors.password}</p>}

                        <Input disableUnderline
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            autoComplete="on"
                            onChange={handleChange} onBlur={handleBlur}
                            value={values.password}
                            placeholder="Type"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={switchShowPassword}
                                    >
                                        {showPassword ? <ShowPassword /> : <HidePassword />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />

                        <label htmlFor="confirmPassword"><span className={classes.required}>*</span>Retype Password</label>

                        {touched.confirmPassword && errors.confirmPassword && <p className={classes.required}>{errors.confirmPassword}</p>}

                        <Input disableUnderline
                            type={showPassword ? 'text' : 'password'}
                            name="confirmPassword"
                            autoComplete="on"
                            onChange={handleChange} onBlur={handleBlur}
                            value={values.confirmPassword}
                            placeholder="Type"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={switchShowPassword}
                                    >
                                        {showPassword ? <ShowPassword /> : <HidePassword />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />

                    </div>

                    <div className={classes.buttonBlock}>
                        <MyButton buttonStyle="disabled" onClick={handleClose}>Cancel</MyButton>
                        <MyButton type="submit" disabled={!isValid && dirty}>Send    </MyButton>
                    </div>
                </Form>
            )}
        </Formik>
    );
}