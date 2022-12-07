import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { useGetData } from '../../custom-hooks';
import { server_calls } from '../../api';
import { Button, Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle } from '@material-ui/core';
import { BookForm } from '../BookForm';


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, hide: true },
    { field: 'title', headerName: 'Title', flex: 1 },
    { field: 'author', headerName: 'Author', flex: 1 },
    { field: 'isbn', headerName: 'ISBN', flex: 1 },
    { field: 'pages', headerName: 'Pages', flex: 1 },
];

interface gridData {
    data: {
        id?:string
    }
}

export const DataTable = () => {

    let { bookData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<gridData>({data:{}});
    const [selectionModel, setSelectionModel] = useState<any>([]);
    

    let handleOpen = () => {
        setOpen(true)
    };
    let handleClose = () => {
        setOpen(false)
    };

    let deleteData = () => {
        server_calls.delete(selectionModel);
        getData();
        setTimeout( () => { window.location.reload(); }, 1000)
    }
        return (
          <>
      
        <div style={{ height: 400, width: '75%' }}>
            <h2>My Bookshelf</h2>

        <DataGrid rows={ bookData } columns={ columns } pageSize={ 5 } checkboxSelection={true} 
        onSelectionModelChange={ (item) => {
            setSelectionModel(item)
          }}
        />

        <Button onClick={handleOpen}>Update</Button>
        <Button variant="outlined" onClick={deleteData}>Delete</Button>

 
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update Book Listing {selectionModel}</DialogTitle>
            <DialogContent>
                <DialogContentText>Update Book Listing</DialogContentText>
                    <BookForm id={selectionModel!}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">Cancel</Button>
            </DialogActions>
        </Dialog>
            
        </div>
        
        </>
    )
}
