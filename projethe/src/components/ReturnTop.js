import React, { useState } from 'react';

const ReturnTop = () => {
    const [desapearBtn, setDesapearBtn] = useState(false);

    let lastScroll = 0;
    const desacBtn = (e) =>{
        if(window.scrollY > lastScroll){
            setDesapearBtn(true);
        }else{
            setDesapearBtn(false)
        };
    }
    window.addEventListener('scroll', desacBtn);

    const returnTopActiv = (e) =>{
        console.log('caca');
        window.scrollTo({
            top:0,
            left:0,
            behavior: "smooth"
        })
    }

    return (
        <div className='topbtn' onClick={(e)=>{returnTopActiv(e)}} style={{ opacity: desapearBtn ? "100" : "0" }}>
            <img src="./img/flecheUp.png" alt="" />
        </div>
    );
};

export default ReturnTop;