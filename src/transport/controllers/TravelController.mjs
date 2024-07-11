/* eslint-disable max-len */

import { default as RoutesPresenter } from '../presenters/SearchRoutes.mjs'
import RoutesRepository from '../repositories/Routes.mjs'
import RepositoryImpl from '../../../infra/repository/index.mjs'
import Travel from '../useCases/Travel.mjs'

const Repository = new RoutesRepository(RepositoryImpl)

export async function search(request, response, next) {
  try {
    
    const searchTravelUseCase = new Travel(Repository)
    const result = await searchTravelUseCase.search()
    const presentUser = await RoutesPresenter.presentMap(result)
    return response.status(200).json(presentUser)
  } catch (error) {
    return next(error)
  } 
  
}

export async function create(request, response, next) {
  try {
    
    const createRoutesUseCase = new Travel(Repository)
    const result = await createRoutesUseCase.create()
    const presentUser = await RoutesPresenter.presentMap(result)
    return response.status(200).json(presentUser)
  } catch (error) {
    return next(error)
  } 
  
}
export async function update(request, response, next) {
  try {
    
    const searchRoutesUseCase = new Travel(Repository)
    const result = await searchRoutesUseCase.update()
    const presentUser = await RoutesPresenter.presentMap(result)
    return response.status(200).json(presentUser)
  } catch (error) {
    return next(error)
  } 
  
}
export async function remove(request, response, next) {
  try {
    
    const searchRoutesUseCase = new Travel(Repository)
    const result = await searchRoutesUseCase.remove()
    const presentUser = await RoutesPresenter.presentMap(result)
    return response.status(200).json(presentUser)
  } catch (error) {
    return next(error)
  } 
  
}