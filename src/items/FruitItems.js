import React, { useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from './Card';
import Divder from './Divder';
const itemsArray=[
    {
      id: 1,
      image: '1',
      name: 'Green Grapes',
      price: 100
    },
    {
      id: 2,
      image: '2',
      name: 'Pomegranate',
      price: 200
    },
    {
      id: 3,
      image: '3',
      name: 'Black Grapes',
      price: 250
    },
    {
      id: 4,
      image: '4',
      name: 'Grape Fruit',
      price: 300
    },
    {
      id: 5,
      image: '5',
      name: 'Berry',
      price: 250
    },
    {
      id: 6,
      image: '6',
      name: 'lemon',
      price: 150
    }
  ]
  
const FruitItems = () => {
    const [fruits,setFruits]=useState(itemsArray);
    const settings ={
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive:[
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow:3,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow:2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 390,
                settings: {
                    slidesToShow:2,
                    slidesToScroll: 1
                },
            },
    
        ],
    };
  return (
    <>
        <section className='w-11/12 mx-auto my-20'>
        <Divder  title={'Latest'}/>
            <Slider {...settings}>
                {
                    fruits.map((data)=>{
                        return <Card key={data.id} data={data}/>
                    })
                }
            </Slider>
            <Divder id="bestSeller"  title={'Best Seller'}/>
            <Slider {...settings}>
                {
                    fruits.map((data)=>{
                        return <Card key={data.id} data={data}/>
                    })
                }
            </Slider>
            <Divder id="Special" title={'Season Specials'}/>
            <Slider {...settings}>
                {
                    fruits.map((data)=>{
                        return <Card key={data.id} data={data}/>
                    })
                }
            </Slider>
        </section>
    </>
  )
}

export default FruitItems