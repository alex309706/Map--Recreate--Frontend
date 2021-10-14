import {useStyles,TextField,SaveIcon,Button,Menu,MenuItem,Box,React,Select,FormControl,FormHelperText} from './index';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios';

const defaultProps = {
    bgcolor: 'background.paper',
    m: 1,
    border: 1,
  };


export default function AddActualData({RerenderActualData})
{

    const classes = useStyles();

    const baseUrl = 'http://localhost:25000/api/';
    const baseUrlForSubdivisions = baseUrl+'Subdivisions';
    const [Subdivisions, setSubdivisions] = useState([])
    const [SelectedSubdivision,setSelectedSubdivision] = useState([])
    const [SelectedSubdivisionName, setSelectedSubdivisionName] = useState([])
    const [SelectedSubdivisionId, setSelectedSubdivisionId] = useState([])

    const baseUrlForDocuments = baseUrl+'Documents';
    const [Documents, setDocuments] = useState([])
    const [SelectedDocument, setSelectedDocument] = useState([])
    const [SelectedDocumentName, setSelectedDocumentName] = useState([])
    const [SelectedDocumentId, setSelectedDocumentId] = useState([])

    const baseUrlForLocations = baseUrl+'Locations';
    const [Locations, setLocations] = useState([])
    const [SelectedLocation, setSelectedLocation] = useState([])
    const [SelectedLocationName, setSelectedLocationName] = useState([])
    const [SelectedLocationId, setSelectedLocationId] = useState([])

    const baseUrlForCommanders = baseUrl+'Commanders';
    const [Commanders, setCommanders] = useState([])
    const [SelectedCommander, setSelectedCommander] = useState([])
    const [SelectedCommanderLastName, setSelectedCommanderLastName] = useState([])
    const [SelectedCommanderId, setSelectedCommanderId] = useState([])
    
    
    const [documentPage, setdocumentPage] = useState(0)

    const [SelectedDate, setSelectedDate] = useState("1941-06-22")

    useEffect(() => {
       axios.get(baseUrlForSubdivisions)
       .then(response=>
        {
            setSubdivisions(response.data)
        })
        axios.get(baseUrlForCommanders)
        .then(response =>
            {
                setCommanders(response.data)
            })
        axios.get(baseUrlForDocuments)
        .then(response=>
            {
                setDocuments(response.data)
            })
        axios.get(baseUrlForLocations)
        .then(response =>
            {
               setLocations(response.data)
            })
    }, [])

    const SubdivisionsToMenuItems = Subdivisions.map((subdivision)=>
    <MenuItem key={subdivision.id} value = {subdivision.name}>{subdivision.name}</MenuItem>
    )

    const handleSelectSubdivision = (event) => {
        const selected= event.target.value;
        setSelectedSubdivisionName(event.target.value)
        const Subdivision = Subdivisions.find(subdivision=>subdivision.name === selected)
        setSelectedSubdivision(Subdivision)
        setSelectedSubdivisionId(Subdivision.id)
    };

    const CommandersToMenuItems = Commanders.map((commander)=>
        <MenuItem key={commander.id} value = {commander.lastName}>{commander.lastName}</MenuItem>
    )
    // const handleSelectCommander = (event) => {
    //     const selected = event.target.value;
    //     setSelectedCommanderLastName(event.target.value)
    //     const com = Commanders.find(commander=>commander.lastName === selected)
    //     setSelectedCommander(com)
    //     setSelectedCommanderId(com.id)
    // };

    const LocationsToMenuItems = Locations.map((location)=>
    <MenuItem key={location.id} value = {location.name}>{location.name}</MenuItem>
    )

    const handleSelectLocation = (event) => {
        const selected= event.target.value;
        setSelectedLocationName(event.target.value)
        const Location = Locations.find(location=>location.name === selected)
        setSelectedLocation(Location)
        setSelectedLocationId(Location.id)
    };

    const DocumentsToMenuItems = Documents.map((document)=>
    <MenuItem key={document.id} value = {document.name}>{document.name}</MenuItem>
)
    const handleSelectDocument = (event) => {
        const selected= event.target.value;
        setSelectedDocumentName(event.target.value)
        const Document = Documents.find(document=>document.name === selected)
        setSelectedDocument(Document)
        setSelectedDocumentId(Document.id)
    };

   const HandleSaveActualData = ()=>
   {
       const additionToUrl = 'ActualData'
       const ActualDataViewModel = {
           subdivisionId: SelectedSubdivisionId,
           locationId : SelectedLocationId,
           documentId : SelectedDocumentId,
           date : SelectedDate,
           documentPage :documentPage,
           strength : 215123
       }
       axios.post(baseUrl+additionToUrl,ActualDataViewModel)
       .then(response=>
        RerenderActualData())
    }
   const HandleDocumentPageInput = (event)=>
   {
       setdocumentPage(event.target.value)
   }
   const HandleSelectData = (event)=>
   {
       setSelectedDate(event.target.value)
   }
    return(
        <Box borderRadius={16} {...defaultProps}> 
        <div >
        
            <FormControl className={classes.formControl}>
                <Select
                value = {SelectedSubdivisionName}
                onChange={handleSelectSubdivision}
                className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'Without label' }}
                >
            {SubdivisionsToMenuItems}
            </Select>
            <FormHelperText>Выберите подразделение</FormHelperText>
            </FormControl>

            {/*Не понадобилось */}
            {/* <FormControl className={classes.formControl}>
                <Select
                value = {SelectedCommanderLastName}
                onChange={handleSelectCommander}
                className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'Without label' }}
                >
            {CommandersToMenuItems}
            </Select>
            <FormHelperText>Выберите командующего</FormHelperText>
            </FormControl> */}


            <FormControl className={classes.formControl}>
                <Select
                value = {SelectedLocationName}
                onChange={handleSelectLocation}
                className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'Without label' }}
                >
            {LocationsToMenuItems}
            </Select>
            <FormHelperText>Выберите местоположение</FormHelperText>
            </FormControl>
            <FormControl className={classes.formControl}>
                <Select
                value = {SelectedDocumentName}
                onChange={handleSelectDocument}
                className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'Without label' }}
                >
            {DocumentsToMenuItems}
            </Select>
            <FormHelperText>Выберите документ</FormHelperText>
            </FormControl>

            <TextField className={classes.textField}
            variant="outlined"
            label ="Укажите страницу"
            type = 'number'
            value = {documentPage}
            onChange ={HandleDocumentPageInput}
            />
       
        <TextField className={classes.textField}
         variant="outlined"
         label ="Введите дату"
         onChange = {HandleSelectData}
         type="date"
         value={SelectedDate}
         />

        {/* <TextField className={classes.textField}
         variant="outlined"
         label ="Введите численность"
         /> */}
       <Button
        variant="contained"
        color="primary"
        className={classes.saveButtonForActualData}
        startIcon={<SaveIcon />}
        onClick = {HandleSaveActualData}
      >
        Сохранить
      </Button>
        </div>
    </Box>
    )
}


