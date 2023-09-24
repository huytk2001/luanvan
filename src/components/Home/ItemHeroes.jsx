import React from 'react'
import ButtonShopNow from '../common/ButtonShopNow'

export default function ItemHeroes() {
    return (
        <>
            <div className='w-[773px] h-[474px] object-cover' style={{ backgroundImage: 'url("/src/assets/images/1 1.png")', backgroundSize: 'cover' }}>
                <div className='flex flex-col gap-[24px]'>
                    <h6 className='text-14px-grayDark'>Ưu đãi độc quyền <span className='px-[15px] py-[10px] rounded-[20px] text-redDark bg-redLight'>Giảm giá 30%</span></h6>
                    <h1 className='text-[32px] text-textDark font-medium leading-11'>
                        CUNG CẤP <br />
                        NHU CẦU HÀNG NGÀY <br />
                        CHO <span className='text-greenPrimary'>GIA ĐÌNH BẠN</span>
                    </h1>
                    <p className='text-14px-grayDark'>Rau củ quả chứa nhiều Vitamin và khoáng chất tốt cho sức khỏe</p>
                    <ButtonShopNow />
                </div>
            </div>
        </>
    )
}
