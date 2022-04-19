import Head from 'next/head'
import Image from 'next/image'
import Blog from '../components/Blog'
import ChurchHeader from '../components/ChurchHeader'
import ChurchNav from '../components/ChurchNav'
import Discovery from '../components/Discovery'
import Family from '../components/Family'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <ChurchNav/>
    <ChurchHeader/>
    <Family/>
    <Discovery/>
    <Blog/>
    </>
  )
}
