// import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'
import { NextPage } from 'next';

const inter = Inter({ subsets: ['latin'] })

const HomePage : NextPage = () =>  {
  return (
    <>
      <h1>Pokemons static</h1>
    </>
  )
}


export default HomePage;