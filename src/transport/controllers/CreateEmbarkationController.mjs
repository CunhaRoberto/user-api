/* eslint-disable max-len */

import { default as EmbarkationPresenter } from '../presenters/CreateEmbarkation.mjs'
import EmbarkationRepository from '../repositories/Embarkation.mjs'
import RepositoryImpl from '../../../infra/repository/index.mjs'
import CreateUserId from '../useCases/CreateEmbarkation.mjs'
import { default as CreateEmbarkationValidator } from '../validators/CreateEmbarkation.mjs'


const Repository = new EmbarkationRepository(RepositoryImpl)

export async function create(request, response, next) {
  try {
    const embarkationDto = request.body
    await CreateEmbarkationValidator.validate(embarkationDto)
       
    const createEmbarkationUseCase = new CreateUserId(Repository)
    const result = await createEmbarkationUseCase.execute(embarkationDto)
    const presentEmbarkation = await EmbarkationPresenter.present(result)
    return response.status(201).json(presentEmbarkation)
  } catch (error) {
    return next(error)
  }
}
