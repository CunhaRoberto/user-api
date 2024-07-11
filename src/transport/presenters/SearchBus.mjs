import UUIDGenerator from '../../support/UUIDGenerator.mjs'

const presenterMap = (data) => {
  const resultRoutes = data.map((Temp) => {
    let id = UUIDGenerator.from(Temp._id)


    let result = {
      id: id.toString(),
      placa: Temp.placa,
      caracterizado: Temp.caracterizado,
      prefixo: Temp.prefixo,
      isActive: Temp.isActive,
      created_at: Temp.created_at    
    }
    return result
  })

  return resultRoutes
}

const presenter = async (data) => {
  let id = UUIDGenerator.from(data._id)
  let result = {    
    id: id.toString(),
    name: data.name,
    isActive: data.isActive,
    created_at: data.created_at 
  }

  return result
}

export default {
  present: presenter,
  presentMap: presenterMap
}
