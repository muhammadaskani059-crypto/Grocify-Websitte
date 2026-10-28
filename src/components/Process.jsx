import Heading from './Heading'
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from "react-icons/ri";
import { PiFactory, PiPlantFill, } from "react-icons/pi";
import { SlBadge } from 'react-icons/sl';
import { BsTruck } from 'react-icons/bs';


const Process = () => {
  const renderStep = step.map(item=>{
    return(
      <div>
        <span>{item.number}</span>
        <div>
          <div>
            <span>{item.icon}</span>
          </div>

          <div>
            <h4>{item.title}</h4>
            <p>{item.para}</p>
          </div>
        </div>
      </div>
    )
  })
  return (
    <section>
      <div className='max-w-350 mx-auto px-10 py-20'>
        <div className='w-fit mr-auto'>
          <Heading highlight="Our" heading="Process" />
        </div>
        <div>
             {renderStep}
        </div>
      </div>
    </section>
  )
}

export default Process

const step = [
  {
    id: 1,
    number: <RiNumber1 />,
    title: "Sourcing",
    para: "It is a long established fact that a reader",
    icon: <PiPlantFill />
  },

  {
    id: 2,
    number: <RiNumber2 />,
    title: "Manufacturing",
    para: "It is a long established fact that a reader",
    icon: <PiFactory />
  },

  {
    id: 3,
    number: <RiNumber3 />,
    title: "Quality Control",
    para: "It is a long established fact that a reader",
    icon: <SlBadge />
  },

  {
    id: 4,
    number: <RiNumber4 />,
    title: "Logistics",
    para: "It is a long established fact that a reader",
    icon: <BsTruck />
  },

]
