import { IconButton, Input, InputAdornment, makeStyles } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import MyButton from '../../../common/UI/MyButton';
import {ShowPassword, HidePassword} from "./icons"

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
        "& > label": { marginBottom: 8 },
    },
    buttonBlock: {
        display: "flex",
        alignSelf: "flex-end",
        margin: "16px 30px ",
        "& > button": {
            marginLeft: 13,
            "&:last-child": { padding: "0 47px" }
        },
    }, required: { color: "red" }
}));

export default function SetPassword({ handleClose }) {

    const classes = useStyles();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    };
    //console.log("errors", errors);

    //input password
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    
    //input confirm password
    
    const [valuesConfirm, setValuesConfirm] = useState({
        password: '',
    });
    
    const handleChangeConfirm = (prop) => (event) => {
        setValuesConfirm({ ...values, [prop]: event.target.value });
    };
    
    const handleClickShowPassword = () => {
    setValues({
        ...values,
        showPassword: !values.showPassword,
    });
    setValuesConfirm({
        ...valuesConfirm,
        });
    };

    return (

        <div className={classes.root}>

            <div className={classes.header}>Set Password </div>


            <form onSubmit={handleSubmit(onSubmit)}>

                <div className={classes.formPart}>

                    <label htmlFor="password"><span className={classes.required}>*</span>Set Password</label>
                        <Input
                            disableUnderline
                            autoComplete="new-password"
                            id="password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            placeholder="Type"
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {values.showPassword ? <ShowPassword /> : <HidePassword />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            
                        />
                        <label htmlFor="confirm-password"><span className={classes.required}>*</span>Retype Password</label>
                        <Input
                            disableUnderline
                            autoComplete="new-password"
                            id="confirm-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={valuesConfirm.password}
                            placeholder="Type"
                            onChange={handleChangeConfirm('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {values.showPassword ? <ShowPassword /> : <HidePassword />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />



                </div>

                <div className={classes.buttonBlock}>
                    <MyButton onClick={handleClose} buttonStyle="disabled">Cancel</MyButton>
                    <MyButton type="submit" disabled={values.password !== valuesConfirm.password}>Send</MyButton>
                </div>
            </form>

        </div>
    );
}