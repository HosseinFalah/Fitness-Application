import { useState } from "react";
import { Box } from "@mui/material";

import HeroBanner from "../Components/HeroBanner";
import SearchExercises from "../Components/SearchExercises";
import Exeprcises from "../Components/Exeprcises";

const Home = () => {
    const [bodyPart, setbodyPart] = useState("all");
    const [exercise, setExercise] = useState([]);
    return (
        <Box>
            <HeroBanner/>
            <SearchExercises
                setExercise={setExercise}
                bodyPart={bodyPart}
                setBodyPart={setbodyPart}
            />
            <Exeprcises
                setExercise={setExercise}
                bodyPart={bodyPart}
                setBodyPart={setbodyPart}
            />
        </Box>
    )
}

export default Home