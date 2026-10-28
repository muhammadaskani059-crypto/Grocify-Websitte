import Heading from './Heading'
import { PiFactory, PiPlantFill, } from "react-icons/pi";
import { SlBadge } from 'react-icons/sl';
import { BsTruck } from 'react-icons/bs';
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled     } from 'react-icons/tb';


const Process = () => {
  const renderStep = step.map((item) => (
      <div
        key={item.id}
        className={`flex flex-col items-center text-center ${item.id % 2 === 0 ? 'xl:-translate-y-10' : ''}`}
      >
        <span className='flex size-20 items-center justify-center rounded-full bg-zinc-800 text-5xl text-white outline-2 outline-offset-4 outline-dotted outline-zinc-800'>
          {item.number}
        </span>
        <div className='mt-10 flex flex-col items-center'>
          <span className='flex size-14 items-center justify-center rounded-full bg-orange-400 text-3xl text-white shadow-md shadow-orange-200'>
            {item.icon}
          </span>
          <h4 className='mt-4 text-xl font-bold text-zinc-800'>{item.title}</h4>
          <p className='mt-2 max-w-56 text-zinc-600'>{item.para}</p>
        </div>
      </div>
    ))
  return (
    <section className='overflow-hidden bg-orange-50/50'>
      <div className='mx-auto max-w-350 px-5 py-16 sm:px-8 md:py-24'>
        <div className='w-fit mx-auto'>
          <Heading highlight="Our" heading="Process" />
        </div>
        <div className='mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 xl:mt-24 xl:grid-cols-4'>
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
    number: <TbCircleNumber1Filled />,
    title: "Sourcing",
    para: "It is a long established fact that a reader",
    icon: <PiPlantFill />
  },

  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: "Manufacturing",
    para: "It is a long established fact that a reader",
    icon: <PiFactory />
  },

  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: "Quality Control",
    para: "It is a long established fact that a reader",
    icon: <SlBadge />
  },

  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: "Logistics",
    para: "It is a long established fact that a reader",
    icon: <BsTruck />
  },

]
