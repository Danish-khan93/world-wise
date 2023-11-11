import {Box ,Typography} from "@mui/material"
import WavingHandIcon from '@mui/icons-material/WavingHand';
const Message = () => {
  return (
    <Box>
        <Typography className="text-white font-bold">
         <WavingHandIcon className="text-yellow-400"/> Hello if you want to visit cities choose on map
        </Typography>

    </Box>

  )
}

export default Message