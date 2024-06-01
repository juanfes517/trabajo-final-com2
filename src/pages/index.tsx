"use client"

import { useState } from "react"
import axios from "axios"
import { CardTitle, CardDescription, CardHeader, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  name: string
  lastName: string
  email: string
  birthdate: Date
  phoneNumber: string
}

export default function Home() {
  const [message, setMessage] = useState('')

  const { register, handleSubmit, reset } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    request(data)
  }

  const request = async (data: any) => {
    try {
      const response = await axios.post(
        '/api/save-input', 
        { 
          name: data.name,
          lastName: data.lastName,
          email: data.email,
          birthdate: data.birthdate,
          phoneNumber: data.phoneNumber
        }
      )

      if (response.status === 200) {
        setMessage('Input saved successfully');
        window.alert(message)
        reset()
      } else {
        setMessage('Error saving input');
      }
    } catch (error) {
      setMessage('Error saving input');
    }
  }

  return (
    <div className="h-screen w-screen flex justify-center	items-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Registro de Usuario</CardTitle>
          <CardDescription>Completa el siguiente formulario para crear tu cuenta.</CardDescription>
        </CardHeader>
        <form className="space-y-8 p-6 pt-0">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre</Label>
              <Input id="name" placeholder="Ingresa tu nombre" {...register("name")}/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Apellido</Label>
              <Input id="lastName" placeholder="Ingresa tu apellido" {...register("lastName")} />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input id="email" placeholder="Ingresa tu correo electrónico" type="email" {...register("email")}/>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="birthDate">Fecha de nacimiento</Label>
              <Input id="birthDate" type="date" {...register("birthdate")}/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Número de teléfono</Label>
              <Input id="phone" placeholder="Número de teléfono" type="tel" {...register("phoneNumber")}/>
            </div>
          </div>
        </form>
        <CardFooter>
          <Button type="submit" onClick={handleSubmit(onSubmit)}>Enviar</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
