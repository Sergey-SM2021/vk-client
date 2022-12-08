import SettingsIcon from '@mui/icons-material/Settings';
import ArticleIcon from "@mui/icons-material/Article";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PeopleIcon from "@mui/icons-material/People";
import MessageIcon from "@mui/icons-material/Message";
import GroupsIcon from "@mui/icons-material/Groups";
import {ReactNode} from "react";

interface INavigateItem {
    icon: ReactNode,
    text: string,
    path: string,
    id: string
}

export const NavigateItems: Array<INavigateItem> = [
    {
        text: "Новости",
        id: Math.random().toString(),
        icon: <ArticleIcon sx={({palette}) => ({
            color: palette.primary.main
        })}/>,
        path: "/"
    },
    {
        icon: <AccountCircleIcon sx={({palette}) => ({
            color: palette.primary.main
        })}/>,
        text: "Профиль",
        path: "/user/0",
        id: Math.random().toString(),
    },
    {
        icon: <PeopleIcon sx={({palette}) => ({
            color: palette.primary.main
        })}/>,
        text: "Друзья",
        path: "/friends",
        id: Math.random().toString(),
    },
    {
        icon: <MessageIcon sx={({palette}) => ({
            color: palette.primary.main
        })}/>,
        text: "Сообщения",
        path: "/messages",
        id: Math.random().toString(),
    },
    {
        icon: <GroupsIcon sx={({palette}) => ({
            color: palette.primary.main
        })}/>,
        text: "Сообщества",
        id: Math.random().toString(),
        path:"/groups"
    },
    {
        icon: <SettingsIcon sx={({palette}) => ({
            color: palette.primary.main
        })}/>,
        text: "Настройки",
        id: Math.random().toString(),
        path:"/settings"
    }
]