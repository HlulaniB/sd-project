import React,{useState} from 'react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvcYkjEEzozNpH6qjN5-8xKXGp5jZPEYg",
  authDomain: "sd-database-19b80.firebaseapp.com",
  projectId: "sd-database-19b80", 
  storageBucket: "sd-database-19b80.firebasestorage.app",
  messagingSenderId: "1065056844407",
  appId: "1:1065056844407:web:1aa4644948c3476b15a472",
  measurementId: "G-ZH8LZWRXM7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



function Addproducts(){

    

        const[itemName,setitemname]=useState("");
        const[price,setprice]=useState("");
        const[quantity,setquantity]=useState("");
        
        const handleSubmit = (e) => {
            e.preventDefault(); 
            console.log('Submitted:', { itemName, price, quantity });
            // You can add Firebase logic here later
            
            let database=firebase.database();

            // Set data at a specific path
            database.ref('Orders/Products').set({
            nameofitem: itemName,
            price: price,
            quantity: quantity,
            shopid:"1"
            });
          };
        
   

    return (
        <section className="Box">
            <h1>Add items</h1>
            <form onSubmit={handleSubmit}>
                <section className="inputs">
                    <label>Item:</label>
                    <input type="text"  required value={itemName} onChange={e=>setitemname(e.target.value)}/><br/>
                    <label>Price:</label>
                    <input type="number"  required value={price} onChange={e=>setprice(e.target.value)}/><br/>
                    <label>Quantity</label>
                    <input type="number" required value={quantity} onChange={e=>setquantity(e.target.value)}/><br/>
                    

                </section>
                <button type="submit">Add Product</button>
            </form>
        </section>
    );


}


export default Addproducts;

