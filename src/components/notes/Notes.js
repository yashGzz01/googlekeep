import { useContext, useState } from 'react';

import { Box, Grid, Pagination } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import { DataContext } from '../../context/DataProvider';
import { reorder } from '../../utils/common-utils';

//components
import Form from './Form';
import Note from './Note';
import EmptyNotes from './EmptyNotes';

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));




const Notes = () => {

    const { notes, setNotes } = useContext(DataContext);
    const [startindex, setstartindex] = useState(1);


    const onDragEnd = (result) => {
        if (!result.destination)
            return;

        const items = reorder(notes, result.source.index, result.destination.index);
        setNotes(items);
    }

    return (
        <>

            <Box sx={{ display: 'flex', width: '100%', flexDirection: "column", overflowX: "hidden" }}>
                <Box sx={{ p: 3, width: '100%' }}>
                    <DrawerHeader />
                    <Form />
                    {notes.length > 0 ?
                        <DragDropContext onDragEnd={onDragEnd}>
                            <Droppable droppableId="droppable">
                                {(provided, snapshot) => (
                                    <Grid container style={{ marginTop: 22 }}
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                    >
                                        {
                                            notes.slice((startindex - 1) * 6, 6 * startindex).map((note, index) => (
                                                <Draggable key={note.id} draggableId={note.id} index={index}>
                                                    {(provided, snapshot) => (
                                                        <Grid ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            item
                                                        >
                                                            <Note note={note} />
                                                        </Grid>
                                                    )}
                                                </Draggable >
                                            ))
                                        }
                                    </Grid>
                                )}
                            </Droppable >
                        </DragDropContext>
                        : <EmptyNotes />}
                </Box>
                {notes.length !== 0 &&
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "fixed",
                        bottom: "80px",
                        width: "80%",
                        zIndex: 100,
                    }}>
                        <Pagination count={notes.length % 6 === 0 ? Math.floor(notes.length / 6) : Math.floor(notes.length / 6) + 1}
                            onChange={(e, v) => {
                                setstartindex(v)
                            }}
                            style={{
                                background: "white",
                                borderRadius: "30px",
                                padding: "5px"
                            }}
                        />

                    </div>
                }
            </Box>
        </>
    )
}

export default Notes;














// import { useContext, useEffect, useState } from 'react';

// import { Box, Grid } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { DataGrid } from '@mui/x-data-grid';
// import Pagination from '@mui/material/Pagination';

// // import Pagination from '@material-ui/lab/Pagination';
// import Stack from '@mui/material/Stack';
// import axios from 'axios';

// import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

// import { DataContext } from '../../context/DataProvider';
// import { reorder } from '../../utils/common-utils';

// //components
// import Form from './Form';
// import Note from './Note';
// import EmptyNotes from './EmptyNotes';
// import { SecurityUpdateGood } from '@mui/icons-material';
// import Paginationpage from '../pagination/Paginationpage';
// import { Container } from '@mui/system';


// const DrawerHeader = styled('div')(({ theme }) => ({
//     ...theme.mixins.toolbar,
// }));

// const Notes = () => {

//     const { notes, setNotes } = useContext(DataContext);

//     const [showPerPage, setShowPerPage] = useState(6);

//     const [paginations, setPaginations] = useState({
//         start: 0,
//         end: showPerPage,
//     });

//     const onDragEnd = (result) => {
//         if (!result.destination)
//             return;

//         const items = reorder(notes, result.source.index, result.destination.index);
//         setNotes(items);
//     }

//     return (
//         <>
//                 <Box sx={{ display: 'flex', width: '100%', }}>
//                     <Box sx={{ p: 3, width: '100%' }}>
//                         <DrawerHeader />
//                         <Form />


//                         {notes.length > 0 ?
//                             <DragDropContext onDragEnd={onDragEnd}>
//                                 <Droppable droppableId="droppable">
//                                     {(provided, snapshot) => (
//                                         <Grid container style={{ marginTop: 22 }}
//                                             {...provided.droppableProps}
//                                             ref={provided.innerRef}
//                                         >

//                                             {
//                                                 notes.slice(paginations.start, paginations.end).map((note, index) => (
//                                                     <Draggable key={note.id} draggableId={note.id} index={index}>
//                                                         {(provided, snapshot) => (
//                                                             <Grid ref={provided.innerRef}
//                                                                 {...provided.draggableProps}
//                                                                 {...provided.dragHandleProps}
//                                                                 item
//                                                             >
//                                                                 <Note note={note} />
//                                                             </Grid>
//                                                         )}
//                                                     </Draggable >
//                                                 ))
//                                             }

//                                             {notes.length > 6 ?
//                                                 <Paginationpage showPerPage={showPerPage}/> : <EmptyNotes/>
//                                             }

//                                         </Grid>

//                                     )}
//                                 </Droppable >
//                             </DragDropContext>
//                             : <EmptyNotes />
//                         }
//                     </Box>
//                 </Box>

//         </>
//     )
// }

// export default Notes;