"use client"
import { CiSearch } from "react-icons/ci";
import { useContext, useEffect, useReducer, useState } from "react"
import ProductAndFilterationSection from "./ProductAndFilterationSection";
import RealImageChangingEffect from "../AllMens/RealImageChangingEffect";
import LoadingState from "@/components/shared/LoadingState";
import Link from "next/link";
import { CartState } from "@/globalState/context/CartContext";

interface availableColors {
    id: string,
    type: string,
    name: string,
}
function SearchComp({ slugg }: any) {
    // getting all product data from context
    let { state } = CartState();

    // states
    const [availableColors, setAailableColors] = useState<Array<availableColors>>([]);
    const [availableSizes, setAvailableSizes] = useState<Array<availableColors>>([]);
    const [productTypes, setProductTypes] = useState<Array<availableColors>>([]);
    const [searchValue, setSearchValue] = useState<any>(slugg);
    const [filteredProductData, setFilteredProductData] = useState<any>();
    const [UpdatedStateForReRendring, setUpdatedStateForReRendring] = useState("no");

    // Reducer function
    function firstFunc(state: any, action: { act: string, id?: string, additionalDataToSet?: any }) {

        // check that what you want to do here will run remove function that will remove the item whose id will you pass the structure of passing is {act:"remove" , id:"sm"}
        if (action.act === "remove" && action.id) {
            let appliedFiltrationToSetAgain: any = state.filter((item: any) => item.id !== action.id);
            return appliedFiltrationToSetAgain;
        } else if (action.act === "add" && action.additionalDataToSet) {        //here you want to add item in filtration and you need to pass some addition data to set structure id {act:"add" , additionalDataToSet:{id:"sm" , type:"size" , name:"SM"}}
            // check that is it already exsist in the filtration array if so do not add it again
            if (state.find((item: any) => item.id == action.additionalDataToSet.id)) {
                console.log("Already addded")
            } else {
                return [...state, action.additionalDataToSet]
            };
            return state
        } else if (action.act === "update" && action.additionalDataToSet) {         //update is only here used for price to update whenever user click on range it will set that updated price in previous price filtration object
            return action.additionalDataToSet
        };
        return state
    };
    const [appliedFiltration, setAppliedFiltration] = useReducer(firstFunc, []);

    // 2nd Reducer function
    // this function will set that total number of item that is being filterd by the query to show user total results
    function first(state: any, action: any) {
        if (action.act === "update" && action.data) {
            return (action.data).length
        }
        return 0
    }
    const [filteredNumberOfItemOrResults, setFilteredNumberOfItemOrResults] = useReducer(first, 0);

    // update every single time setSearchValue,filteredProductData when allProductData?.allProductData changed
    useEffect(() => {
        setSearchValue(slugg)
        if (state && state.products.data) {
            let data = state?.products.data.products.edges.filter((item: any) => ((item.node.title)?.toLowerCase()).indexOf(slugg.toLowerCase()) !== -1)
            setFilteredProductData(data);
        }
    }, [state.products])


    // update total number of items every time when filteredProductData is changed so that we may able to get updated results data after setting data to filtrationProductData
    useEffect(() => {
        setFilteredNumberOfItemOrResults({ act: "update", data: filteredProductData });
    }, [filteredProductData])

    // search function handler
    const handleButtonClickForSearch = (e: any) => {
        if (e.key === "Enter" && e.keyCode == 13) {
            if (searchValue) {
                window.location.href = `/search/${searchValue}`
            }
        }
    };

    // apply filtration for prductType only 
    function checkNestedObjectArrayForProductType(nestedArray: any, desiredIdArray: any) {
        if (desiredIdArray.length !== 0) {
            for (let i = 0; i < desiredIdArray.length; i++) {
                if (nestedArray.productType === desiredIdArray[i].id) {
                    return true;
                    break;
                }
            }
        } else {
            return true;
        }
    };

    // apply filtration for all others 
    function checkNestedObjectArray(nestedArray: any, desiredIdArray: any) {
        if (desiredIdArray.length !== 0) {
            return nestedArray.some((item: any) => {
                for (let i = 0; i < desiredIdArray.length; i++) {
                    let titleToMatch = item.node.title.split("/")[0];
                    let colorTitleToMatch = item.node.title.split("/");
                    colorTitleToMatch = colorTitleToMatch[colorTitleToMatch.length - 1];
                    let FindSpace = titleToMatch.indexOf(" ");
                    let finalColorToMatch = colorTitleToMatch.replace(" ", "");
                    if (FindSpace >= 0) {
                        let finalTitleToMatch = titleToMatch.replace(" ", "");
                        if (finalTitleToMatch == desiredIdArray[i].name || item.node.price.amount <= Number(desiredIdArray[i].name) || finalColorToMatch == desiredIdArray[i].name) {
                            return true;
                        } else {
                            return false;
                        }
                    } else {
                        if (item.node.title == desiredIdArray[i].name || item.node.price.amount <= Number(desiredIdArray[i].name) || finalColorToMatch == desiredIdArray[i].name) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                }
            });
        } else {
            return true
        }
    };

    // filtration dynamic key to check or uncheck
    function checkThatIfAlreadyAddedSize(orignalTitleToSet: { id: string, type: string, name: string }) {
        return availableSizes.some((item: { id: string, type: string, name: string }) => item.id === orignalTitleToSet.id)
    }

    function pushIntoAvailableSizesArray(title: string) {
        let orignalTitle: any = title.split("/");
        orignalTitle = orignalTitle[0].replace(" ", "");
        let letterSmall = orignalTitle.toLowerCase();
        let orignalTitleToSet = {
            id: letterSmall,
            type: "size",
            name: orignalTitle,
        };
        if (checkThatIfAlreadyAddedSize(orignalTitleToSet)) {
        } else {
            setAvailableSizes([...availableSizes, orignalTitleToSet])
        }
    }
    function checkThatIfAlreadyAddedColor(orignalTitleToSet: { id: string, type: string, name: string }) {
        return availableColors.some((item: { id: string, type: string, name: string }) => item.id === orignalTitleToSet.id)
    }

    function pushIntoAvailableColorArray(title: string) {
        let orignalTitle: any = title.split("/");
        if (orignalTitle[1]) {
            orignalTitle = orignalTitle[1].replace(" ", "");
            let letterSmall = orignalTitle.toLowerCase();
            let orignalTitleToSet = {
                id: letterSmall,
                type: "color",
                name: orignalTitle,
            };
            if (checkThatIfAlreadyAddedColor(orignalTitleToSet)) {
            } else {
                setAailableColors([...availableColors, orignalTitleToSet])
            }
        } else {
        }
    };

    function checkThatIfAlreadyAddedProductType(orignalTitleToSet: { id: string, type: string, name: string }) {
        return productTypes.some((item: { id: string, type: string, name: string }) => item.id === orignalTitleToSet.id)
    }

    function pushIntoAvailableProductTypeArray(title: string) {
        let letterSmall = title.toLowerCase();
        let orignalTitle = (title.slice(0, 1)).toUpperCase() + title.slice(1);
        let orignalTitleToSet = {
            id: letterSmall,
            type: "productType",
            name: orignalTitle,
        };
        if (!checkThatIfAlreadyAddedProductType(orignalTitleToSet)) {
            setProductTypes([...productTypes, orignalTitleToSet])
        }
    }
    if (() => typeof window !== undefined && localStorage) {
        setTimeout(() => {
            setUpdatedStateForReRendring("yes");
        }, 4000);
      };
    return (
        <div className=" max-w-7xl mx-auto">
            <div className="h-28" />
            <div className="min-h-screen px-5 space-y-6">
                <div className="space-y-2 border-b pb-10">
                    <h3 className="text-4xl font-bold text-gray-800">Search</h3>
                    <div className="flex">
                        <input onKeyDown={handleButtonClickForSearch} value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }} placeholder="Search Our Store" id="inputSear" className="border border-gray-300 py-2 px-1 " />
                        <a href={`/search/${searchValue}`} className="w-16 bg-black flex items-center justify-center cursor-pointer" id="searchIco"><CiSearch color="white" size={22} /></a>
                    </div>
                </div>
                <div className="py-4 text-4xl font-semibold text-gray-800">
                    {filteredNumberOfItemOrResults} &nbsp; results
                </div>
                <ProductAndFilterationSection productTypes={productTypes} availableSizes={availableSizes} availableColors={availableColors} appliedFiltration={appliedFiltration} setAppliedFiltration={setAppliedFiltration} />
                <div className="flex gap-2 md:gap-6 flex-wrap py-10">
                    {
                        filteredProductData ?
                            filteredProductData.map((item: any, index: any) => {
                                pushIntoAvailableProductTypeArray(item.node.productType);
                                (item.node.variants.edges).map((item: any) => {
                                    pushIntoAvailableSizesArray(item.node.title);
                                    pushIntoAvailableColorArray(item.node.title);
                                })
                                if (checkNestedObjectArray(item.node.variants.edges, appliedFiltration) || checkNestedObjectArrayForProductType(item.node, appliedFiltration)) {
                                    return (
                                        <RealImageChangingEffect key={index} subItem={item} index={index} />
                                    )
                                } else {
                                    return ''
                                }
                            })
                            : <LoadingState />
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchComp