import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import './lib/i18n.js'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

// A store é a "Loja" de estado, onde faz todo o gerencimanto de dados da aplicação, como ela está por fora do App, tudo que está dentro de App tem acesso a store, então qualquer componente utilizando o useAppSelector consegue acessar a store e pegar dados de lá, deve ser passado a prop store para o Provider que é exatamente todos os reducers

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
  </React.StrictMode>,
)
