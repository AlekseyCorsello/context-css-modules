import Page from './components/Page';
import { AuthorProvider } from './contexts/author-context';
import { ThemeProvider } from './contexts/theme-context';

function App() {

  return (
    <ThemeProvider>
      <AuthorProvider>
      <Page />
      </AuthorProvider>
    </ThemeProvider>
  )
}

export default App;