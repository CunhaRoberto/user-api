/* eslint-disable max-len */

import { default as BusPresenter } from '../presenters/SearchBus.mjs'
import BusRepository from '../repositories/Bus.mjs'
import RepositoryImpl from '../../../infra/repository/index.mjs'
import Bus from '../useCases/Bus.mjs'

const Repository = new BusRepository(RepositoryImpl)

export async function search(request, response, next) {
  try {
    
    const searchBusUseCase = new Bus(Repository)
    const result = await searchBusUseCase.search()
    const presentUser = await BusPresenter.presentMap(result)
    return response.status(200).json(presentUser)
  } catch (error) {
    return next(error)
  } 
  
}

export async function create(request, response, next) {
  try {
    
    const createRoutesUseCase = new Bus(Repository)
    const result = await createRoutesUseCase.create()
    const presentUser = await RoutesPresenter.presentMap(result)
    return response.status(200).json(presentUser)
  } catch (error) {
    return next(error)
  } 
  
}
export async function update(request, response, next) {
  try {
    
    const searchRoutesUseCase = new Bus(Repository)
    const result = await searchRoutesUseCase.update()
    const presentUser = await RoutesPresenter.presentMap(result)
    return response.status(200).json(presentUser)
  } catch (error) {
    return next(error)
  } 
  
}
export async function remove(request, response, next) {
  try {
    
    const searchRoutesUseCase = new Bus(Repository)
    const result = await searchRoutesUseCase.remove()
    const presentUser = await RoutesPresenter.presentMap(result)
    return response.status(200).json(presentUser)
  } catch (error) {
    return next(error)
  } 
  
}