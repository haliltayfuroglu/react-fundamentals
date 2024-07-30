import { useState } from "react";
import HouseRow from "./houseRow";

const housesArray = [
    { id: 1, address: '123 Main St', country: 'USA', askingPrice: '500000' },
    { id: 2, address: '456 Elm St', country: 'Canada', askingPrice: '600000' },
    { id: 3, address: '789 Oak St', country: 'Mexico', askingPrice: '700000' },
    { id: 4, address: '101 Maple St', country: 'United Kingdom', askingPrice: '800000' },
    { id: 5, address: '202 Willow St', country: 'Australia', askingPrice: '754000' }
]



const HouseList = () => {
    const [houses, setHouses] = useState(housesArray);

    const addHouse = () => {
        setHouses([
            ...houses,
            { id: 6, address: '123 Main St', country: "Turkey", askingPrice: '654321' }
        ]);
    }

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
                    {houses.map(house => <HouseRow key={house.id} house={house} />)}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={addHouse}>
                Add
            </button>
        </>
    );
}

export default HouseList;