import {useStyles,DeleteIcon,Button,React,axios} from './index';
import {useState} from 'react';

export default function DeleteCommander({id})
{
    const [CommanderId, setCommanderId] = useState(id)
    const baseUrl = 'http://localhost:25000/api/Commanders/'
    
    const HandleDelete = ()=>
    {
            axios.delete(baseUrl+CommanderId)
                .then(response=>
                {
                    console.log(response)
                    console.log(response.data)
                })
    }
    const classes = useStyles();
    return(
        <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick={HandleDelete}
    >
        Удалить
    </Button>
    )
}