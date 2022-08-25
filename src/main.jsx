import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
// import { Provider } from 'jotai'
import { Provider } from 'react-redux'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import './index.css'
import App from './App'
import store from './store'

const client = new QueryClient()

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      </QueryClientProvider>
    </Provider>
  </BrowserRouter>
)

// ReactDOM.render(
//   <BrowserRouter>
//     <Provider>
//       <App />
//     </Provider>
//   </BrowserRouter>,
//   document.getElementById('root')
// )
