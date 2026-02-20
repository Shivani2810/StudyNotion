import React from 'react'

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
    </div>
  )
}

export default Template;