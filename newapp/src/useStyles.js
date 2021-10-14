import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        marginLeft:'20px',
        width:'130px',
        height:'40px',
        marginTop:'30px'
    },
    buttonAdd: {
        margin:'10px 0px 20px 0px'
    },
    buttonSelectFromList:{
        margin: theme.spacing(1),
        marginRight:'20px',
        width:'130px',
        height:'40px',
        marginBottom:'20px'
    },
    documentSelectButon:{
        height:'7ch',
        width:'45ch',
        marginLeft:'20px',
        marginTop:'20px',
        marginBottom:'20px'
    },
    textField:{
        height:'8ch',
        width:'40ch',
        marginLeft:'20px',
        marginTop:'20px'
    },
    textFieldForAddition:{
        height:'5ch',
        width:'40ch',
        marginRight:'20px'
    },
    saveButton:{
        margin:'10px 0px 20px 10px', 
        width:'130px',
        height:'40px',
    },
    saveButtonForActualData:{
        margin:'30px 0px 20px 10px', 
        width:'130px',
        height:'40px',
    },
    divForAdditionWithManyProps:{
      marginLeft:'-20px'
    },
    addCommanderDiv:{
        marginLeft:'32px'
    },
    addCommanderRow:{
        margin:'10px 0px 0px 10px'
    },
    header:{
        marginLeft:'60px',
    },
    ButtonsToOneLine:{
        display:'inline-block'
    },

     formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

    
export default useStyles;