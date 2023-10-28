import {useState} from 'react'
import classe from "./Home.module.css"
import Button from './Button'

const Home = () => {

  const [res, setRes] = useState("")

  const button = ["C", "9", "/", "8", "7", "6", "*", "5", "4", "3", "+", "2", "1", "0", "-", ".", "Del", "="];

  const findval = () => {
    let result = Function("return " +res)();
    setRes(result.toString());
  }

  const handler = (arg) => {

    if(res === "Infinity"){
      setRes("");
      return 
    }

    if(arg == "C") setRes("")
    else if(arg == "=") findval()
    else if(arg == "Del"){
      let n = res.length
      if(n>0){
        setRes(res.slice(0, n-1))
      }
    }
    else setRes(res.concat(arg))

  }

  

  return (
    <div className={classe.home}>
        <div className={classe.inner}>
            <div className={classe.result}>
                <div className={classe.resbox}>
                  {res}
                </div>
            </div>
        <div className={classe.btns}>
          {button.map((ele, index) => {return <Button handler={handler} value={ele} key={index}/>})}
        </div>
        </div>
    </div>
  )
}

export default Home