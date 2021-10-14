import {SaveIcon,TextField,Button,useStyles,React,Select,FormControl,MenuItem,FormHelperText, axios} from './index';
import {useEffect , useState} from 'react'
export default function AddCommander()
{
    const classes = useStyles();
  
    const [CommanderLastName, setCommanderLastName] = useState([])

    const HandleWriteCommanderLastName = (event)=>
    {
        setCommanderLastName(event.target.value)
    }
    const baseUrlForRanks = 'http://localhost:25000/api/Ranks'

    const baseUrlForCommanders = 'http://localhost:25000/api/Commanders'

    const [Ranks, setRanks] = useState([])
    useEffect(() => {
        axios.get(baseUrlForRanks)
        .then(
            response => 
            {
                setRanks(response.data)   
            }
        )
    }, [])

    const ranksToMenuItems = Ranks.map((rank)=>
    <MenuItem key={rank.id} value = {rank.name}>{rank.name}</MenuItem>
)
const [SelectedRankName, setSelectedRankName] = useState("Генерал-Лейтенант")
//Костыль , т.к. нам нужен ID Rank
const [SelectedRankId, setSelectedRankId] = useState(1)

const [SelectedRank, setSelectedRank] = useState({})

const handleChangeRank = (event) => {
    const rank = Ranks.find(rank=>rank.name == SelectedRankName)
    setSelectedRank(rank)
    setSelectedRankId(rank.id)
    setSelectedRankName(event.target.value)
};
const [Commander, setCommander] = useState([])
const HandleCreateCommander = () =>{
    setCommander(
            {
                rankId:SelectedRankId,
                lastName:CommanderLastName
            }
        )
}
useEffect(() => {
    axios.post(baseUrlForCommanders,Commander)
    .then(response=>
        {
            console.log(response)
            console.log(response.data)
        })
},[Commander])

return(
    <div >
    <TextField 
    className={classes.textFieldForAddition}
    variant="outlined"
    label ="Введите Ф.И.О. нового командующего"
    onChange = {HandleWriteCommanderLastName}
   />
    <FormControl className={classes.formControl}>
    <Select
      value = {SelectedRankName}
      onChange={handleChangeRank}
      className={classes.selectEmpty}
      inputProps={{ 'aria-label': 'Without label' }}
    >
      {ranksToMenuItems}
    </Select>
    <FormHelperText>Выберите звание</FormHelperText>
    </FormControl>

    <Button
    variant="contained"
    color="secondary"
    className={classes.saveButton}
    startIcon={<SaveIcon />}
    onClick = {HandleCreateCommander}
  >
    Сохранить
  </Button>
    </div>
)
}