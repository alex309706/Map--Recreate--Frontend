import {SaveIcon,TextField,Button ,useStyles,React,Menu,MenuItem} from './index';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import {Link} from 'react-router-dom';


export default function AddSubdivision(props)
{
const classes = useStyles();
    return(
        <div >

        <TextField 
        className={classes.textFieldForAddition}
        variant="outlined"
        label ="Введите название подразделения"
       />
        <TextField 
        className={classes.textFieldForAddition}
        variant="outlined"
        label ="Введите численность подразделения"
       />
        <TextField 
        className={classes.textFieldForAddition}
        variant="outlined"
        label ="Введите состав подразделения"
       />
       <div className={classes.ButtonsToOneLine} >
       <PopupState variant="popover" >
        {(popupState) => (
            <React.Fragment>
            <Button variant="contained" color="secondary" className={classes.buttonSelectFromList} {...bindTrigger(popupState)}>
                Выбрать командующего
            </Button>
            <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.close}>Иванов И.И.</MenuItem>
                <MenuItem onClick={popupState.close}>Петров П.П.</MenuItem>
                <MenuItem onClick={popupState.close}>Сидоров С.С.</MenuItem>
                <Link to='/listOfCommanders'>
                    <MenuItem onClick={popupState.close}>Добавить командующего</MenuItem>
                </Link>
            </Menu>
            </React.Fragment>
        )}
        </PopupState>
        <PopupState variant="popover" >
        {(popupState) => (
            <React.Fragment>
            <Button variant="contained" color="secondary" className={classes.buttonSelectFromList} {...bindTrigger(popupState)}>
                Выбрать тип подразделения
            </Button>
            <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.close}>Армия</MenuItem>
                <MenuItem onClick={popupState.close}>Корпус</MenuItem>
                <MenuItem onClick={popupState.close}>Дивизия</MenuItem>
                <Link to='/listOfTypesSubdivisions'>
                    <MenuItem onClick={popupState.close}>Добавить тип подразделения</MenuItem>
                </Link>
            </Menu>
            </React.Fragment>
        )}
        </PopupState>
        <Button
        variant="contained"
        color="primary"
        className={classes.saveButton}
        startIcon={<SaveIcon />}
      >
        Сохранить
      </Button>
       </div>
       </div>

    )
}
