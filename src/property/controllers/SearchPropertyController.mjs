/* eslint-disable max-len */

import { default as PropertyPresenter } from '../presenters/SearchProperty.mjs'
import PropertyRepository from '../repositories/Property.mjs'
import RepositoryImpl from '../../../infra/repository/index.mjs'
import SearchProperty from '../useCases/SearchProperty.mjs'
import { default as SearchUsersIdValidator } from '../validators/SearchUsersById.mjs'

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
    const userId = request.query
    await SearchUsersIdValidator.validate(userId)

    const searchUsersIdUseCase = new SearchUsersId(Repository)
    const resultUsers = await searchUsersIdUseCase.searchById(userId)
    const presentUser = await UserIdPresenter.present(resultUsers)
    return response.status(200).json(presentUser)
  } catch (error) {
    return next(error)
  }
}