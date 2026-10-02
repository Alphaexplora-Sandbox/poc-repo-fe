export interface AppProps {
  title?: string;
}

export function App({ title = 'poc-repo-frontend' }: AppProps) {
  return (
    <main>
      <h1>{title}</h1>
    </main>
  );
}