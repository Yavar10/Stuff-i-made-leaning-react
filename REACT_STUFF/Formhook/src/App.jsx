import { useForm } from "react-hook-form";
import './App.css';

function App() {

const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting } }
    = useForm();

   async function zaza(data){
      await new Promise((resolve)=>setTimeout(resolve,5000))
      console.log("zaza distributed",data);
      //alert("ZAZA DEDIYA");
    }

  return (
    
     <form onSubmit={handleSubmit(zaza)}>
   <div>
   <label>
    HELL YEAH -
   </label>
      <input  className={errors.YEAH?"error":"good"}
      {...register("YEAH",
    {
      required:{value:true,message:"YEAH is required"},
      minLength:{value:3,message:"YEAH is not enough"},
      maxLength:{value:7,message:"YEAH is too much"}
      })} type="text" />
   
   </div>

   <br />

   <div>
   <label>
    HELL NAH -
   </label>
   <input className={errors.NAH?"error":"good"}
   {...register("NAH",
    {
      required:{value:true,message:"NAH is required"},
      minLength:{value:3,message:"NAH is not enough"},
      maxLength:{value:7,message:"NAH is too much"}
      })} type="text" />
   
   </div>
   <br />
   <div>
   <label>
    HELL ZAZA -
   </label>
   <input  className={errors.ZAZA?"error":"good"}
   {...register("ZAZA",
    {
      required:{value:true,message:"ZAZA is required"},
      minLength:{value:3,message:"ZAZA is not enough"},
      maxLength:{value:7,message:"ZAZA is too much"}
      })} type="text" />
   {errors.YEAH && <p className={errors.YEAH?"error":"good"}>{errors.YEAH.message}</p>}
   {errors.NAH && <p className={errors.NAH?"error":"good"}>{errors.NAH.message}</p>}
   {errors.ZAZA && <p className={errors.ZAZA?"error":"good"}>{errors.ZAZA.message}</p>}
   </div>
   <br />
   <input className={isSubmitting?"submitting":'submit'} value={isSubmitting?"IsSubmitting":"Submit"}
    disabled={isSubmitting} type='submit'></ input>
   </form>
  )
}

export default App
