'use client'
import React from 'react'
import {User} from 'lucide-react'
import {Input} from '../ui/input'
import {Button} from '../ui/button'
import * as z from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
// import { useToast } from '../ui/use-toast'
import { Toaster } from "@/components/ui/sonner"

const schema = z.object({
    name:z.string().min(2,{message:"Name must be at least 2 characters long"}),
    email:z.string().email({message:"Please enter a valid email"}),
    password:z.string().min(6,{message:"Password must be at least 6 characters long"})
})

const RegisterForm = () => {

 const [isLoading,setIsLoading] = useState(false)
 const {register,handleSubmit,formState:{errors}} = useForm({
    resolver:zodResolver(schema)
 })
//  const {toast} = useToast()

  return (
    <form>
     <div className='space-y-4'>
    <div className='relative'>
      <User className='absolute left-3 top-2 h-5 w-5 text-gray-400'/>
      <Input 
      {...register('name')}
      placeholder='Name'
      type="text"
      disabled={isLoading}
      className="pl-10 bg-gray-50 border border-gray-300 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
    <div className='relative'>
      <User className='absolute left-3 top-3 h-5 w-5 text-gray-400'/>
      <Input 
      {...register('email')}
      placeholder='Email'
      type="email"
      disabled={isLoading}
      className="pl-10 bg-gray-50 border border-gray-300 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500"/>
    </div>
    <div className='relative'>
      <User className='absolute left-3 top-3 h-5 w-5 text-gray-400'/>
      <Input 
      {...register('password')}
      placeholder='Password'
      disabled={isLoading}
      type="password"
      className="pl-10 bg-gray-50 border border-gray-300 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500"/>
    </div>
    </div>
    <Button
    type='submit'
    disabled={isLoading} 
    className="w-full hover:bg-gray-800 text-white font-semibold py-3 px-4 rounded-md transition cursor-pointer duration-300 ease-in-out transform hover:scale-105 mt-3">Register</Button>
    </form>
   
  )
}

export default RegisterForm