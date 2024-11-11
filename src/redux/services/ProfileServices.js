
import axios from 'axios'
import {
  getSingleProfileFailure,
  getSingleProfileRequest,
  getSingleProfileSuccess
} from '../reducer/ProfileSlice'

const GIT_HUB_URL = 'https://api.github.com/users'

// getSingleProfile é a função de requisição, nele chamo a ação de requisição, ao dar sucesso passo para essa ação os dados que vieram da API e então ele é jogado para o reducer e então vai para a "Loja" store, se der erro na requisição será enviado a mensagem de erro retornada pela API.
export const getSingleProfileService = ({ profile }) => async (dispatch) => {
  // Envio na ação o payload, para que seja possível visualizar no redux dev tools as informações passadas e que se possa ver os dados passados.
  dispatch(getSingleProfileRequest({profile}))
  try {
    const response = await axios.get(`${GIT_HUB_URL}/${profile}`)
    if (response.status === 200) {
      dispatch(getSingleProfileSuccess(response.data))
    }
  } catch (error) {
    dispatch(getSingleProfileFailure(error.message))
  }
}
