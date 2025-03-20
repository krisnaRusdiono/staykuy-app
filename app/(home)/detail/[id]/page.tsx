'use client'

import AppContainer from '@/components/base/AppContainer';
import { Typography, Divider, Button, Tab, Tabs, Box } from '@mui/material';
import Image from 'next/image';
import starIcon from '@/public/svg/star.svg';
import pinMarker from '@/public/svg/pinMarker.svg';
import { SyntheticEvent, useState } from 'react';
import TabContent from '@/components/base/TabContent';
import icGym from '@/public/svg/ic_gym.svg';
import icLaundry from '@/public/svg/ic_laundry.svg';
import icReceptionist from '@/public/svg/ic_receptionist.svg';
import icSpa from '@/public/svg/ic_spa.svg';
import icSwimmingPool from '@/public/svg/ic_swimming_pool.svg';
import icBreakfast from '@/public/svg/ic_breakfast.svg';
import icBed from '@/public/svg/ic_double_bed.svg';
import icWifi from '@/public/svg/ic_wifi.svg';
import icPerson from '@/public/svg/ic_person.svg';
import icShop from '@/public/svg/ic_shop.svg';

const DetailPage = () => {
    const [valueTabs, setValueTabs] = useState<number>(0);

    const handleTabsChange = (event: SyntheticEvent, value: number) => setValueTabs(value);

    const a11yProps = (index: number) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
      <AppContainer className='flex flex-col gap-4 py-4'>
        <div className='flex flex-col gap-8 h-auto min-h-screen pt-20'>
          <div className='w-full bg-white rounded-md flex justify-between items-center gap-4 px-4 py-6 drop-shadow-lg border border-solid border-neutral-100'>
            <div className='w-full flex gap-4'>
              <div className='flex flex-col justify-between h-inherit'>
                <Typography variant='body2'>
                  Kota/Nama Hotel/ Destinasi
                </Typography>
                <Typography variant='body1' className='!font-semibold'>
                  Jakarta
                </Typography>
              </div>
              <Divider orientation='vertical' variant='middle' flexItem />
              <div className='flex flex-col justify-between h-inherit'>
                <Typography variant='body2'>Tanggal Menginap</Typography>
                <Typography variant='body1' className='!font-semibold'>
                  12 Mar - 14 Mar 2025
                </Typography>
              </div>
              <Divider orientation='vertical' variant='middle' flexItem />
              <div className='flex flex-col justify-between h-inherit'>
                <Typography variant='body2'>Jumlah Tamu dan Kamar</Typography>
                <Typography variant='body1' className='!font-semibold'>
                  2 Tamu 2 Kamar
                </Typography>
              </div>
            </div>
            <Button
              variant='contained'
              className='text-sm !normal-case text-nowrap !px-8 !py-2 !rounded-xl'
            >
              Ubah Pencarian
            </Button>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <div className='flex gap-4'>
                <Typography variant='h5'>Hilton Garden Inn</Typography>
                <div className='flex gap-2'>
                  <Image src={starIcon} width={17} alt='star' />
                  <Image src={starIcon} width={17} alt='star' />
                  <Image src={starIcon} width={17} alt='star' />
                  <Image src={starIcon} width={17} alt='star' />
                  <Image src={starIcon} width={17} alt='star' />
                </div>
              </div>
              <div className='flex gap-2 items-center'>
                <Image src={pinMarker} alt='pin map' width={14} />
                <Typography variant='caption'>
                  Jl. Taman Palem Lestari No.1 Blok B13, West Cengkareng,
                  Cengkareng, West Jakarta City, Jakarta 11730
                </Typography>
              </div>
              <div className='w-full min-h-80 grid grid-cols-4 gap-4 [&>div]:rounded-xl'>
                <div
                  className='bg-center bg-no-repeat bg-cover col-span-2 row-span-2 w-full h-full'
                  style={{
                    backgroundImage: "url('/images/product-thumbnail.jpg')",
                  }}
                />
                {new Array(4).fill(null).map((_, i) => (
                  <div
                    key={i}
                    className='bg-center bg-no-repeat bg-cover col-span-1 w-full h-full'
                    style={{
                      backgroundImage: "url('/images/product-thumbnail.jpg')",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          <Box>
            <Tabs
              value={valueTabs}
              onChange={handleTabsChange}
              aria-label='basic tabs example'
            >
              <Tab
                label='Tentang Hotel'
                {...a11yProps(0)}
                className='!normal-case'
              />
              <Tab
                label='Fasilitas'
                {...a11yProps(1)}
                className='!normal-case'
              />
              <Tab label='Kamar' {...a11yProps(2)} className='!normal-case' />
              <Tab label='Review' {...a11yProps(3)} className='!normal-case' />
              <Tab label='Lokasi' {...a11yProps(4)} className='!normal-case' />
              <Tab
                label='Kebijakan Hotel'
                {...a11yProps(5)}
                className='!normal-case'
              />
            </Tabs>
            <TabContent
              value={valueTabs}
              index={0}
              className='whitespace-pre-line'
            >
              <p>
                Berlokasi di Cengkareng, Jakarta Barat, Hilton Garden Inn
                Jakarta Taman Palem merupakan hotel bintang 5 yang menawarkan
                penginapan yang nyaman dilengkapi dengan layanan resepsionis 24
                jam dan fasilitas rapat.
              </p>
              <br />
              <p>
                Kamar ber-AC dengan desain modern dan menenangkan yang
                ditawarkan dilengkapi dengan TV layar datar, meja kerja, dan
                kasur yang nyaman. Kamar mandi dilengkapi dengan shower dan
                wastafel bercermin.
              </p>
              <br />
              <p>
                Restoran Garden Grille & Bar menyediakan berbagai pilihan
                hidangan fresh, sarapan cooked-to-order, dan cocktail pada bar.
                Pilihan restoran yang terletak dekat dengan akomodasi yaitu
                Shirato by Dailybox dan Yoshinoya Green Sedayu Mall. Fasilitas
                lain yang ditawarkan yaitu pusat kebugaran dan kolam renang yang
                menghadap ke cakrawala kota. Bandara Internasional
                Soekarno-Hatta berjarak 8.20 km dari hotel.
              </p>
              <br />
              <p>
                Destinasi populer yang terdapat dekat dengan hotel adalah Palm
                Bay Waterpark, Waterbom Jakarta, dan PIK Avenue Mall.
              </p>
            </TabContent>
            <TabContent
              value={valueTabs}
              index={1}
              className='[&>div]:flex [&>div]:w-full [&>div]:gap-4 [&>div]:flex-col text-center'
            >
              {new Array(5).fill(null).map((_, i) => (
                <div
                  className='grid grid-cols-5 gap-4 my-2'
                  key={`facility-${i}`}
                >
                  <div className='flex gap-2'>
                    <Image src={icLaundry} alt='laundry' width={20} />
                    <Typography>Laundry</Typography>
                  </div>
                  <div className='flex gap-2'>
                    <Image src={icSwimmingPool} alt='SwimmingPool' width={20} />
                    <Typography>Kolam Renang</Typography>
                  </div>
                  <div className='flex gap-2'>
                    <Image src={icReceptionist} alt='Receptionist' width={20} />
                    <Typography>Receptionist</Typography>
                  </div>
                  <div className='flex gap-2'>
                    <Image src={icGym} alt='Gym' width={20} />
                    <Typography>Gym</Typography>
                  </div>
                  <div className='flex gap-2'>
                    <Image src={icSpa} alt='Spa' width={20} />
                    <Typography>Spa</Typography>
                  </div>
                </div>
              ))}
              <Button className='!mt-2 !normal-case !mx-auto'>
                Tampilkan lebih banyak
              </Button>
            </TabContent>
            <TabContent
              value={valueTabs}
              index={2}
              className='[&>div]:flex [&>div]:flex-col [&>div]:w-full [&>div]:gap-8'
            >
              {new Array(2).fill(null).map((_, i) => (
                <div key={`kamar-${i}`} className='flex gap-4'>
                  <div className='rounded-2xl overflow-hidden drop-shadow-lg bg-white h-fit'>
                    <div
                      className='rounded-2xl bg-center bg-cover bg-no-repeat min-w-96 h-fit min-h-[12.5rem]'
                      style={{
                        backgroundImage: "url('/images/product-thumbnail.jpg')",
                      }}
                    />
                    <div className='flex justify-between gap-4 p-4'>
                      <Typography>Kamar Twin Bed</Typography>
                      <Typography>
                        42 <sup>m2</sup>
                      </Typography>
                    </div>
                  </div>
                  <div className='flex flex-col gap-4 w-full'>
                    {new Array(3).fill(null).map((_, id) => (
                      <div
                        key={`detail-${i}-${id}`}
                        className='bg-white drop-shadow-xl rounded-2xl p-4 flex gap-4 w-full justify-between min-h-[12.5rem]'
                      >
                        <div className='w-full flex flex-col gap-4'>
                          <Typography
                            variant='body1'
                            className='!font-semibold'
                          >
                            Kamar, 2 Tempat Tidur Twin
                          </Typography>
                          <div className='flex gap-2 items-center'>
                            <Button
                              variant='contained'
                              className='!rounded-2xl !normal-case'
                              size='small'
                            >
                              Bisa <i className='ml-1'>refund</i>
                            </Button>
                            <Button
                              variant='contained'
                              className='!rounded-2xl !normal-case'
                              size='small'
                            >
                              Bisa <i className='ml-1'>reschedule</i>
                            </Button>
                          </div>
                          <div className='flex gap-4 flex-wrap w-full'>
                            <div className='flex gap-2 px-4'>
                              <Image src={icPerson} alt='visitor' />
                              <Typography variant='body1'>2 Tamu</Typography>
                            </div>
                            <div className='flex gap-2 px-4'>
                              <Image src={icBed} alt='bed' />
                              <Typography variant='body1'>
                                1 Twin Bed
                              </Typography>
                            </div>
                            <div className='flex gap-2 px-4'>
                              <Image
                                src={icBreakfast}
                                alt='breakfast'
                                width={20}
                              />
                              <Typography variant='body1'>Sarapan</Typography>
                            </div>
                            <div className='flex gap-2 px-4'>
                              <Image src={icWifi} alt='wifi' width={20} />
                              <Typography variant='body1'>
                                Wifi Gratis
                              </Typography>
                            </div>
                          </div>
                        </div>
                        <div className='min-w-72 text-right self-end'>
                          <Typography
                            color='textDisabled'
                            variant='h6'
                            className='!font-semibold line-through'
                          >
                            IDR 99.999.999
                          </Typography>
                          <div className='flex gap-2 justify-end items-baseline'>
                            <Typography
                              color='primary'
                              variant='h6'
                              className='!font-bold'
                            >
                              IDR 99.999.999
                            </Typography>
                            <Typography variant='body1'>/ malam</Typography>
                          </div>
                          <Button
                            variant='contained'
                            className='!rounded-xl !mt-4'
                          >
                            Pilih Kamar
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </TabContent>
            <TabContent value={valueTabs} index={3}>
              <Typography>Belum ada review untuk hotel ini</Typography>
            </TabContent>
            <TabContent value={valueTabs} index={4}>
              <div className='flex gap-4'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.9390151431508!2d106.72653547583761!3d-6.138895493848001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1d772ed6f4d7%3A0x32884c7782eb6492!2sHilton%20Garden%20Inn%20Jakarta%20Taman%20Palem!5e0!3m2!1sid!2sid!4v1742429932287!5m2!1sid!2sid'
                  allowFullScreen
                  className='w-full min-h-96 rounded-xl'
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                />
                <div className='w-full flex flex-col gap-4'>
                  <div>
                    <Typography>
                      Jalan Taman Palem Lestari Blok 13 no 1, Cengkareng,
                      Jakarta Barat
                    </Typography>
                    <Button variant='text' className='!p-0 !underline'>
                      Lihat peta
                    </Button>
                  </div>
                  <div className='flex gap-4'>
                    <Image src={icShop} alt='shop' width={22} />
                    <Typography variant='body1'>
                      Dekat dengan mall Taman Palem
                    </Typography>
                  </div>
                  <div className='flex gap-4'>
                    <Image src={icShop} alt='shop' width={22} />
                    <Typography variant='body1'>Dekat dengan PIK 2</Typography>
                  </div>
                  <div className='flex gap-4'>
                    <Image src={icShop} alt='shop' width={22} />
                    <Typography variant='body1'>
                      Dekat dengan Helens Kitchen
                    </Typography>
                  </div>
                </div>
              </div>
            </TabContent>
            <TabContent value={valueTabs} index={5}>
              <h2>Prosedur Check-in</h2>
              <ul className='list-disc pl-6'>
                <li>
                  <strong>Check-in:</strong> 15:00 - 23:59
                </li>
                <li>
                  <strong>Check-out:</strong> 11:00
                </li>
              </ul>
              <br />

              <h3>Kebijakan Check-in</h3>
              <ul className='list-disc pl-6'>
                <li>
                  Biaya penambahan orang dapat berlaku dan berbeda-beda menurut
                  kebijakan properti.
                </li>
                <li>
                  Tanda pengenal berfoto yang dikeluarkan oleh pemerintah dan
                  kartu kredit, kartu debit, atau deposit uang tunai diperlukan
                  saat check-in untuk biaya tidak terduga.
                </li>
                <li>
                  Pemenuhan permintaan khusus bergantung pada ketersediaan
                  sewaktu check-in dan mungkin menimbulkan biaya tambahan;
                  permintaan khusus tidak dapat dijamin.
                </li>
                <li>
                  Properti ini menerima kartu kredit; tidak menerima uang tunai.
                </li>
                <li>Tersedia transaksi non-tunai.</li>
                <li>
                  Fitur keamanan di properti ini termasuk alat pemadam api,
                  sistem keamanan, dan P3K.
                </li>
                <li>
                  Properti ini menegaskan bahwa mereka mengikuti praktik
                  sanitasi dari panduan CleanStay (Hilton).
                </li>
                <li>
                  <strong>Bellboy atau resepsionis</strong> akan menyambut tamu
                  saat kedatangan.
                </li>
              </ul>
              <p>
                <em>
                  Selengkapnya: Mau check-in lebih awal? Kamu bisa isi
                  Permintaan Khusus di halaman pemesanan.
                </em>
              </p>

              <br />
              <h2>Kebijakan Lainnya</h2>

              <h3>Anak</h3>
              <ul className='list-disc pl-6'>
                <li>Tamu umur berapa pun bisa menginap di sini.</li>
                <li>
                  Anak-anak 18 tahun ke atas dianggap sebagai tamu dewasa.
                </li>
                <li>
                  Pastikan umur anak yang menginap sesuai dengan detail
                  pemesanan. Jika berbeda, tamu mungkin akan dikenakan biaya
                  tambahan saat check-in.
                </li>
              </ul>

              <br />
              <h3>Deposit</h3>
              <p>Tamu perlu membayar deposit saat check-in.</p>

              <br />
              <h3>Umur</h3>
              <p>Tamu umur berapa pun bisa menginap di sini.</p>

              <br />
              <h3>Sarapan</h3>
              <p>Sarapan tersedia pukul 07:00 - 10:00 waktu lokal.</p>

              <br />
              <h3>Hewan Peliharaan</h3>
              <p>Tidak diperbolehkan membawa hewan peliharaan.</p>

              <br />
              <h3>Merokok</h3>
              <p>Kamar bebas asap rokok.</p>

              <br />
              <h3>Alkohol</h3>
              <p>Minuman beralkohol diperbolehkan.</p>
            </TabContent>
          </Box>
        </div>
      </AppContainer>
    );
}

export default DetailPage;
