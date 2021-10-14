import {useStyles,Button} from './index'

export default function EditActualData()
{
    const classes = useStyles()
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