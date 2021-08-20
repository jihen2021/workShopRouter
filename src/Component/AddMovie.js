import React from 'react'
import { useState } from 'react';
import Modal from 'react-modal';
import { Link, useHistory } from 'react-router-dom';
import StarRating from './StarRating';
const AddMovie = ({ handleAdd }) => {
const history=useHistory()

  const [form, setForm] = useState({
    name: "",
    date: "",
    image: "",
    rate: 1,
  })
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  const [modalIsOpen, setIsOpen] = useState(false);
  Modal.setAppElement('#root');
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const handlChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }
  const handlSubmit = (e) => {
    e.preventDefault();
    let film = { ...form, id: Math.random() };
    handleAdd(film);
    closeModal();
    setForm({
      name: "",
      date: "",
      image: "",
      rate: 1,
    });
history.push('/')
  }
  const handelRate = (rate) => {
    setForm({ ...form, rating: rate })

  }
  return (
    <div>
    <form onSubmit={handlSubmit}>
        <label>Name Movie</label>
        <input type="text" value={form.name} name="name" onChange={handlChange} />
        <label>Image</label>
        <input type="url" value={form.image} name="image" onChange={handlChange} />
        <label>Date</label>
        <input type="date" value={form.date} name="date" onChange={handlChange} />
        <label>Rate</label>
        <StarRating rate={form.rating} handelRate={handelRate} />
        <button className="btn btn-primary" >Add</button>
        <Link to="/"><button  className="btn btn-danger">cancel</button></Link>
        
      </form>

    </div>
  )
}

export default AddMovie
