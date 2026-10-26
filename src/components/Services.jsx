import assets from "../assets/assets"
import React from "react"
import Servicescard from "./Servicescard"
import Title from "./Title"
import { motion } from 'motion/react'

const Services = () => {

    const Servicesdata = [
        {
            title:'Advertising',
            description :'We turns bold ideas into powerful digital solution that connect,engage...',
            icon: assets.ads_icon
        },
        {
            title:'Content marketing',
            description :'We help you to excute your plan and deliver result..',
            icon: assets.marketing_icon
        },
        {
            title:'Content writing',
            description :'We help you to create marketing strategy that drives result...',
            icon: assets.content_icon
        },
        {
            title:'Social media ',
            description :'we help you to built a strong social media  presence and engage with your audience..',
            icon: assets.social_icon
        }

        
    ]
  return (
    <motion.div
    initial='hidden'
    whileInView='visible'
    viewport={{once:true}}
    transition={{staggerChildren:0.2}}
     id='services' className="relative flex flex-col items-center  gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
        <img src={assets.bgImage2} alt="" className="absolute -top-110 -left-70 -z-1 dark:hidden" />

        <Title Title="How can we help?" desc="From stretegy to execution, we craft digital solution that move your business forward.">

        </Title>

        <div className="flex flex-col md:grid grid-cols-2">
            { Servicesdata.map((Services,index)=>(
                <Servicescard key={index} Services={Services} index={index} />

            ))}
        </div>
      
    </motion.div>
  )
}

export default Services
