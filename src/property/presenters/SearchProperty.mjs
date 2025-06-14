import UUIDGenerator from '../../support/UUIDGenerator.mjs'

const presenterMap = (data) => {
  const resultUsersSpecifications = data.map((Temp) => {
    let id = UUIDGenerator.from(Temp._id)
    delete Temp._id
    delete Temp.password

    let result = {
      id: id.toString(),
      ...Temp
    }

    return result
  })

  return resultUsersSpecifications
}

const presenter = async (data) => {
  const obj = data.toObject ? data.toObject() : data;

  // Remove campos indesejados
  delete obj._id;
  delete obj.password;

  // Se tiver imagens, retorna só os metadados + a URL para download
  if (Array.isArray(obj.photos)) {
    obj.photos = obj.photos.map((photo, index) => {
      return {
        originalname: photo.originalname,
        mimetype: photo.mimetype,
        size: photo.size,
        url: `/image/${data._id}/${index}` // URL que o front pode acessar
      };
    });
  }

  return obj;
};


export default {
  present: presenter,
  presentMap: presenterMap
}
