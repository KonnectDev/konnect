import _ from 'lodash';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Select from '@material-ui/core/Select';
import {makeStyles} from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

const useStyles = makeStyles(theme => ({
    root: {},
    formControl: {
        margin: '6px 0',
        width: '100%',
        '&:last-child': {
            marginBottom: 0
        }
    },
    group: {},
    formGroupTitle: {
        position: 'absolute',
        top: -10,
        left: 8,
        fontWeight: 600,
        padding: '0 4px',
        backgroundColor: theme.palette.background.paper
    },
    formGroup: {
        position: 'relative',
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: 2,
        padding: '12px 12px 0 12px',
        margin: '24px 0 16px 0',
        '&:first-of-type': {
            marginTop: 16
        }
    }
}));

function Settings(props) {

    const classes = useStyles(props);


    const DirectionSelect = () => (
        <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend" className="text-14">
                Direction
            </FormLabel>
            <RadioGroup>
                <FormControlLabel key="rtl" value="rtl" control={<Radio/>} label="RTL"/>
                <FormControlLabel key="ltr" value="ltr" control={<Radio/>} label="LTR"/>
            </RadioGroup>
        </FormControl>
    );

    const getForm = (form, prefix) =>
        Object.entries(form).map(([key, formControl]) => {
            const target = prefix ? `${prefix}.${key}` : key;
            switch (formControl.type) {
                case 'radio': {
                    return (
                        <FormControl key={target} component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend" className="text-14">
                                {formControl.title}
                            </FormLabel>
                            <RadioGroup
                            >
                                {formControl.options.map(opt => (
                                    <FormControlLabel
                                        key={opt.value}
                                        value={opt.value}
                                        control={<Radio/>}
                                        label={opt.name}
                                    />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    );
                }
                case 'switch': {
                    return (
                        <FormControl key={target} component="fieldset" className={classes.formControl}>
                            <FormControlLabel
                                classes={
                                    {
                                        // root: "flex-row-reverse justify-end pl-16"
                                    }
                                }
                                label={
                                    <FormLabel component="legend" className="text-14">
                                        {formControl.title}
                                    </FormLabel>
                                }
                            />
                        </FormControl>
                    );
                }
                case 'group': {
                    return (
                        <div key={target} className={classes.formGroup}>
                            <Typography className={classes.formGroupTitle} color="textSecondary">
                                {formControl.title}
                            </Typography>

                            {getForm(formControl.children, key)}
                        </div>
                    );
                }
                default: {
                    return '';
                }
            }
        });


    return (
        <div className={classes.root}>
            <div>hoi</div>
        </div>
    );
}

export default Settings;
