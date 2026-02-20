import React from 'react'
import frame from "../assets/frame.png"
const Template = ({title,desc1,desc2,image,setIsLoggedIn,formtype}) => {
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>

            {
                formtype==="signup" ? (<SignupForm/>):(<LoginForm/>)
            }
      


        <div>
            <div>
                
            </div>
            <p>OR</p>
            <div>
                 
            </div>
        </div>
         
         <button>
            Sign up with Google 
         </button>


        </div>


        {/* div for Image */}
        <div>

            <img src={frame}
            width={558}
            height={504}
            loading="lazy" 
            ></img>

             <img src={image}
            width={558}
            height={504}
            loading="lazy" 
            ></img>

        </div>
    </div>
  )
}

export default Template;