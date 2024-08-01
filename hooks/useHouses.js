import useGetRequest from "@/hooks/useGetRequest";
import { useEffect, useState } from "react";


const useHouses = () => {
    const [houses, setHouses] = useState([]);
    const { get, loadingState } = useGetRequest("/api/houses");

    const setHousesWrapper = (houses) => {
        setHouses(houses)
    }

    useEffect(() => {
        const fetchHouses = async () => {
            const houses = await get();
            setHouses(houses);
        }
        fetchHouses();
    }, [get]);

    return { houses, setHousesWrapper, loadingState };
};

export default useHouses;

