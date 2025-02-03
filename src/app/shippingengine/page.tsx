'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Truck, User, Phone, Home, Building, MapPin, Package, Weight, Ruler } from 'lucide-react'
import  JsonResponseViewer from '@/components/jsonresponse'
import { postRequest } from '@/services/shipmentapi'

export default function ShipmentForm() {
  // Shipment state
  const [carrierId, setCarrierId] = useState('se-1576754')
  const [serviceCode, setServiceCode] = useState('usps_priority_mail_express')

  // Ship To state
  const [shipToName, setShipToName] = useState('')
  const [shipToPhone, setShipToPhone] = useState('')
  const [shipToAddress, setShipToAddress] = useState('')
  const [shipToCity, setShipToCity] = useState('')
  const [shipToState, setShipToState] = useState('')
  const [shipToPostalCode, setShipToPostalCode] = useState('')
  const [shipToCountryCode, setShipToCountryCode] = useState('US')
  const [shipToResidential, setShipToResidential] = useState('yes')

  // Ship From state
  const [shipFromName, setShipFromName] = useState('')
  const [shipFromCompany, setShipFromCompany] = useState('')
  const [shipFromPhone, setShipFromPhone] = useState('')
  const [shipFromAddress, setShipFromAddress] = useState('')
  const [shipFromCity, setShipFromCity] = useState('')
  const [shipFromState, setShipFromState] = useState('')
  const [shipFromPostalCode, setShipFromPostalCode] = useState('')
  const [shipFromCountryCode, setShipFromCountryCode] = useState('US')
  const [shipFromResidential, setShipFromResidential] = useState('no')

  // Package state
  const [weight, setWeight] = useState(0)
  const [weightUnit, setWeightUnit] = useState('ounce')
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)
  const [length, setLength] = useState(0)
  const [dimensionUnit, setDimensionUnit] = useState('inch')

  //ALERT DAILOG

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [shipmentResponse, setShipmentResponse] =useState(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your API
   
   const submitData = {
    to_name:shipToName,
    to_phone: shipToPhone,
      to_address: shipToAddress,
      to_city: shipToCity,
      from_name: shipFromName,
      from_company: shipFromCompany,
      from_phone: shipFromPhone,
      from_address: shipFromAddress,
      from_city: shipFromCity,
      weight_value: weight,
      height,
      width,
  length
      }
   
    const data = await postRequest(submitData) 
    setShipmentResponse(data) 
}

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl mx-auto p-6">
      <Card className="bg-blue-50">
        <CardHeader>
          <CardTitle className="text-blue-700">Shipment Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-4">
            <div className="flex-1">
              <Label htmlFor="carrier_id" className="flex items-center space-x-2">
                <Truck className="w-4 h-4 text-blue-500" />
                <span>Carrier ID</span>
              </Label>
              <Input 
                id="carrier_id" 
                value={carrierId} 
                onChange={(e) => setCarrierId(e.target.value)}
                className="border-blue-300 focus:border-blue-500"
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="service_code" className="flex items-center space-x-2">
                <Package className="w-4 h-4 text-blue-500" />
                <span>Service Code</span>
              </Label>
              <Select value={serviceCode} onValueChange={setServiceCode}>
                <SelectTrigger id="service_code" className="border-blue-300 focus:border-blue-500">
                  <SelectValue placeholder="Select service code" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem key='usps_priority_mail_express'  value="usps_priority_mail_express">USPS Priority Mail Express</SelectItem>
                  <SelectItem key='usps_priority_mail'  value="usps_priority_mail">USPS Priority Mail</SelectItem>
                  <SelectItem key='usps_first_class_mail'   value="usps_first_class_mail">USPS First Class Mail</SelectItem>
                  <SelectItem key='ups_ground'   value="ups_ground">UPS Ground</SelectItem>
                  <SelectItem key='fedex_ground'  value="fedex_ground">FedEx Ground</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-green-50">
        <CardHeader>
          <CardTitle className="text-green-700">Ship To</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-4">
            <div className="flex-1">
              <Label htmlFor="ship_to_name" className="flex items-center space-x-2">
                <User className="w-4 h-4 text-green-500" />
                <span>Name</span>
              </Label>
              <Input 
                id="ship_to_name" 
                value={shipToName} 
                onChange={(e) => setShipToName(e.target.value)}
                className="border-green-300 focus:border-green-500"
              />
              
            </div>
            <div className="flex-1">
              <Label htmlFor="ship_to_phone" className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-green-500" />
                <span>Phone</span>
              </Label>
              <Input 
                id="ship_to_phone" 
                value={shipToPhone} 
                onChange={(e) => setShipToPhone(e.target.value)}
                className="border-green-300 focus:border-green-500"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="ship_to_address" className="flex items-center space-x-2">
              <Home className="w-4 h-4 text-green-500" />
              <span>Address</span>
            </Label>
            <Input 
              id="ship_to_address" 
              value={shipToAddress} 
              onChange={(e) => setShipToAddress(e.target.value)}
              className="border-green-300 focus:border-green-500"
            />
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <Label htmlFor="ship_to_city" className="flex items-center space-x-2">
                <Building className="w-4 h-4 text-green-500" />
                <span>City</span>
              </Label>
              <Input 
                id="ship_to_city" 
                value={shipToCity} 
                onChange={(e) => setShipToCity(e.target.value)}
                className="border-green-300 focus:border-green-500"
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="ship_to_state" className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-green-500" />
                <span>State</span>
              </Label>
              <Input 
                id="ship_to_state" 
                value={shipToState} 
                onChange={(e) => setShipToState(e.target.value)}
                className="border-green-300 focus:border-green-500"
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="ship_to_postal_code" className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-green-500" />
                <span>Postal Code</span>
              </Label>
              <Input 
                id="ship_to_postal_code" 
                value={shipToPostalCode} 
                onChange={(e) => setShipToPostalCode(e.target.value)}
                className="border-green-300 focus:border-green-500"
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <Label htmlFor="ship_to_country_code" className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-green-500" />
                <span>Country Code</span>
              </Label>
              <Input 
                id="ship_to_country_code" 
                value={shipToCountryCode} 
                onChange={(e) => setShipToCountryCode(e.target.value)}
                className="border-green-300 focus:border-green-500"
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="ship_to_residential" className="flex items-center space-x-2">
                <Home className="w-4 h-4 text-green-500" />
                <span>Residential</span>
              </Label>
              <Select value={shipToResidential} onValueChange={setShipToResidential}>
                <SelectTrigger className="border-green-300 focus:border-green-500">
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-purple-50">
        <CardHeader>
          <CardTitle className="text-purple-700">Ship From</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-4">
            <div className="flex-1">
              <Label htmlFor="ship_from_name" className="flex items-center space-x-2">
                <User className="w-4 h-4 text-purple-500" />
                <span>Name</span>
              </Label>
              <Input 
                id="ship_from_name" 
                value={shipFromName} 
                onChange={(e) => setShipFromName(e.target.value)}
                className="border-purple-300 focus:border-purple-500"
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="ship_from_company" className="flex items-center space-x-2">
                <Building className="w-4 h-4 text-purple-500" />
                <span>Company</span>
              </Label>
              <Input 
                id="ship_from_company" 
                value={shipFromCompany} 
                onChange={(e) => setShipFromCompany(e.target.value)}
                className="border-purple-300 focus:border-purple-500"
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <Label htmlFor="ship_from_phone" className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-purple-500" />
                <span>Phone</span>
              </Label>
              <Input 
                id="ship_from_phone" 
                value={shipFromPhone} 
                onChange={(e) => setShipFromPhone(e.target.value)}
                className="border-purple-300 focus:border-purple-500"
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="ship_from_address" className="flex items-center space-x-2">
                <Home className="w-4 h-4 text-purple-500" />
                <span>Address</span>
              </Label>
              <Input 
                id="ship_from_address" 
                value={shipFromAddress} 
                onChange={(e) => setShipFromAddress(e.target.value)}
                className="border-purple-300 focus:border-purple-500"
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <Label htmlFor="ship_from_city" className="flex items-center space-x-2">
                <Building className="w-4 h-4 text-purple-500" />
                <span>City</span>
              </Label>
              <Input 
                id="ship_from_city" 
                value={shipFromCity} 
                onChange={(e) => setShipFromCity(e.target.value)}
                className="border-purple-300 focus:border-purple-500"
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="ship_from_state" className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-purple-500" />
                <span>State</span>
              </Label>
              <Input 
                id="ship_from_state" 
                value={shipFromState} 
                onChange={(e) => setShipFromState(e.target.value)}
                className="border-purple-300 focus:border-purple-500"
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="ship_from_postal_code" className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-purple-500" />
                <span>Postal Code</span>
              </Label>
              <Input 
                id="ship_from_postal_code" 
                value={shipFromPostalCode} 
                onChange={(e) => setShipFromPostalCode(e.target.value)}
                className="border-purple-300 focus:border-purple-500"
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <Label htmlFor="ship_from_country_code" className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-purple-500" />
                <span>Country Code</span>
              </Label>
              <Input 
                id="ship_from_country_code" 
                value={shipFromCountryCode} 
                onChange={(e) => setShipFromCountryCode(e.target.value)}
                className="border-purple-300 focus:border-purple-500"
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="ship_from_residential" className="flex items-center space-x-2">
                <Home className="w-4 h-4 text-purple-500" />
                <span>Residential</span>
              </Label>
              <Select value={shipFromResidential} onValueChange={setShipFromResidential}>
                <SelectTrigger className="border-purple-300 focus:border-purple-500">
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-orange-50">
        <CardHeader>
          <CardTitle className="text-orange-700">Package Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-4">
            <div className="flex-1">
              <Label htmlFor="weight" className="flex items-center space-x-2">
                <Weight className="w-4 h-4 text-orange-500" />
                <span>Weight</span>
              </Label>
              <div className="flex space-x-2">
                <Input 
                  id="weight" 
                  value={weight} 
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="border-orange-300 focus:border-orange-500 flex-1"
                />
                <Select value={weightUnit} onValueChange={setWeightUnit}>
                  <SelectTrigger className="border-orange-300 focus:border-orange-500 w-24">
                    <SelectValue placeholder="Unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ounce">oz</SelectItem>
                    <SelectItem value="pound">lb</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <Label htmlFor="height" className="flex items-center space-x-2">
                <Ruler className="w-4 h-4 text-orange-500" />
                <span>Height</span>
              </Label>
              <Input 
                id="height" 
                value={height} 
                onChange={(e) => setHeight(Number(e.target.value))}
                className="border-orange-300 focus:border-orange-500"
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="width" className="flex items-center space-x-2">
                <Ruler className="w-4 h-4 text-orange-500" />
                <span>Width</span>
              </Label>
              <Input 
                id="width" 
                value={width} 
                onChange={(e) => setWidth(Number(e.target.value))}
                className="border-orange-300 focus:border-orange-500"
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="length" className="flex items-center space-x-2">
                <Ruler className="w-4 h-4 text-orange-500" />
                <span>Length</span>
              </Label>
              <Input 
                id="length" 
                value={length} 
                onChange={(e) => setLength(Number(e.target.value))}
                className="border-orange-300 focus:border-orange-500"
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="dimension_unit" className="flex items-center space-x-2">
                <Ruler className="w-4 h-4 text-orange-500" />
                <span>Unit</span>
              </Label>
              <Select value={dimensionUnit} onValueChange={setDimensionUnit}>
                <SelectTrigger className="border-orange-300 focus:border-orange-500">
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="inch">inch</SelectItem>
                  <SelectItem value="cm">cm</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">
        Submit Shipment
      </Button>
      {shipmentResponse && <JsonResponseViewer data={shipmentResponse}/>}
    </form>
  )
}

