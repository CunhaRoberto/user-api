/* eslint-disable max-len */

import { default as TravelPresenter } from '../presenters/SearchTravel.mjs'
import TravelRepository from '../repositories/Visit.mjs'
import RepositoryImpl from '../../../infra/repository/index.mjs'
import Travel from '../useCases/Visit.mjs'
import { default as CreateTravelValidator } from '../validators/CreateTravel.mjs'
import { default as DeleteTravelValidator } from '../validators/DeleteTravel.mjs'

const Repository = new TravelRepository(RepositoryImpl)

export async function search(request, response, next) {
  try {
    
    const searchTravelUseCase = new Travel(Repository)
    const result = await searchTravelUseCase.search()
    const presentUser = await TravelPresenter.presentMap(result)
    return response.status(200).json(presentUser)
  } catch (error) {
    return next(error)
  } 
  
}

export async function create(request, response, next) {
  try {
    const dto = request.body
    // await CreateTravelValidator.validate(dto)

    const createTravelUseCase = new Travel(Repository)
    const result = await createTravelUseCase.create(dto)
    const presentUser = await TravelPresenter.present(result)
    return response.status(201).json(presentUser)
  } catch (error) {
    return next(error)
  } 
  
}
export async function update(request, response, next) {
  try {
    
    const searchTravelUseCase = new Travel(Repository)
    const result = await searchTravelUseCase.update()
    const presentUser = await TravelPresenter.presentMap(result)
    return response.status(200).json(presentUser)
  } catch (error) {
    return next(error)
  } 
  
}
export async function remove(request, response, next) {
  try {

    const travelId = request.query
    await DeleteTravelValidator.validate(travelId)
    
    const deleteTravelUseCase = new Travel(Repository)
    const result = await deleteTravelUseCase.remove(travelId)
    return response.status(200).json(result)
  } catch (error) {
    return next(error)
  } 
  
}