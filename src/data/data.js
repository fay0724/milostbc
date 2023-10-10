import logo from "../assets/logo.png"
import heroimg from "../assets/cake.png"
import logoOval from "../assets/logo-oval.png"

import hightlightimg from "../assets/hightlightimg.png"
import sneakershoe from "../assets/sneaker.png"

import clip from "../assets/video/clip2.mp4"
import vcover1 from "../assets/video/vcover4.png"
import vcover2 from "../assets/video/vcover5.png"
import vcover3 from "../assets/video/vcover6.png"

import psale1 from "../assets/nike-air-red.png"
import psale2 from "../assets/nike-adapt-bb.png"
import psale3 from "../assets/nike-adapt-bb-smart.png"

import product1 from "../assets/product1.png"
import product2 from "../assets/product2.png"
import product3 from "../assets/product3.png"
import product4 from "../assets/product4.png"
import product5 from "../assets/product5.png"
import product6 from "../assets/product6.png"
import product7 from "../assets/product7777.png"
import product8 from "../assets/product8.png"
import product9 from "../assets/product9.png"
import product10 from "../assets/product10.png"
import product11 from "../assets/product11.png"
import product12 from "../assets/product12.png"

import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
import twitter from "../assets/twitter.svg"
import youtube from "../assets/youtube.svg"
import messenger from "../assets/messenger.svg"

const heroapi = {
  title: logoOval,
  img: heroimg,
  btntext: "Explore Product",
  videos: [
    { imgsrc: vcover1, clip: clip },
    { imgsrc: vcover2, clip: clip },
    { imgsrc: vcover3, clip: clip },
  ],
  sociallinks: [
    {
      icon: facebook,
      link: "https://www.facebook.com/profile.php?id=100010155211945",
    },
    { icon: messenger, link: "https://www.facebook.com/messages/requests" },
    { icon: instagram, link: "https://www.instagram.com/milost_bc/?hl=id" },
    {
      icon: twitter,
      link: "https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiaWQifQ%3D%3D%22%7D",
    },
    {
      icon: youtube,
      link: "https://www.youtube.com/channel/UCPGLGxrrGSOJ72i8iZd9biQ",
    },
  ],
}

const popularsales = {
  title: "New Arrival",
  items: [
    {
      id: "0p0x1",
      title: "CHOCOFFEE SLICE",
      text: "Dengan toping Kopi dan Cokelat",
      rating: "4.9",
      btn: "Beli Sekarang",
      img: psale2,
      price: "20.000",
      color: "from-blue-600 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0p0x2",
      title: "BOLU VANILA",
      text: "Warna dan Rasa yang seirama",
      rating: "4.5",
      btn: "Beli Sekarang",
      img: psale1,
      price: "80.000",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0p0x3",
      title: "BROWNIES TOPING CHOCO",
      text: "Toping cokelat yang sangat Gurih",
      rating: "5+",
      btn: "Beli Sekarang",
      img: psale3,
      price: "33.000",
      color: "from-violet-500 to-indigo-500",
      shadow: "shadow-lg shadow-violet-500",
    },
  ],
}

const highlight = {
  heading: "HALAL, TANPA BAHAN PENGAWET",
  title: "dibuat dari bahan Premium",
  text: "Pas dilidah membuat disetiap gigitan penuh rasa yang sangat Delicious.",
  btn: "Pesan Sekarang",
  url: "https://www.milostbc.com",
  img: hightlightimg,
}

const sneaker = {
  heading: "HIGIENIS",
  title: "Lembut Serta tidak pekat dilidah",
  text: "Karena menggunakan bahan yang Premium sehingga terjaga rasa serta tekstur dari setiap produk yang kami jual. membuat semakin menarik.",
  btn: "Pesan Sekarang",
  url: "https://www.milostbc.com",
  img: sneakershoe,
}

