import axios from "axios"
import {useStyles,Button,DeleteIcon} from "./index"
import {useState} from 'react'

export default function DeleteActualData({id,RerenderActualData})
{
    const baseUrlForActualData = 'http://localhost:25000/api/ActualData/';
    const [ActualDataId, setActualDataId] = useState(id)

    const HandleActualDataDelete = ()=>
    {
        axios.delete(baseUrlForActualData+ActualDataId)
        .then(response=>
            RerenderActualData())
    }

    const classes = useStyles()
    return(
        <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick = {HandleActualDataDelete}
    >
        Удалить
    </Button>
    )
}