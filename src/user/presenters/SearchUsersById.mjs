import UUIDGenerator from '../../support/UUIDGenerator.mjs'

const presenterMap = (data) => {
  const resultUsersSpecifications = data.map((Temp) => {
    let id = UUIDGenerator.from(Temp._id)
//Analisar atributos de retorno

    let result = {
      id: id.toString(),
      language: Temp.language,
      type: Temp.type,
      idType: Temp.idType,
      yearsUsefulLife: Temp.yearsUsefulLife,

    }

    return result
  })

  return resultUsersSpecifications
}

const presenter = async (data) => {
  let result = {    
    name: data.name,
    email: data.email,
    cpf: data.cpf,
    created_at: data.created_at,
    updated_at: data.updated_at


  }

  return result
}

export default {
  present: presenter,
  presentMap: presenterMap
}
