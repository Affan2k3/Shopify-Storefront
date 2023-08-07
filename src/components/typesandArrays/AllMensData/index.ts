import { reviews } from "@/components/assets";

export interface NavigationDataLabelType {
    label: string,
    catogry: string,
}
interface NavigationDataType {
    catogry: string,
    catogryToShow: string,
    labels: Array<NavigationDataLabelType>,
}
export interface ProductDataType {
    imageUrl: string,
    imageUrl2: string,
    name: string,
    price: string,
    reviews?: any,
    reviewPerson?: string,
    availableColours?: string[],
    banner?: string,
    bannerColor?: string,
    imageAlt: string,
    catogry1?: string,
    catogry2: string,
    availableSize?: string,
}

export interface AllCatogryDataType {
    homeImageUrl: string,
    homeAltText: string,
    catogry: string,
    NavigationData: NavigationDataType,
}

export const AllCatogryData: Array<AllCatogryDataType> = [
    {
        homeImageUrl: "https://cdn.shopify.com/s/files/1/2091/0251/collections/mens-Stocksy_txpd2ea9debXoZ100_Medium_222225-edited_1800x.jpg?v=1500224081",
        homeAltText: "Men",
        catogry: "male",
        NavigationData: {
            catogry: "All men",
            catogryToShow: "allmens",
            labels: [
                {
                    label: "Shirt",
                    catogry: "shirt",
                },
                {
                    label: "Shorts",
                    catogry: "shorts",
                },
                {
                    label: "Boardshorts",
                    catogry: "boardshorts",
                },
                {
                    label: "Jackets",
                    catogry: "jackets",
                },
                {
                    label: "Sale",
                    catogry: "sale",
                },
            ],
        },
    },
    {
        homeImageUrl: "https://cdn.shopify.com/s/files/1/2091/0251/collections/womens-edited_1800x.jpg?v=1500224178",
        homeAltText: "Women",
        catogry: "female",
        NavigationData: {
            catogry: "All women",
            catogryToShow: "allwomans",
            labels: [
                {
                    label: "Dresses",
                    catogry: "dresses",
                },
                {
                    label: "Jackets",
                    catogry: "jackets",
                },
                {
                    label: "Shirts",
                    catogry: "shirts",
                },
                {
                    label: "Pants",
                    catogry: "pants",
                },
            ],
        },
        
    },
]