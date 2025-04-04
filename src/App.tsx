import { ErrorBoundary } from "react-error-boundary";
import { useFallbackRender } from "./hooks/useFallbackRender";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes/routes";

function App() {
  const { fallbackRender } = useFallbackRender();

  return (
    <ErrorBoundary fallbackRender={fallbackRender}>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Routes />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
