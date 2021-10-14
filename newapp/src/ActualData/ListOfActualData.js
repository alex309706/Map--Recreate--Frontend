import React,{useState,useEffect} from 'react';
import {useStyles ,ProfileButton,TextField,Button,AddActualData,axios,Box,DeleteActualData,EditActualData} from './index';
import { Link } from 'react-router-dom';

const defaultProps = {
    bgcolor: 'background.paper',
    m: 4,
    border: 1,
    borderRadius:16
  };
function GetActualDataAsComponent({date,subdivision,location,document,id,RerenderActualData,documentPage})
{
    console.log(document)
    const CustomDate = new Date(date)

    // +1 к месяцу костыль

    const stringDate = `${CustomDate.getDate()}.${CustomDate.getMonth()+1}.${CustomDate.getFullYear()}`

    const classes = useStyles();
    return(
        <Box {...defaultProps}> 
            <div >
            <TextField defaultValue={stringDate}
             className={classes.textField}
             variant="outlined"
             label ="Дата"
             InputProps={{
                readOnly: true,
              }}
             />
             
            <TextField defaultValue={subdivision.name}
             className={classes.textField}
             variant="outlined"
             label ="Название подразделения"
             InputProps={{
                readOnly: true,
              }}
             />
            <TextField 
            defaultValue={`${subdivision.commander.rank.name} ${subdivision.commander.lastName? subdivision.commander.lastName+" " : ''}${subdivision.commander.firstName?  subdivision.commander.firstName+". " : ''} ${subdivision.commander.patronymic? subdivision.commander.patronymic +". " : ''}`} 
             className={classes.textField}
             variant="outlined"
             label ="Командир"
             InputProps={{
                readOnly: true,
              }}
             />
             <TextField defaultValue={subdivision.strength}
             className={classes.textField}
             variant="outlined"
             label ="Численность"
             InputProps={{
                readOnly: true,
              }}
             />
             <TextField defaultValue={location.name}
             className={classes.textField}
             variant="outlined"
             label ="Местоположение"
             InputProps={{
                readOnly: true,
              }}
             />
              <TextField defaultValue={document.name}
             className={classes.textField}
             variant="outlined"
             label ="Документ"
             InputProps={{
                readOnly: true,
              }}
             />
               <TextField defaultValue={documentPage}
             className={classes.textField}
             variant="outlined"
             label ="Страница документа"
             InputProps={{
                readOnly: true,
              }}
             />
             <a target="blank" href={`${document.url}`}> 
               <Button 
                className={classes.button}
                variant="contained"
                color="primary"
                >
                Ссылка на документ
                </Button>
               </a>
             <div className={classes.ButtonsToOneLine}>
                <EditActualData/>
                <DeleteActualData id = {id}  RerenderActualData={RerenderActualData} />
             </div>
            </div>
        </Box>
    )
}

function ActualDataToComponents({ActualData:actualData,RerenderActualData})
{
    const mapToComponents = actualData.map((aD)=>
    <li key={aD.id} style={{ listStyleType: "none" }}>
        <GetActualDataAsComponent RerenderActualData={RerenderActualData} {...aD}/>
    </li>
    );
    return(
        <ul>{mapToComponents}</ul>
    );
}

function AddButton()
{
    const classes = useStyles();
    return(
        <Button variant="contained"
        color="primary"
        className={classes.buttonAdd}
        >
            Добавить
        </Button>
    )
}
export default function ListOfActualData()
{
    const baseUrlForActualData = 'http://localhost:25000/api/ActualData';
   
    const classes = useStyles()
    const [ActualData, setActualData] = useState([])
  
    const FetchActualData = ()=>
    {
        axios.get(baseUrlForActualData)
        .then(response=>
         {
             console.log(response.data)
            setActualData(response.data)
         })
    }
    useEffect(() => {
        FetchActualData()
    },[])

        return(
        <div >
            <ProfileButton/>
            <div className={classes.header}>
            <h2 >Актуализированные данные</h2>
            {/* <AddButton/> */}
            <AddActualData RerenderActualData = {FetchActualData}/>
        </div>
            <ActualDataToComponents ActualData={ActualData} RerenderActualData={FetchActualData}/>
        </div>
    )
}
