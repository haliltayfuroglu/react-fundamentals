import currencyFormatter from "@/helpers/currencyFormatter";

const HouseRow = ({ house }) => {
    return (
        <tr key={house.id}>
            <td>{house.address}</td>
            <td>{house.country}</td>
            <td>{currencyFormatter.format(house.askingPrice)}</td>
        </tr>
    );
};
export default HouseRow;