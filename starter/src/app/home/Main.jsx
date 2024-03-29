import Image from "next/image"

const greetMe = 'Marvin'
const Illumine = 'Illumine Business Hub'

export default function Main() {
  return (
    <div className="grid grid-cols-3 mt-5">

<div  className="flex flex-col items-center justify-center m-3 text-3xl text-center text-white bg-red-900">
            <h2>Good morning, {greetMe}</h2>
            <div className="text-white">
            <h1>fundamentals of React.JS by <br /> {Illumine}</h1>
          
        </div>
        </div>
        
       
        <div>
            <Image src='/imgs/illumineLogo.png' alt="Illumine Logo" width={900} height={100}/>
        </div>

        <div>
            <Image src='/imgs/illumineHome.jpg' alt="Illumine Front View1" width={600} height={500}/>
        </div>
    
    </div>
  )
}
