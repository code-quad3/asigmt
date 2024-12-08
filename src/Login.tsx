import { useRef,useEffect, useState} from 'react';
import { useFormik } from 'formik';
interface SignupFormProps {
    open: boolean;
    setOpen: (value: boolean) => void;
  }
const SignupForm: React.FC<SignupFormProps>  = ({open, setOpen}) => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const [isVisible, setIsVisible] = useState<boolean>(false);
   
  const handleEvent = () => {
    setIsVisible(true);

    
    setTimeout(() => {
      setIsVisible(false);
    }, 4000); 
  };




  interface FormValues {
    fullname: string;
    email: string;
    password: string;
    confpwd: string;
  }
  
  interface FormErrors {
    fullname?: string;
    email?: string;
    password?: string;
    confpwd?: string;
  }
  
  const validate = (values: FormValues): FormErrors => {
    const errors: FormErrors = {};
  
    // Validate fullname
    if (!values.fullname) {
      errors.fullname = 'Required';
    } else if (values.fullname.length > 20) {
      errors.fullname = 'Must be 20 characters or less';
    }
  
    // Validate email
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    // Validate password
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }
  
    // Validate confirm password
    if (!values.confpwd) {
      errors.confpwd = 'Required';
    } else if (values.password !== values.confpwd) {
      errors.confpwd = 'Passwords do not match';
    }
  
    return errors;
  };
  




  const formik = useFormik({
    initialValues: {
      fullname: '',
      password: '',
      email: '',
      confpwd: '',
    },
    validate,
    onSubmit: () =>  {
        handleEvent();
    

    },
      
    
   
});
  return (
<div className='my-24 relative'>
<div className='absolute  left-1/2 top-3 bg-green-500 rounded-md   transform -translate-x-1/2'>
  {isVisible &&<p className='p-4 rounded-md visible text-white' >SignUp successfull</p>}
</div>
    <div className =' w-96 h-96 m-auto '>
    <form onSubmit={formik.handleSubmit} className='flex flex-col gap-6'>
    <h1 className='bg-blue-400 p-6 text-white text-4xl text-center rounded-lg'>SignUp </h1>
    <div className='my-2 flex flex-col'>
    <div className='my-2 flex flex-col'>
      <label htmlFor="fullname" className='my-5 p-2 text-lg'>Full name</label>
      <input
        id="fullname"
        name="fullname"
        type="fullname"
        onChange={formik.handleChange}
        value={formik.values.fullname} className='p-2 border-2 border-blue-400 '
      />
        {formik.errors.fullname ? <div className='text-red-500'>{formik.errors.fullname}</div> : null}
      </div>









      <label htmlFor="email" className='my-5 p-2 text-lg'>Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email} className='p-2 border-2 border-blue-400 '
      />
       {formik.errors.email ? <div className='text-red-500'>{formik.errors.email}</div> : null}
      </div>
      <div className='my-3 flex flex-col'>
        <label htmlFor="password" className='my-5 p-2 text-lg'>Password</label>
        <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password} className='p-2 border-2 border-blue-400'
      />
       {formik.errors.password ? <div className='text-red-500'>{formik.errors.password}</div> : null}
</div>

<div className='my-3 flex flex-col'>
        <label htmlFor="password" className='my-5 p-2 text-lg'> Confirm Password</label>
        <input
        id="confpwd"
        name="confpwd"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.confpwd} className='p-2 border-2 border-blue-400'
      />
 {formik.errors.confpwd ? <div className='text-red-500'>{formik.errors.confpwd}</div> : null}
</div>


    <div className='flex gap-3'>
        <p className='text-md'>Already have account?</p>
        <button type="button" onClick={()=>setOpen(!open)}>Login</button>
</div>

     <div className='m-auto'>
      <button type="submit" className='bg-blue-400  rounded-md w-28 p-3 text-white'>Submit</button>
      </div>
    </form>
    </div>
    </div>
  );
};




