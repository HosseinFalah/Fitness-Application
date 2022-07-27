import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { exerciseOptions, fetchData, youtubeOptions } from "../Utils/fetchData";

import Detail from "../Components/Detail";
import ExerciseVideo from "../Components/ExerciseVideo";
import SimilarExercises from "../Components/SimilarExercises";

const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
    const [equipmentExercises, setEquipmentExercises] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchExercisesData = async () => {
            const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
            const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
            setExerciseDetail(exerciseDetailData);

            const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
            setExerciseVideos(exerciseVideosData.contents)

            const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
            setExerciseVideos(exerciseVideosData.contents)
            setTargetMuscleExercises(targetMuscleExercisesData)

            const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
            setExerciseVideos(exerciseVideosData.contents)
            setEquipmentExercises(equipmentExercisesData)

        }
        fetchExercisesData()
    }, [id])

    return ( 
        <Box>
            <Detail exerciseDetail={exerciseDetail}/>
            <ExerciseVideo exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
            <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
        </Box>
    )
}

export default ExerciseDetail