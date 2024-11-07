import { createSlice } from '@reduxjs/toolkit'

// Estado inicial da "Loja" profile,
// ele é atualizado de acordo com as ações do reducer,
// Quando a requisição é acionado o estado de carregamento é ativado ajudando o componente poder renderizar algum componente de carregamento 
// quando a requisição da sucesso ele adiciona e substitui o estado inicial vazio do item pelos dados que vieram da API, substituindo também o carregamento para false, parando o componente de carregamento e exibindo o que for necessário.
// se houver erro adiciona no estado do erro para facilitar a exibição de mensagens de erro.
const initialState = {
  item: {},
  isLoading: false,
  error: null
}

// No Slice que é o ProfileReducer ele possui as ações e controla a troca de estado de acordo com a ação que é chamada.
const ProfileReducer = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    getSingleProfileRequest(state) {
      state.status = 'GET_SINGLE_PROFILE_REQUEST'
      state.isLoading = true
    },
    getSingleProfileSuccess(state,  action) {
      state.status = 'GET_SINGLE_PROFILE_SUCCESS'
      state.isLoading = false
      state.item = action.payload
    },
    getSingleProfileFailure(state, action) {
      state.status = 'GET_SINGLE_PROFILE_FAILURE'
      state.isLoading = false
      state.error = action.payload
    }
  }
})

// Exporta as ações para serem utilizadas no arquivo de service onde faz a requisição
export const {
  getSingleProfileRequest,
  getSingleProfileSuccess,
  getSingleProfileFailure,

} = ProfileReducer.actions

export default ProfileReducer.reducer