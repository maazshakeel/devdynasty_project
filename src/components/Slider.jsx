import {Swiper , SwiperSlide} from 'swiper/react'
import {Pagination , Navigation , HashNavigation} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/navigation'

export default function Slider({swiperData}){
    return (
        <>
        <div className="w-full h-[290px] sm:rounded-md sm:overflow-hidden sm:w-[759px] sm:mx-auto sm:h-[400px] sm:mb-5 sm:mt-5">
        <Swiper
            spaceBetween={30}
            hashNavigation={{
                watchState: true,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, HashNavigation]}


        >
        {swiperData.map( (item , index) => (
            <SwiperSlide data-hash={`slide${index}`} key={index}>
                <img src={item} alt="" />
            </SwiperSlide>
        ))}
        </Swiper>
        </div>
        </>
    )
}