const toprateslaes = {
  title: "Varian dan Rasa",
  items: [
    {
      id: "0M0x1",
      title: "CHOCO CLASSIC",
      text: "Roti Manis",
      rating: "5+",
      btn: "Pesan Sekarang",
      img: product7,
      price: "8.000",
      color: "from-sky-600 to-indigo-600",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x2",
      title: "ROTI TAWAR",
      text: "Roti Tawar",
      rating: "5+",
      btn: "Pesan Sekarang",
      img: product2,
      price: "13.000",
      color: "from-green-500 to-emerald-500",
      shadow: "shadow-lg shadow-green-500",
    },
    {
      id: "0M0x3",
      title: "TRIPLE CHOCO SLICE",
      text: "Cake Slice",
      rating: "5+",
      btn: "Pesan Sekarang",
      img: product3,
      price: "20.000",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0M0x4",
      title: "TART 24",
      text: "Cake Tart",
      rating: "5+",
      btn: "Pesan Sekarang",
      img: product4,
      price: "275.000",
      color: "from-orange-500 to-amber-500",
      shadow: "shadow-lg shadow-orange-500",
    },
    {
      id: "0M0x5",
      title: "CHEESE CAKE CHOCOLATE",
      text: "Cake Slice",
      rating: "5+",
      btn: "Pesan Sekarang",
      img: product5,
      price: "25.000",
      color: "from-gray-900 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x6",
      title: "TART 16",
      text: "Cake Tart",
      rating: "5+",
      btn: "Pesan Sekarang",
      img: product6,
      price: "175.000",
      color: "from-blue-500 to-cyan-500",
      shadow: "shadow-lg shadow-cyan-500",
    },
    {
      id: "0M0x7",
      title: "CHEESE CAKE BLUBERRY",
      text: "Cake Slice",
      rating: "5+",
      btn: "Pesan Sekarang",
      img: product1,
      price: "25.000",
      color: "from-yellow-500 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x8",
      title: "BOLU MOCHA",
      text: "Lainnya",
      rating: "5+",
      btn: "Pesan Sekarang",
      img: product9,
      price: "80.000",
      color: "from-[#936550] to-orange-900",
      shadow: "shadow-lg shadow-orange-800",
    },
    {
      id: "0M0x9",
      title: "BROWNIES TOPPING CHOCO",
      text: "Lainnya",
      rating: "5+",
      btn: "Pesan Sekarang",
      img: product10,
      price: "33.000",
      color: "from-indigo-700 to-indigo-700",
      shadow: "shadow-lg shadow-indigo-500",
    },
    {
      id: "0M0x10",
      title: "DOUBLE CHOCO ROLL",
      text: "Lainnya",
      rating: "5+",
      btn: "Pesan Sekarang",
      img: product12,
      price: "100.000",
      color: "from-green-600 to-lime-500",
      shadow: "shadow-lg shadow-lime-500",
    },
    {
      id: "0M0x11",
      title: "ROLL SLICE DOUBLE CHOCO",
      text: "Cake Slice",
      rating: "5+",
      btn: "Pesan Sekarang",
      img: product11,
      price: "7.000",
      color: "from-slate-900 to-black",
      shadow: "shadow-lg shadow-black",
    },
    {
      id: "0M0x12",
      title: "BEEF AND CHEESE",
      text: "Roti Asin",
      rating: "5+",
      btn: "Pesan Sekarang",
      img: product8,
      price: "11.000",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
  ],
}

const story = {
  title: "Segera Hadir",
  news: [
    {
      title: "Oleh-Oleh Milost",
      text: "Nantikan Oleh-Oleh Milost yang akan Launching dalam waktu dekat ini. rasa dan tekstur yang membuat ketagihan dan selalu ingat produk-produk dari Milost.",
      img: logo,
      url: "https://www.milostbc.com",
      like: "3/5",
      time: "11 Mins",
      by: "Jared Ebanks",
      btn: "Read More",
    },
    {
      title: "Oleh-Oleh Milost",
      text: "Nantikan Oleh-Oleh Milost yang akan Launching dalam waktu dekat ini. rasa dan tekstur yang membuat ketagihan dan selalu ingat produk-produk dari Milost.",
      img: logo,
      url: "https://www.milostbc.com",
      like: "3/5",
      time: "11 Mins",
      by: "Jared Ebanks",
      btn: "Read More",
    },
    {
      title: "Oleh-Oleh Milost",
      text: "Nantikan Oleh-Oleh Milost yang akan Launching dalam waktu dekat ini. rasa dan tekstur yang membuat ketagihan dan selalu ingat produk-produk dari Milost.",
      img: logo,
      url: "https://www.milostbc.com",
      like: "3/5",
      time: "11 Mins",
      by: "Jared Ebanks",
      btn: "Read More",
    },
    {
      title: "Oleh-Oleh Milost",
      text: "Nantikan Oleh-Oleh Milost yang akan Launching dalam waktu dekat ini. rasa dan tekstur yang membuat ketagihan dan selalu ingat produk-produk dari Milost.",
      img: logo,
      url: "https://www.milostbc.com",
      like: "3/5",
      time: "11 Mins",
      by: "Jared Ebanks",
      btn: "Read More",
    },
    {
      title: "Oleh-Oleh Milost",
      text: "Nantikan Oleh-Oleh Milost yang akan Launching dalam waktu dekat ini. rasa dan tekstur yang membuat ketagihan dan selalu ingat produk-produk dari Milost.",
      img: logo,
      url: "https://www.milostbc.com",
      like: "3/5",
      time: "11 Mins",
      by: "Jared Ebanks",
      btn: "Read More",
    },
    {
      title: "Oleh-Oleh Milost",
      text: "Nantikan Oleh-Oleh Milost yang akan Launching dalam waktu dekat ini. rasa dan tekstur yang membuat ketagihan dan selalu ingat produk-produk dari Milost.",
      img: logo,
      url: "https://www.milostbc.com",
      like: "3/5",
      time: "11 Mins",
      by: "Jared Ebanks",
      btn: "Read More",
    },
    {
      title: "Oleh-Oleh Milost",
      text: "Nantikan Oleh-Oleh Milost yang akan Launching dalam waktu dekat ini. rasa dan tekstur yang membuat ketagihan dan selalu ingat produk-produk dari Milost.",
      img: logo,
      url: "https://www.milostbc.com",
      like: "3/5",
      time: "11 Mins",
      by: "Jared Ebanks",
      btn: "Read More",
    },
    {
      title: "Oleh-Oleh Milost",
      text: "Nantikan Oleh-Oleh Milost yang akan Launching dalam waktu dekat ini. rasa dan tekstur yang membuat ketagihan dan selalu ingat produk-produk dari Milost.",
      img: logo,
      url: "https://www.milostbc.com",
      like: "3/5",
      time: "11 Mins",
      by: "Jared Ebanks",
      btn: "Read More",
    },
    {
      title: "Oleh-Oleh Milost",
      text: "Nantikan Oleh-Oleh Milost yang akan Launching dalam waktu dekat ini. rasa dan tekstur yang membuat ketagihan dan selalu ingat produk-produk dari Milost.",
      img: logo,
      url: "https://www.milostbc.com",
      like: "3/5",
      time: "11 Mins",
      by: "Jared Ebanks",
      btn: "Read More",
    },
  ],
}

const footerAPI = {
  titles: [{ title: "About US" }, { title: "Get Help" }, { title: "Company" }],
  links: [
    [
      { link: "News" },
      { link: "Careers" },
      { link: "Investors" },
      { link: "Prupose" },
      { link: "Sustainability" },
    ],
    [
      { link: "Order Status" },
      { link: "Shipping & Delivery" },
      { link: "Payment Options" },
      { link: "Gift Card Balance" },
      { link: "Contact Us" },
      { link: "FAQ" },
      { link: "Blog" },
    ],
    [
      { link: "Gift Cards" },
      { link: "Promotions" },
      { link: "Find A Store" },
      { link: "Signup" },
      { link: "Jouneral" },
      { link: "Send Us Feeback" },
    ],
  ],
}

export {
  heroapi,
  footerAPI,
  story,
  sneaker,
  highlight,
  toprateslaes,
  popularsales,
}
