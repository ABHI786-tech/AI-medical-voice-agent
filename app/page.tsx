"use client"
import HeroSectionOne from '@/components/hero-section-demo-1'
import { BentoGridThirdDemo } from "@/app/_components/bento-feature"
import React from 'react'

const page = () => {
  return (
    <>
      <div><HeroSectionOne /></div>
      <div>
        <BentoGridThirdDemo />
      </div>
    </>
  )
}

export default page