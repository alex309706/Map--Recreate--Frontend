import {useStyles,DeleteIcon,Button,React,axios} from './index';
import {useState} from 'react';
//ДОПИСАТЬ
export default function EditCommander()
{
    const classes = useStyles();

    return(
        <Button 
        className={classes.button}
        variant="contained"
        color="primary"
        >
        Изменить
        </Button>
    )
}