/* eslint-disable max-len */

import { default as RoutesPresenter } from '../presenters/SearchRoutes.mjs'
import RoutesRepository from '../repositories/Routes.mjs'
import RepositoryImpl from '../../../infra/repository/index.mjs'
import SearchRoutes from '../useCases/SearchRoutes.mjs'

const Repository = new RoutesRepository(RepositoryImpl)

export async function search(request, response, next) {
  try {
    
    const searchRoutesUseCase = new SearchRoutes(Repository)
    const result = await searchRoutesUseCase.execute()
    const presentUser = await RoutesPresenter.presentMap(result)
    return response.status(200).json(presentUser)
  } catch (error) {
    return next(error)
  }
}
