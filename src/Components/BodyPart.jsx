import { Stack, Typography } from "@mui/material";

import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    return (
        <Stack
            type="button"
            alignItems="center"
            justifyContent="center"
            className="bodyPart-card"
            sx={
                bodyPart === item ? { 
                    borderTop: '4px solid #FF2625', 
                    background: '#fff', 
                    borderBottomLeftRadius: '20px', 
                    width: '250px', 
                    height: '250px', 
                    cursor: 'pointer', 
                    gap: '45px' 
                } : { 
                    background: '#fff', 
                    borderBottomLeftRadius: '20px', 
                    width: '250px', 
                    height: '250px', 
                    cursor: 'pointer', 
                    gap: '40px' 
                }
            }
            onClick={() => {
                setBodyPart(item);
            }}
        >
            <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
            <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize"> {item}</Typography>
        </Stack>
    )
}

export default BodyPart