import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseTitle, chooseAuthor, chooseIsbn, choosePages } from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';
import { server_calls } from '../../api';

interface BookFormProps {
    id?:string;
    data?:{}
}

interface BookState {
    title: string;
    author: string;
    isbn: string;
    pages: string;
}

export const BookForm = (props:BookFormProps) => {

    const dispatch = useDispatch(); 
    const store = useStore();
    const title = useSelector<BookState>(state => state.title);
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)
        if(props.id!){
            server_calls.update(props.id!, data);
            console.log(`Updated:${data} ${props.id}`);
            console.log(data);
            setTimeout( () => {window.location.reload()}, 1000);
            event.target.reset();
        } else {
            // Dispatch basically updates our state / Redux store
            dispatch(chooseTitle(data.title));
            dispatch(chooseAuthor(data.author));
            dispatch(chooseIsbn(data.isbn));
            dispatch(choosePages(data.pages));
            server_calls.create(store.getState());
            setTimeout( () => {window.location.reload()}, 1000)
        }
    }
    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="Title">Title</label>
                    <Input {...register('Title')} name="Title" placeholder='Title'/>
                </div>
                <div>
                    <label htmlFor="Author">Author</label>
                    <Input {...register('Author')} name="Author" placeholder='Author'/>
                </div>
                <div>
                    <label htmlFor="isbn">ISBN</label>
                    <Input {...register('isbn')} name="isbn" placeholder='isbn'/>
                </div>
                <div>
                    <label htmlFor="pages">Pages</label>
                    <Input {...register('pages')} name="pages" placeholder='pages'/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
};