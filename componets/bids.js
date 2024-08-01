import currencyFormatter from "@/helpers/currencyFormatter";
import loadingStatus from "@/helpers/loadingStatus";
import useBids from "@/hooks/useBids";
import { useEffect, useState } from "react";
import LoadingIndicator from "./loadingIndicator";

const Bids = ({ house }) => {
    const { bids, loadingState, addBid } = useBids(house.id);

    const emptyBid = {
        houseId: house.id,
        bidder: "",
        amount: 0,
    };

    const [newBid, setNewBid] = useState(emptyBid);
    const [maxPrice, setMaxPrice] = useState(0);

    useEffect(() => {
        if (bids.length > 0) {
            const max = Math.max(...bids.map(bid => bid.amount));
            setMaxPrice(max);
        }
    }, [bids]);

    if (loadingState !== loadingStatus.loaded)
        return <LoadingIndicator loadingState={loadingState} />;

    const onBidSubmitClick = () => {
        addBid(newBid);
        setNewBid(emptyBid);
    };

    return (
        <>
            <div className="row mt-4">
                <div className="col-12">
                    <table className="table table-sm">
                        <thead>
                            <tr>
                                <th>Bidder</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bids.map((b) => {
                                const color = b.amount == maxPrice ? 'red' : '';
                                console.log(maxPrice, color);
                                return <tr tr key={b.id} >
                                    <td style={{ color }}>{b.bidder}</td>
                                    <td style={{ color }}>{currencyFormatter.format(b.amount)}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div >
            <div className="row">
                <div className="col-5">
                    <input
                        id="bidder"
                        className="h-100"
                        type="text"
                        value={newBid.bidder}
                        onChange={(e) => setNewBid({ ...newBid, bidder: e.target.value })}
                        placeholder="Bidder"
                    ></input>
                </div>
                <div className="col-5">
                    <input
                        id="amount"
                        className="h-100"
                        type="number"
                        value={newBid.amount}
                        onChange={(e) =>
                            setNewBid({ ...newBid, amount: parseInt(e.target.value) })
                        }
                        placeholder="Amount"
                    ></input>
                </div>
                <div className="col-2">
                    <button className="btn btn-primary" onClick={onBidSubmitClick}>
                        Add
                    </button>
                </div>
            </div>
        </>
    );
};

export default Bids;