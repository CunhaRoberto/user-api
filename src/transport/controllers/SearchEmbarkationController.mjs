/* eslint-disable max-len */

import { default as EmbarkationPresenter } from '../presenters/SearchEmbarkation.mjs'
import EmbarkationRepository from '../repositories/Embarkation.mjs'
import RepositoryImpl from '../../../infra/repository/index.mjs'
import SearchUsersId from '../useCases/SearchUsersById.mjs'

const Repository = new EmbarkationRepository(RepositoryImpl)

export async function search(request, response, next) {
  try {
    
    const searchUsersIdUseCase = new SearchUsersId(Repository)
    const result = await searchUsersIdUseCase.execute()
    const presentUser = await Embarkation.present(result)
    return response.status(200).json(presentUser)
  } catch (error) {
    return next(error)
  }
}