interface LoginFormProps {
    open: boolean;
    setOpen: (value: boolean) => void;
  }
const LoginForm: React.FC<LoginFormProps>  = ({open, setOpen}) => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const [isVisible, setIsVisible] = useState<boolean>(false);













   
  const handleEvent = () => {
    setIsVisible(true);

    
    setTimeout(() => {
      setIsVisible(false);
    }, 4000); 
  };




  interface FormValues {

    email: string;
    password: string;
    confpwd: string;
  }
  
  interface FormErrors {

    email?: string;
    password?: string;
    confpwd?: string;
  }
  
  const validate = (values: FormValues): FormErrors => {
    const errors: FormErrors = {};
  
    
    // Validate email
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    // Validate password
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }
  
    // Validate confirm password
    if (!values.confpwd) {
      errors.confpwd = 'Required';
    } else if (values.password !== values.confpwd) {
      errors.confpwd = 'Passwords do not match';
    }
  
    return errors;
  };




  const formik = useFormik({
    initialValues: {
        password: localStorage.getItem('password') || '',
        confpwd: localStorage.getItem('password') || ''
        ,
        email: localStorage.getItem('email') || '',
      },
    validate,
    onSubmit: () =>  {
        handleEvent();
    

    },
      
    
   
});
  return (
<div className='my-24 relative'>
<div className='absolute  left-1/2 top-3 bg-green-500 rounded-md   transform -translate-x-1/2'>
  {isVisible &&<p className='p-4 rounded-md visible text-white' >Login successfull</p>}
</div>
    <div className =' w-96 h-96 m-auto '>
    <form onSubmit={formik.handleSubmit} className='flex flex-col gap-6'>
    <h1 className='bg-blue-400 p-6 text-white text-4xl text-center rounded-lg'>Login</h1>
    <div className='my-2 flex flex-col'>

     









      <label htmlFor="email" className='my-5 p-2 text-lg'>Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email} className='p-2 border-2 border-blue-400 '
      />
       {formik.errors.email ? <div className='text-red-500'>{formik.errors.email}</div> : null}
      </div>
      <div className='my-3 flex flex-col'>
        <label htmlFor="password" className='my-5 p-2 text-lg'>Password</label>
        <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password} className='p-2 border-2 border-blue-400'
      />
       {formik.errors.password ? <div className='text-red-500'>{formik.errors.password}</div> : null}
</div>

<div className='my-3 flex flex-col'>
        <label htmlFor="password" className='my-5 p-2 text-lg'> Confirm Password</label>
        <input
        id="confpwd"
        name="confpwd"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.confpwd} className='p-2 border-2 border-blue-400'
      />
 {formik.errors.confpwd ? <div className='text-red-500'>{formik.errors.confpwd}</div> : null}
</div>


    <div className='flex gap-3'>
        <p className='text-md'>Dont  have account?</p>
        <button type="button" onClick={()=>setOpen(!open)}>SignUp</button>
</div>
<div className='flex gap-3'>
        
    <input type='checkbox' id='remember-me' name="Remember me"  onChange={(e) => {
                if (e.target.checked) {
                  localStorage.setItem("email", formik.values.email);
                  localStorage.setItem("password", formik.values.password);
                } else {
                  localStorage.removeItem("email");
                  localStorage.removeItem("password");
                }
              }}/>
    <label htmlFor='remember-me'>Remember me</label>
</div>


     <div className='m-auto'>
      <button type="submit" className='bg-blue-400  rounded-md w-28 p-3 text-white'>Submit</button>
      </div>
    </form>
    </div>
    </div>
  );
};



function SgOrLg(){
    const[open ,setOpen] = useState(false);

    return(<>
  {(!open) && <SignupForm  open={open}  setOpen={setOpen}/>}
  {(open) &&<LoginForm open={open} setOpen={setOpen} />}
  </>
    )

}








export default SgOrLg;
