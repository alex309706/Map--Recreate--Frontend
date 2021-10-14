import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme=>
  (
    {
      div:{
        textAlign:"right",
        margin:"20px",
        marginRight:"100px"
      },
      button:{
       width:"120px",
       marginLeft:"30px"
      }
    }
  ))

export default function ProfileButton() {
  const classes = useStyles();

  return (
    <div className={classes.div}>
      <PopupState  variant="popover"  >
            {(popupState) => (
              <React.Fragment>
                <Button className = {classes.button} variant="contained" color="default" {...bindTrigger(popupState)}>
                  Alex
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>Перейти к настройкам профиля</MenuItem>
                  <MenuItem onClick={popupState.close}>Выйти </MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
        
    </div>
  );
}