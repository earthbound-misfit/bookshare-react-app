import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { useGetData } from '../../custom-hooks';
import { server_calls } from '../../api';
import { Button, Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
  Box, makeStyles, createStyles, Theme } from '@material-ui/core';
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

const useStyles = makeStyles((theme: Theme) => createStyles({
  box_style: {
    width: '90%',
    height: '400px',
    backgroundColor: 'rgba(255,255,255,0.9)',
    marginTop: '80px',
    borderRadius: '8px',
  },
  update_button: {
    backgroundColor: 'rgba(2,90,192,0.9)',
    color: 'white',
    marginRight: '10px',
    boxShadow: '1px 2px 8px white',
    padding: '10px 50px 10px 50px',
    borderRadius: '10px',
  },
  delete_button: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    color: 'black',
    boxShadow: '1px 2px 8px black',
    padding: '10px 50px 10px 50px',
    borderRadius: '10px',
  },
  button_container: {
    margin: '20px',
    display: 'flex',
    justifyContent: 'center',
  }
}));

export const DataTable = () => {

    let { bookData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<gridData>({data:{}});
    const [selectionModel, setSelectionModel] = useState<any>([]);
    const classes = useStyles()

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
      <Box className={classes.box_style}>  
        <DataGrid rows={ bookData } columns={ columns } pageSize={ 10 } checkboxSelection={true} 
        onSelectionModelChange={ (item) => {
            setSelectionModel(item)
          }}
        />
      <div className={classes.button_container}>
        <Button variant="contained" className={classes.update_button} onClick={handleOpen}>Update</Button>
        <Button variant="contained" className={classes.delete_button} onClick={deleteData}>Delete</Button>
        </div>
 
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update Book Listing {selectionModel}</DialogTitle>
            <DialogContent>
                    <BookForm id={selectionModel!}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">Cancel</Button>
            </DialogActions>
        </Dialog>
           </Box> 
      
        
        </>
    )
}
