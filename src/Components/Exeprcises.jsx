import { useEffect, useState } from "react";
import { Box, Stack, Typography, Pagination } from "@mui/material";

import ExerciseCard from "./ExerciseCard";
import { exerciseOptions, fetchData } from "../Utils/fetchData";

const Exeprcises = ({ exeprcises, setExeprcises, bodyPart }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const exercisesPerPage = 9;

    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

    const currentExercises = exeprcises.slice(indexOfFirstExercise, indexOfLastExercise)

    const paginate = (e, value) => {
        setCurrentPage(value)
        window.scrollTo({top: 1800, behavior: "smooth"})
    }

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
                    {currentExercises.map((exeprcise) => (
                        <ExerciseCard key={exeprcise.id} exercise={exeprcise}/>
                    ))}
            </Stack>
            <Stack mt="100px" alignItems="center">
                {exeprcises.length > 9 && (
                    <Pagination 
                        color="standard" 
                        shape="rounded"
                        defaultPage={1}
                        count={Math.ceil(exeprcises.length / exercisesPerPage)}
                        page={currentPage}
                        onChange={paginate}
                        size="large"
                    />
                )}
            </Stack>
        </Box>
    )
}

export default Exeprcises