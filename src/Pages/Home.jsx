import { useState } from "react";
import { Box } from "@mui/material";

import HeroBanner from "../Components/HeroBanner";
import SearchExercises from "../Components/SearchExercises";
import Exeprcises from "../Components/Exeprcises";

const Home = () => {
    return (
        <Box>
            <HeroBanner/>
            <SearchExercises/>
            <Exeprcises/>
        </Box>
    )
}

export default Home