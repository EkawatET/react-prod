import { useState,useEffect } from "react"; 
import Axios from 'axios';
function AddItem() {
      const [item,setItem] = useState("");
      const [qty,setQty] = useState(0);
      const [price,setPrice] = useState(0.00);
      const [itemList,setItemList] = useState([]);
      const [getitemList,setGetitemList] = useState([]);
      const [serachitemList,setserachitemList] = useState([]);
       const getItem =() =>{
       Axios.get('http://localhost:3001/item').then((response)=>{
         setGetitemList(response.data);
       });
      }
        
        const additem = () => {
            Axios.post('http://localhost:3001/item',{
                Item:item,
                Qty:qty,
                Price:price
            }).then(() => {
              setItemList([...itemList,
              {
                Item: item,
                Qty: qty,
                Price: price
              }
            ])
            })
        }

       const updateitem = (id,item) =>{
        Axios.put('http://localhost:3001/item',{id:id , Item:item})
        .then((response) =>{
           setItemList(
           itemList.map((val) =>{
              return val.id === id ? {
                id: val.id,
                 item: val.item,
               setQty: val.price
             }: val;
            })
           )
         })}

      const searchitem = (id,item) =>{
       Axios.get('http://localhost:3001/item',{id:id , Item:item})
     .then((response) =>{
         setserachitemList(
          serachitemList.map((val) =>{
              return val.id === id ? {
             id: val.id,
               item: val.item,
               price: val.price
              }: val;
            })
          )
      })
        }
      return (
        <div className="Additem contraiter">
            <h1>AddItem</h1>
            <div className="item">
                <form action="">
                    <div className="mb-4"></div>
                    <label htmlFor="item" className="form-label"> Item : </label>&nbsp;
                    &nbsp;<input type="text" 
                                className="form-control" 
                                placeholder="Enter Item"
                                onChange={(event)=>
                                setItem(event.target.value)
                                }
                      
                                />
                    <br></br>
                    <br></br>
                    <label htmlFor="Qty" className="form-label"> Qty : </label>&nbsp;
                    &nbsp;&nbsp;<input type="text" 
                                      className="form-control" 
                                      placeholder="Enter Qty"
                                      onChange={(event)=>
                                        setQty(event.target.value)
                                        }
                                      />
                    <br></br>
                    <br></br>
                    <label htmlFor="Price" className="form-label"> Price :</label>&nbsp;
                    &nbsp;<input type="text" 
                                 className="form-control" 
                                 placeholder="Enter Price"
                                 onChange={(event)=>
                                 setPrice(event.target.value)
                                    }
                                 />
                    <br></br>
                    <br></br>
                    <button onClick={additem}>
                        ADD
                    </button>  
                    {/* &nbsp; 
                    <button>
                        Update
                    </button> */}
                    &nbsp; 
                </form>
                <br></br>
            </div>               
        </div>
    );
}
export default AddItem;