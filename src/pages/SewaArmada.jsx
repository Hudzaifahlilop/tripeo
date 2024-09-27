import React from 'react'
import HeroSewaArmada from '../sections/HeroSewaArmada'
import ArmadaPilihan from '../sections/ArmadaPilihan'
import CaraSewaArmada from '../sections/CaraSewaArmada'
import CallToAction from '../sections/CallToAction'
import LokasiJemput from '../sections/LokasiJemput'
import LayananArmada from '../sections/LayananArmada'
import PilihanSewa from '../sections/PilihanSewa'
import ArmadaTab from '../sections/ArmadaTab'
import DetailArmada from '../sections/DetailArmada'
import TabArmada from '../sections/TabArmada'
import busGambar1 from '../assets/1. Big Bus 59 Seat.jpg'
import busGambar2 from '../assets/2. Big Bus 48 - 50 Seat.jpg'
import busGambar3 from '../assets/3. Big Bus 42 - 45 Seat.jpg'
import busGambar4 from '../assets/4. MediumBus  Seat.jpg'


const SewaArmada = () => {
  return (
    <div>
        <HeroSewaArmada />
        <LokasiJemput />
        <LayananArmada />
        <PilihanSewa />
        {/* <DetailArmada /> */}
        <TabArmada
          bus={busGambar1}
          title={'Big Bus 59 Seat'}
          spesifikasi={'Bus pariwisata besar dengan kapasitas 59 orang penumpang siap menemani perjalanan anda bersama rombongan besar.'}
          seat={'59'}
        />
        <TabArmada
          bus={busGambar2}
          title={'Big Bus 48 - 50 Seat'}
          spesifikasi={'Bus pariwisata besar dengan kapasitas 38 - 50 orang penumpang siap menemani perjalanan anda bersama rombongan besar.'}
          seat={'48-50'}
        />
        <TabArmada
          bus={busGambar3}
          title={'Big Bus 42 - 45 Seat (Toilet)'}
          spesifikasi={'Bus pariwisata besar dengan kapasitas 42- 45 orang penumpang siap menemani perjalanan anda bersama rombongan besar.'}
          seat={'42-45'}
        />
        <TabArmada
          bus={busGambar4}
          title={'Medium Bus'}
          spesifikasi={'Bus pariwisata besar dengan kapasitas 25 - 30 orang penumpang siap menemani perjalanan anda bersama rombongan sedang.'}
          seat={'medium'}
        />
        <CaraSewaArmada/>
        <CallToAction title={'Jangan Sampai Salah Pilih Jasa Sewa Armada..!!'} />
        
    </div>
  )
}

export default SewaArmada