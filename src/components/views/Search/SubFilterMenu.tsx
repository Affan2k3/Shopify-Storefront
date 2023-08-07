import { useState } from "react";

export default function SubFilterMenu({ dropDownState, dataToItrate, setAppliedFiltration, appliedFiltration }: any) {
    if (dropDownState === "colors") {
        return (
            <div>
                <ColorCheckBox data={dataToItrate} setAppliedFiltration={setAppliedFiltration} appliedFiltration={appliedFiltration} />
            </div>
        )
    } else if (dropDownState === "price") {
        return (
            <div>
                <PriceRange setAppliedFiltration={setAppliedFiltration} appliedFiltration={appliedFiltration} />
            </div>
        )
    } else if (dropDownState === "sizes") {
        return (
            <div>
                <ColorCheckBox data={dataToItrate} setAppliedFiltration={setAppliedFiltration} appliedFiltration={appliedFiltration} />
            </div>
        )
    }
    else if (dropDownState === "productType") {
        return (
            <div>
                <ColorCheckBox data={dataToItrate} setAppliedFiltration={setAppliedFiltration} appliedFiltration={appliedFiltration} />
            </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }
};

function PriceRange({ setAppliedFiltration, appliedFiltration }: { setAppliedFiltration: any, appliedFiltration: any }) {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(600);

    const handleMinPriceChange = (event: any) => {
        setMinPrice(event.target.value);
    };

    const handleMaxPriceChange = (event: any) => {
        setMaxPrice(event.target.value);
    };

    function checkThatIfitisExisting({ id, type, name }: any) {
        if (appliedFiltration.length > 0) {
            return appliedFiltration.some((item: any) => item.type == "price")
        } else if (appliedFiltration.length <= 0) {
            return false;
        } else {
            // Not to do anything
            return false;
        }
    }

    function handleAddOrRemoveItemForFiltration(e: any) {
        if (checkThatIfitisExisting({ id: maxPrice, type: "price", name: maxPrice })) {
            const updatedItems = appliedFiltration.map((item: any) => {
                if (item.type == "price") {
                    return { ...item, name: maxPrice };
                }
                return item;
            });
            // Update the state with the new array if price found already and want to modify
            setAppliedFiltration({ act: "update", additionalDataToSet: updatedItems })
        } else {
            setAppliedFiltration({ act: "add", additionalDataToSet: { id: maxPrice, type: "price", name: maxPrice } })
        }
    }
    return (
        <div className="space-y-1">
            <div className="flex justify-between items-center">
                <p>${minPrice}</p>
                <p>${maxPrice}</p>
            </div>
            <div className="flex items-center">
                <input
                    type="range"
                    min="0"
                    max="0"
                    value={minPrice}
                    onChange={handleMinPriceChange}
                    className="appearance-none h-2 w-5 rounded-full bg-gray-800"
                />
                <input
                    type="range"
                    min="0"
                    max="600"
                    value={maxPrice}
                    onChange={handleMaxPriceChange}
                    onMouseUp={handleAddOrRemoveItemForFiltration}
                    className="-ml-1 appearance-none h-2 w-full rounded-full bg-gray-800"
                />
            </div>
        </div>
    )
}

export function ColorCheckBox({ data, setAppliedFiltration, appliedFiltration }: any) {
    const [visiblity, setVisiblity] = useState(false);
    setTimeout(() => {
        setVisiblity(true)
    }, 500);
    function addOrRemoveItemForFiltration(item: any, e: any) {
        if (e.target.checked) {
            setAppliedFiltration({ act: "add", additionalDataToSet: item })
        } else if (!e.target.checked) {
            setAppliedFiltration({ act: "remove", id: item.id, additionalDataToSet: item })
        } else {
            setAppliedFiltration({ act: "nutral" })
        }
    }
    return (
        <ul className={`${visiblity ? "visible translate-y-0" : "invisible translate-y-6"} duration-500 space-y-2 ml-3 mt-3`}>
            {
                data.map((item: any, index: any) =>
                    <li key={index} className="flex space-x-1">
                        <input
                            id={item.id}
                            type="checkbox"
                            onChange={(e: any) => addOrRemoveItemForFiltration(item, e)}
                        />
                        <label className="font-light" htmlFor={item.id}>{item.name}</label>
                    </li>
                )
            }
        </ul>
    )
};