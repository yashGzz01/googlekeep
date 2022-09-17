import { useContext, useState } from 'react';

import { Card, CardContent, CardActions, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';

import { DataContext } from '../../context/DataProvider';
import Form from './Form';

const StyledCard = styled(Card)`
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    width: 350px;
    margin: 22px 18px;
    box-shadow: none;
`



const Note = ({ note }) => {

    const [showTextField, setShowTextField] = useState(false);

    const { notes, setNotes, setAcrchiveNotes, setDeleteNotes } = useContext(DataContext);

    const archiveNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setAcrchiveNotes(prevArr => [note, ...prevArr]);
    }

    const deleteNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setDeleteNotes(prevArr => [note, ...prevArr]);
    }

    const editNote = () => {
        setShowTextField(true);
    }

    return (
        <StyledCard>
            <CardContent onClick={editNote}>
                <Typography>{note.heading}</Typography>
                <Typography>{note.tagline}</Typography>
                <Typography style={{
                    wordWrap: "break-word"
                }}>{note.text}</Typography>
            </CardContent>
            <CardActions>
                <Archive
                    fontSize="small"
                    style={{ marginLeft: 'auto' }}
                    onClick={() => archiveNote(note)}
                />
                <Delete
                    fontSize="small"
                    onClick={() => deleteNote(note)}
                />
            </CardActions>
        </StyledCard>
    )
}

export default Note;