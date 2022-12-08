import {Box, Container, Stack} from "@mui/material"
import {Header} from "./Header"
import {PropsWithChildren} from "react"
import {Navigate} from "./Navigate/Navigate"
import ava from "../../assets/man.png";

export const Layout = ({children}: PropsWithChildren) => {
    return <Box sx={{background: "#e6e6e6"}}>
        <Container>
            <Header avatar={ava}/>
            <Stack direction={'row'} sx={(theme) => ({paddingTop: "72px", gap: theme.spacing()})}>
                <Navigate/>
                {children}
            </Stack>
        </Container>
    </Box>
}