import { SpringSummer2021, Backinbusiness, AloneWoman, background } from "@/components/assets"

export interface everysubMenuContentType {
    label?: string,
    href?: string,
    dropdown: boolean,
    image?: any,
    dataNo?: string,
}

export interface everysubMenuType {
    heading?: string,
    href?: string,
    content?: Array<everysubMenuContentType>,
}

export interface subMenuType {
    firstMenu?: Array<everysubMenuType>,
    secondMenu?: Array<everysubMenuType>,
    thirdMenu?: Array<everysubMenuType>,
    fourthMenu?: Array<everysubMenuType>,
}

export interface NavbarItemType {
    label: string,
    dropdown: boolean,
    href?: string,
    headinSubmenu?: string,
    child?: Array<subMenuType>,
    heightToDisplay?: number,
}

export const NavbarItems: Array<NavbarItemType> = [
    {
        label: "Men",
        href: "/allmens/male",
        dropdown: true,
        child: [
            {
                firstMenu: [
                    {
                        heading: "All men",
                        href: "/allmens/male",
                        content: [
                            {
                                label: "Third level test",
                                dropdown: false,
                            },
                            {
                                label: "Another",
                                dropdown: false,
                            }
                        ]
                    }
                ],
                secondMenu: [
                    {
                        content: [
                            {
                                label: "Shirts",
                                href: "/allmens/male",
                                dropdown: false,
                                dataNo: "data2",
                            },
                            {
                                label: "Shorts",
                                href: "/allmens/male",
                                dropdown: false,
                                dataNo: "data3",
                            },
                            {
                                label: "Boardshorts",
                                href: "/allmens/male",
                                dropdown: false,
                                dataNo: "data4",
                            },
                            {
                                label: "Jackets",
                                href: "/allmens/male",
                                dropdown: false,
                                dataNo: "data5",
                            },
                            {
                                label: "Sale",
                                href: "/allmens/male",
                                dropdown: false,
                                dataNo: "data6",
                            },
                        ]
                    }
                ],
                thirdMenu: [
                    {
                        content: [
                            {
                                image: SpringSummer2021,
                                dropdown: false,
                            },
                            {
                                label: "Spring/Summer 2021",
                                dropdown: false,
                            },
                        ],
                        heading: "View the collection",
                    },
                    {
                        content: [
                            {
                                image: Backinbusiness,
                                dropdown: false,
                            },

                            {
                                label: "Back in business",
                                dropdown: false,
                            },
                        ],
                        heading: "Visit our Brooklyn boutique",
                    }
                ]
            }
        ],
        heightToDisplay: 60,
    },
    {
        label: "Women",
        href: "/allmens/female",
        dropdown: true,
        child: [
            {
                secondMenu: [
                    {
                        content: [
                            {
                                label: "All women",
                                href: "/allmens/female",
                                dropdown: false,
                                dataNo: "data1",
                            },
                            {
                                label: "Shirts",
                                href: "/allmens/female",
                                dropdown: false,
                                dataNo: "data2",
                            },
                            {
                                label: "Dresses",
                                href: "/allmens/female",
                                dropdown: false,
                                dataNo: "data3",
                            },
                            {
                                label: "Jackets",
                                href: "/allmens/female",
                                dropdown: false,
                                dataNo: "data4",
                            },
                            {
                                label: "Pants",
                                href: "/allmens/female",
                                dropdown: false,
                                dataNo: "data5",
                            },
                        ]
                    }
                ],
                thirdMenu: [
                    {
                        content: [
                            {
                                image: AloneWoman,
                                dropdown: false,
                            },
                            {
                                label: "Spring/Summer 2021",
                                dropdown: false,
                            },
                        ],
                        heading: "View the collection",
                    },
                    {
                        content: [
                            {
                                image: background,
                                dropdown: false,
                            },

                            {
                                label: "Off the beaten path",
                                dropdown: false,
                            },
                        ],
                        heading: "Read our travel journal",
                    }
                ]
            }
        ],
        heightToDisplay: 52,
    },
    {
        label: "About",
        dropdown: true,
        href: "/about",
        child: [
            {
                fourthMenu: [
                    {
                        content: [
                            {
                                label: "Our story",
                                dropdown: false,
                            },
                            {
                                label: "Journal",
                                dropdown: false,
                            },
                            {
                                label: "FAQ",
                                dropdown: false,
                            },
                        ],
                    }
                ],
            }
        ],
        heightToDisplay: 12,
    },
    {
        label: "Theme features",
        href: "/themefeatures",
        dropdown: false,
        heightToDisplay: 0,
    },

] 