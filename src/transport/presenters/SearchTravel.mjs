import UUIDGenerator from '../../support/UUIDGenerator.mjs'

const presenterMap = (data) => {
  const resultRoutes = data.map((Temp) => {
    let id = UUIDGenerator.from(Temp._id)    
    Temp.idRoute = UUIDGenerator.from(Temp.idRoute).toString()
    Temp.idBus = UUIDGenerator.from(Temp.idBus).toString()
    delete Temp._id
    let result = {
       id: id.toString(),
      // nameRoute: Temp.nameRoute,  
      // idRoute: UUIDGenerator.from(Temp.idRoute).toString(),  
      // busDesc: Temp.bus?.name,
      // idBus: UUIDGenerator.from(Temp.idBus).toString(),
      // plaqueBus:Temp.plaque,
      // startDate: Temp.startDate,
      // finishDate: Temp.finishDate,      
      // isActive: Temp.isActive,
      // created_at: Temp.created_at    
      ...Temp
    }

    return result
  })

  return resultRoutes
}

const presenter = async (data) => {
  let id = UUIDGenerator.from(data._id)
  let result = {    
    id: id.toString(),
    idBus: data.idBus,
    idRoute: data.idRoute,
    startDate: data.startDate,
    finishDate: data.finishDate,
    isActive: data.isActive,
    created_at: data.created_at 
  }

  return result
}

export default {
  present: presenter,
  presentMap: presenterMap
}
