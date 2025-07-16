import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import Page from './components/Page';
import { AuthorProvider } from './contexts/author-context';
import { ThemeProvider } from './contexts/theme-context';

function App() {

  return (
    <ThemeProvider>
      <AuthorProvider>
      <Page />
      <FirstComponent />
      <SecondComponent />
      </AuthorProvider>
    </ThemeProvider>
  )
}

export default App;