"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import {db} from './firebaseConfig'
import {collection ,addDoc} from 'firebase/firestore'
import { AnySrvRecord } from 'dns';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 0,
  px: 0,
  pb: 0,
};



async function addDataTofirestore(name:any,email:any,password:any){
  try{
 const docRef= await addDoc(collection(db,'messages'),{
  name:name,
  email:email,
  password:password
 });
 console.log('Document writen with id :',docRef.id)
 return true;
  }catch(error){
    console.error('Error in Data adding',error)
    return false;
  }

}

export default function NestedModal() {
  const [name,setName] = React.useState('')
  const [email,setEmail] = React.useState('')
  const [password,setPassword] = React.useState('')
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const hanldeSubmit= async (e:any)=>{
    e.preventDefault();
    const added = await addDataTofirestore(name,email,password);
    if(added){
      setName('')
      alert('data addes to firestore')
    }


  }


//function Hero() {
  return (
    <div className=' backGround h-full w-full mt-10 rounded-xl mx-auto shadow-2xl '>
        <div className='mx-10 '>
<h1 className='text-white text-3xl font-bold mt-10 py-10'>Hi! James Doe</h1>
<p className='text-white '>Lorem ipsum dolor sit amen, something important to say here.</p>
<div className=''>
      <Button className='bg-indigo-700 mt-10 text-white rounded-lg mb-10' onClick={handleOpen}>Add Check In</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 500, height:400, borderRadius:7}}>
          <div className='bg-gray-400 w-full h-10 mt-0 rounded-t-3xl'>
          <h2 id="parent-modal-title" className=' ml-7 font-bold text-lg'>Add Check Ins</h2></div>
          <form onSubmit={hanldeSubmit}>
          <div className=' p-5'>
            <h1>Name:</h1>
            <input className=' form-input w-full shadow-lg mt-2' required type="text" placeholder='Title' value={name} onChange={(e)=>setName(e.target.value)} />

            <h1 className='mt-10'>Email:</h1>
            <input className=' form-input w-full shadow-lg mt-2' required type="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} />

            <h1 className='mt-10'>Password:</h1>
            <input className=' form-input w-full shadow-lg mt-2' required type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />


          </div>
          {/* <div className=' p-5'>
            <h1>Upload Image</h1>
            <input className=' form-input w-full h-32 shadow-lg' type="file" placeholder='Title' />
          </div> */}
          <div className='space-x-6 ml-72'>
            {/* <button className='w-16 h-8 bg-gray-100 rounded-lg' type='reset'>Cancel</button> */}
            <button className='w-16 h-8 bg-indigo-700 text-white rounded-lg' type='submit' id=''>Add</button>
          </div>
          </form>
        </Box>
      </Modal>
      </div>
    </div>

    </div>
    
  )
}

//export default Hero