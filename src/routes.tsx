import React, {PropsWithChildren} from "react";
import Page404 from "./Pages/404Page";
import HomePage from "./Pages/HomePage";
import KidsListPage from "./Pages/KidsListPage/KidsList";
import ContractListPage from "./Pages/ContractListPage";

interface IGeneralMenu {
    title: string;
    link: LinkEnum;
    component: (props: PropsWithChildren<any>) => JSX.Element;
}

export enum LinkEnum {
    HOME = '/home',
    CONTRACTS_LIST = '/contracts',
    KIDS_LIST = '/kids',
    KID = '/kids/:id'
}

export const GENERAL_MENU: IGeneralMenu[] = [
    {
        title: 'Home',
        link: LinkEnum.HOME,
        component: () => <HomePage />,
    },
    {
        title: 'Дети',
        link: LinkEnum.KIDS_LIST,
        component: () => <KidsListPage />,
    },
    {
        title: 'Путевки',
        link: LinkEnum.CONTRACTS_LIST,
        component: () => <ContractListPage />,
    },
];

const SECOND_ROUTES: IGeneralMenu[]= [
    {
        title: 'Kid Profile',
        link: LinkEnum.KID,
        component: (id) => <Page404/>
    }
]

interface IObjAccMenu {
        path: string
        render: (props: PropsWithChildren<any>) => JSX.Element
    }



export interface IAccMenu {
    [n: string]: (props: PropsWithChildren<any>) => JSX.Element;
}

const menu = [...GENERAL_MENU, ...SECOND_ROUTES].map((item: IGeneralMenu):IObjAccMenu => {
    // acc[item.link] = item.component;
    return (
      {
          path: item.link,
          render: item.component,
      }
    )
})

const routes = [
    ...menu,
]

console.log(routes)
export default routes