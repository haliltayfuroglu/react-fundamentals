import loadingStatus from "@/helpers/loadingStatus";
import useHouses from "@/hooks/useHouses";
import HouseRow from "./houseRow";
import LoadingIndicator from "./loadingIndicator";


const HouseList = ({ selectHouse }) => {
    const { houses, setHousesWrapper, loadingState } = useHouses();

    if (loadingState !== loadingStatus.loaded) {
        return <LoadingIndicator loadingState={loadingState} />
    }

    const addHouse = () => {
        setHousesWrapper([
            ...houses,
            { id: 6, address: '123 Main St', country: "Turkey", price: '654321' }
        ]);
    };

    return (
        <>
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                    Houses currently on the market
                </h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Country</th>
                        <th>Asking Price</th>
                    </tr>
                </thead>
                <tbody>
                    {houses.map(house => <HouseRow key={house.id} house={house} selectHouse={selectHouse} />)}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={addHouse}>
                Add
            </button>
        </>
    );
}

export default HouseList;