import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { LightbulbOutlined as Lightbulb, ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const NavList = () => {

    const navList = [
        { id: 1, name: 'Notes', icon: <Lightbulb />, route: '/' },
        { id: 2, name: 'Pinned', icon: <Archive />, route: '/archive' },
        { id: 3, name: 'Trash', icon: <Delete />, route: '/delete' },
    ]

    return (
        <List>
            {
                navList.map(list => (
                    <Link to={`${list.route}`} style={{ textDecoration: 'none', display: 'flex', color: 'inherit' }} key={list.id}>
                        <ListItem button >
                            <ListItemIcon style={{ alignItems: 'center' }}>
                                {list.icon}
                            </ListItemIcon>
                            <ListItemText primary={list.name} />
                        </ListItem>
                    </Link>
                ))
            }
        </List>
    )
}

export default NavList;