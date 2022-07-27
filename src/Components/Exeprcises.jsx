import { useEffect, useState } from "react";
import { Box, Stack, Typography, Pagination } from "@mui/material";

import ExerciseCard from "./ExerciseCard";
import { exerciseOptions, fetchData } from "../Utils/fetchData";

const Exeprcises = ({ exeprcises, setExeprcises, bodyPart }) => {
    console.log(exeprcises);
    return (
        <Box id="exeprcises"
            sx={{mt: {lg: "110px"}}}
            mt="50px"
            p="20px"
        >
            <Typography variant="h3" mb="45px">
                Showing Results
            </Typography>
            <Stack 
                direction="row" 
                sx={{gap : {lg: "110px", xs: "50px"}}}
                flexWrap="wrap"
                justifyContent="center" 
                >
                    {exeprcises.map((exeprcise) => (
                        <ExerciseCard exercise={exeprcise}/>
                    ))}
            </Stack>
        </Box>
    )
}

export default Exeprcises