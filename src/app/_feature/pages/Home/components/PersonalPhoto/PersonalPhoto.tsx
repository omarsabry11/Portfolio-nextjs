import Image from 'next/image'
import React from 'react'

export default function PersonalPhoto() {
    return (
        <>
            <div className="size-[400px] max-sm:size-[300px] bg-[#020713] rounded-full border-[10px] border-[#8D5EF7] overflow-hidden flex justify-center items-center relative">
                <div className="size-[260px] max-sm:size-[180px]  bg-[#8D5EF7] rounded-full">

                    <div className="ms-4 absolute top-20 start-[180px] -translate-x-1/2 max-sm:start-[130px] max-sm:top-14">
                        <Image width={200} height={200} src={"/images/personalPhoto.png"} className="scale-[2] max-sm:scale-[2]" alt="personal photo" />
                    </div>

                </div>

            </div>



        </>
    )
}
