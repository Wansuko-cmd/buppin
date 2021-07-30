import {List, ListItem, ListItemText, Toolbar} from "@material-ui/core";

const Sidebar = () => {

    return(
        <>
            <nav>
                <List>
                    {['AAAAA', 'BBBBB', 'CCCCC'].map((text, index) => (
                        <ListItem button key={index}>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
            </nav>
        </>
    )
}

export default Sidebar
