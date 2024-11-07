import { configureStore } from '@reduxjs/toolkit'
import ProfileReducer from './reducer/ProfileSlice'

// Configuração raiz da store, deve ser adicionados todos os reducers,
//  dentro do objeto de reducers para serem acessados pelos componentes do projeto.
export const store = configureStore({
  reducer: {
    ProfileReducer
  },
})