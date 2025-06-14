import { default as Presenter } from '../presenters/CreateUsersById.mjs'
import PropertyRepository from '../repositories/Property.mjs'
import RepositoryImpl from '../../../infra/repository/index.mjs'
import CreateProperty from '../useCases/CreateProperty.mjs'
//import { default as CreateValidator } from '../validators/CreateUsers.mjs'
import bcrypt from 'bcrypt';

const Repository = new PropertyRepository(RepositoryImpl)

export async function create(request, response, next) {
  try {
   
    // await CreateValidator.validate(propertyDto)
    
    // const propertyDto = {
    //   ...request.body,
    //   photos: request.files,     
    //   //photos: (request.files || []).map(({ fieldname, filename, path }) => ({ fieldname, filename,  path }))
    // };
    const propertyDto = request.body
    const createUseCase = new CreateProperty(Repository)
    const result = await createUseCase.execute(propertyDto)
    const present = await Presenter.present(result)
    return response.status(201).json(present)
  } catch (error) {
    return next(error)
  }
}