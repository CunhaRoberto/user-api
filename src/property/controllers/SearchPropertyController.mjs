/* eslint-disable max-len */

import { default as PropertyPresenter } from '../presenters/SearchProperty.mjs'
import PropertyRepository from '../repositories/Property.mjs'
import RepositoryImpl from '../../../infra/repository/index.mjs'
import SearchProperty from '../useCases/SearchProperty.mjs'
import { default as SearchPropertyIdValidator } from '../validators/SearchUsersById.mjs'

const Repository = new PropertyRepository(RepositoryImpl)

export async function search(request, response, next) {
  try {
    const searchPropertyUseCase = new SearchProperty(Repository)
    const result = await searchPropertyUseCase.search()
    const present = await PropertyPresenter.presentMap(result)
    return response.status(200).json(present)
  } catch (error) {
    return next(error)
  }
}

export async function searchById(request, response, next) {
  try {
    const propertyId = request.query
    await SearchPropertyIdValidator.validate(propertyId)

    const searchPropertyIdUseCase = new SearchProperty(Repository)
    const result = await searchPropertyIdUseCase.searchById(propertyId)
    const presentProperty = await PropertyPresenter.present(result)
    return response.status(200).json(presentProperty)
  } catch (error) {
    return next(error)
  }
}