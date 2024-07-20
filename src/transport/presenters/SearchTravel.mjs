import UUIDGenerator from '../../support/UUIDGenerator.mjs'

const presenterMap = (data) => {
  const resultRoutes = data.map((Temp) => {
    let id = UUIDGenerator.from(Temp._id)


    let result = {
      id: id.toString(),
      routeDesc: Temp.rota?.name,  
      routeId: Temp.rota?.id,  
      busDesc: Temp.bus?.name,
      busId: Temp.bus?.id,
      dateStart: Temp.dataPartida,
      dateFinish: Temp.dataChegada,      
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
