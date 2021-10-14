import {SaveIcon,TextField,Button,CloudUploadIcon ,useStyles,} from './index';
import { Link } from '@material-ui/core';

export default function AddLocation(props)
{
const classes = useStyles();
    return(
        <div className={classes.divForAdditionWithManyProps}>
        <TextField 
        className={classes.textField}
        variant="outlined"
        label ="Введите название местоположения"
       />
       <TextField 
        className={classes.textField}
        variant="outlined"
        label ="Введите координату X"
       />
       <TextField 
        className={classes.textField}
        variant="outlined"
        label ="Введите координату Y"
       />
       <div className={classes.ButtonsToOneLine}>
       <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Сохранить
      </Button>
      <Link href="https://yandex.ru/map-constructor/location-tool/" target="_blank">
        <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<CloudUploadIcon  />}
        >
            Сервис
        </Button>
      </Link>
       </div>
        
        </div>
    )
}
