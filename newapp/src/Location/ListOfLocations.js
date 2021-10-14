import React,{useState,useEffect} from 'react';
import {useStyles ,ProfileButton,TextField,DeleteIcon,Button,AddLocation,axios} from './index';


function Header(props)
{
    const classes = useStyles();
    return(
        <div className={classes.header}>
            <h2 >Список местоположений</h2>
            <AddLocationButton/>
            <AddLocation/>
        </div>
    )
}
function Location(props)
{
    const classes = useStyles();
    return(
        <div >
            <TextField defaultValue={props.name}
            className={classes.textField}
            variant="outlined"
            label = "Название"
            InputProps={{
                readOnly: true,
            }}
            />
            <TextField defaultValue={props.coordinateX}
            className={classes.textField}
            variant="outlined"
            label = "Координата X"
            InputProps={{
                readOnly: true,
            }}
            />
            <TextField defaultValue={props.coordinateY}
            className={classes.textField}
            variant="outlined"
            label = "Координата Y"
            InputProps={{
                readOnly: true,
            }}
            />
        <div className={classes.ButtonsToOneLine}>
        <Button 
        variant="contained"
        color="primary"
        className={classes.button}
        >
        Изменить
        </Button>
        <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
        >
        Удалить
        </Button>
        </div>  
        
        </div>
    )
}
function AddLocationButton(props)
{
    const classes = useStyles();
    return(
        <div >
            {/* <Button 
            variant="contained"
            color="primary"
            className={classes.buttonAdd}
            >
            Добавить
            </Button> */}
        </div>
    )
}

function LocationsToComponents(props)
{
    const Locations=props.Locations;
    const mapToComponents = Locations.map((location)=>
    <li key={location.id} style={{ listStyleType: "none" }}>
        { <Location {...location}/> }
    </li>
    );
    return(
        <ul>{mapToComponents}</ul>
    );
}

export default function ListOfLocations()
{
    const Url = 'http://localhost:25000/api/Locations';
    const [Locations, setLocations] = useState([])
    useEffect(() => {
        axios.get(Url)
        .then(response=>
            {
                setLocations(response.data)
            }
    )}, [])
    return(
        <div >
        <ProfileButton/>
        <Header/>
        <LocationsToComponents Locations={Locations}/>
        </div>
    )
}
  