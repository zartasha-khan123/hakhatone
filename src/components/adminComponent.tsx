"use client"
import React, { useEffect } from 'react'
import {useUser} from "@clerk/nextjs"
import { useRouter } from 'next/navigation'

function AdminPageComponent() {

    const {isLoaded,  user} = useUser()

    const router = useRouter()
        //  console.log("😁 ~ Admincomponent ~ isSignedIn", isSignedIn)
        //  console.log("😁~ Admincomponent ~ user", user)
        //  console.log("😁~ Admincomponent ~ isLoaded", isLoaded)


        useEffect(()=>{

            if (isLoaded){
                const role = (user?.publicMetadata as {role?:string})?.role;

                if(!user || role !== 'admin' ){
                    router.push('/')
                }

            }
        },[isLoaded,user,router])


  return (
    <div className=' h-screen flex items-center justify-center'>
      <h1>Admin Page</h1>
    </div>
  )
}

export default AdminPageComponent
