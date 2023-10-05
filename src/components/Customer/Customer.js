import { useState } from 'react'
import './Customer.css';

export default function Customer({ name, description, address, img, NoOfReview, deleteCard, obj,editReview,id}) {
    const [count, setCount] = useState(0);
    function incre() {
        setCount(1 + count)
    }
    return (
        <>
            {/* <div className='main-container'> */}
            <div className='card-container'>

                <div className='container-customer'>
                    <h1>Best Western Alfa Aeropuerto </h1>
                    <div><p>{address}</p></div>
                    <div><p>{description}</p></div><br />
                    <div className='img-container'>
                        <div><img src={img} className='img' /></div>
                        <div className='font-size'><p className='font-family'>{name}</p></div>
                        <div className='font-size border'><p>{NoOfReview}</p></div>

                        <div className='font-size'>
                            <button onClick={()=>{editReview(id)}} className='btn cursor-pointer' type='button' >
                                Edit Review
                                </button></div>

                    </div>

                </div>
                <div className='container-like'>
                    <div className='text-center'>
                        <button className='text-center' value={count} onClick={incre}>💖</button>
                        <p className='font-family'>Your Ratting</p>
                        <p className='font-family text-center'>{count}</p><br />
                    </div>
                    <div className='text-center'>
                        <button className='text-center'>🌙</button>
                        <p className='font-family'>Your Ratting</p>
                        <p className='font-family text-center'>0</p><br />
                    </div>
                </div>
                <div className='delete-reviews-container'>
                    <span className='delete-reviews-card' onClick={()=>{deleteCard (obj)}}>🗑️</span>
                </div>
                {/* <div className='delete-reviews-container'>
                    <span onClick={() => { deletcard(obj) }} className='delete-reviews-card'>🗑️</span>
                </div> */}


                {/* ✍️🗑️🎯📑📄📜📃📒📙🖋️🖊️✏️📝🖌️🍜 */}

            </div>

            {/* <div>
                    <div className='task-container'></div>
                </div>
            </div> */}
        </>
    )
}





// export default function Customer({ name, wish, img, secondaryColor }) {
// return (
//     <>
//         <div className='card-contener' style={{backgroundColor:(secondaryColor)}}>
//             <div className="container">
//                 <div>
//                     <img src={img} className='img' />
//                 </div>
//                 <div className='card-container'>
//                     <p className='name-paragrap'>{name}</p>
//                     <p>{wish}</p>
//                 </div>
//             </div>
//             {/* <h1>{secondaryColor}</h1>  */}
//         </div>
//     </>

// )
//}


