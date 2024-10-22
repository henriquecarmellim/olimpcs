// src/app/app.tsx
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from './components';
import { Flame, Medal, Trophy, Circle, Book, Calendar, ChartBar, Earth} from "lucide-react"
import Link from 'next/link';

export default function App() {
  return (
    /* definindo para ser responsivo */
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-whitesmoke shadow-md w-full z-10 top-0 fixed">
        <Link className="flex items-center justify-center" href="#">
        <Flame className="h-6 w-6" />
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Esportes
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Atletas
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Programação
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Notícias
        </Link>
      </nav>
    </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Bem-vindo às Olimpíadas 2024
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Celebrando a excelência esportiva e a união global através do espírito olímpico.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="rounded-lg border border-black p-1">Programação</Button>
                <Button>Saiba mais</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-whitesmoke">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-center mb-16">
              Esportes em Destaque
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-4 p-4 bg-whitesmoke">
                  <Medal className="w-8 h-8 text-gray-700" />
                  <CardTitle className="text-xl font-semibold">Atletismo</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <CardDescription className="text-gray-600">
                    Corrida, saltos e lançamentos: a essência do movimento olímpico.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-4 p-4 bg-whitesmoke">
                  <Trophy className="w-8 h-8 text-gray-700" />
                  <CardTitle className="text-xl font-semibold">Natação</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <CardDescription className="text-gray-600">
                    Velocidade e resistência nas piscinas olímpicas.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-4 p-4 bg-whitesmoke">
                  <Flame className="w-8 h-8 text-gray-700" />
                  <CardTitle className="text-xl font-semibold">Ginástica</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <CardDescription className="text-gray-600">
                    Força, flexibilidade e graça em performances espetaculares.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-4 p-4 bg-whitesmoke">
                  <Circle className="w-8 h-8 text-gray-700" />
                  <CardTitle className="text-xl font-semibold">Futebol</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <CardDescription className="text-gray-600">
                    O esporte mais popular do mundo, cheio de paixão e emoção.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-center mb-16 text-gray-900 dark:text-white">
            Descubra Mais Sobre as Olimpíadas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <a href="/history">
              <Card className="bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105">
                <CardHeader className="flex flex-row items-center gap-4 p-4 dark:bg-gray-600">
                  <Book className="w-8 h-8 text-gray-700 dark:text-gray-200" />
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                    História das Olimpíadas
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Conheça a jornada das Olimpíadas desde a Grécia antiga até os tempos modernos.
                  </CardDescription>
                </CardContent>
              </Card>
            </a>

            <Card className="bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105">
              <CardHeader className="flex flex-row items-center gap-4 p-4 dark:bg-gray-600">
                <Medal className="w-8 h-8 text-gray-700 dark:text-gray-200" />
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                  Atletas Recordistas
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Descubra os atletas que fizeram história ganhando o maior número de medalhas.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105">
              <CardHeader className="flex flex-row items-center gap-4 p-4 dark:bg-gray-600">
                <Trophy className="w-8 h-8 text-gray-700 dark:text-gray-200" />
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                  Momentos Icônicos
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Relembre momentos históricos que marcaram as Olimpíadas ao longo dos anos.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105">
              <CardHeader className="flex flex-row items-center gap-4 p-4 dark:bg-gray-600">
                <Earth className="w-8 h-8 text-gray-700 dark:text-gray-200" />
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                  Países e Suas Conquistas
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Veja quais países dominaram os Jogos Olímpicos ao longo das décadas.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105">
              <CardHeader className="flex flex-row items-center gap-4 p-4 dark:bg-gray-600">
                <Calendar className="w-8 h-8 text-gray-700 dark:text-gray-200" />
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                  Calendário Olímpico
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Confira as próximas edições das Olimpíadas e eventos relacionados.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105">
              <CardHeader className="flex flex-row items-center gap-4 p-4 dark:bg-gray-600">
                <ChartBar className="w-8 h-8 text-gray-700 dark:text-gray-200" />
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                  Estatísticas e Curiosidades
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Explore fatos e curiosidades fascinantes sobre os Jogos Olímpicos.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Olimpíadas. Todos os direitos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Termos de Serviço
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacidade
          </Link>
        </nav>
      </footer>
    </div>
  );
}
