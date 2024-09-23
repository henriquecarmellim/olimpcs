"use client"
import { Flame } from "lucide-react";
import Link from "next/link";
import Image from 'next/image'
import Typewriter from 'typewriter-effect';

export default function App() {
    return (
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
        <section id="idk" className="bg-red w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Bem-vindo às Olimpíadas 2024
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                <Typewriter
                    options={{
                        strings: [
                        'Descubra a história das Olimpíadas desde a Grécia Antiga',
                        'Conheça os momentos mais icônicos das Olimpíadas',
                        'Explore a evolução dos Jogos Olímpicos ao longo dos séculos',
                        'Saiba mais sobre os atletas lendários das Olimpíadas',
                        'Reviva os momentos inesquecíveis das Olimpíadas',
                        'Entenda o impacto cultural e social das Olimpíadas',
                        'Descubra as curiosidades e fatos interessantes sobre as Olimpíadas',
                        'Acompanhe a trajetória das Olimpíadas modernas',
                        'Explore as cidades-sede e suas histórias olímpicas'
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                />
                </p>
              </div>
            
            </div>
          </div>
        </section>

        <section id="idk" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">A História das Olimpíadas</h2>
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 p-6">
                  <h3 className="text-2xl font-semibold mb-4">Grécia Antiga (776 a.C. - 393 d.C.)</h3>
                  <p className="text-gray-600">Os Jogos Olímpicos originais eram realizados em Olímpia, na Grécia, em honra a Zeus. Eles ocorriam a cada quatro anos e incluíam eventos como corrida, luta livre e lançamento de disco.</p>
                </div>
                <div className="md:w-1/2 p-6">
                <Image
                    src="/19abd76d-3b41-4594-82f7-3ac53d6cec5f.jpg"
                    alt="Landscape picture"
                    width={300}
                    height={400}
                />
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse items-center">
                <div className="md:w-1/2 p-6">
                  <h3 className="text-2xl font-semibold mb-4">Renascimento (1896)</h3>
                  <p className="text-gray-600">Os Jogos Olímpicos modernos foram revividos em Atenas, Grécia, em 1896, graças aos esforços do Barão Pierre de Coubertin. Esta primeira edição moderna contou com 241 atletas de 14 nações.</p>
                </div>
                <div className="md:w-1/2 p-6">
                <Image
                    src="/66dd1b02-6299-4e05-908b-7f91662cfc23.jpg"
                    alt="Landscape picture"
                    width={300}
                    height={400}
                />
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 p-6">
                  <h3 className="text-2xl font-semibold mb-4">Evolução no Século XX</h3>
                  <p className="text-gray-600">Ao longo do século XX, os Jogos Olímpicos cresceram em tamanho e importância. Novos esportes foram adicionados, a participação feminina aumentou, e os Jogos se tornaram um evento global de grande escala.</p>
                </div>
                <div className="md:w-1/2 p-6">
                <Image
                    src="/39a1ec4b-b93c-4216-a6aa-1bc477015792.jpg"
                    alt="Landscape picture"
                    width={300}
                    height={400}
                />
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse items-center">
                <div className="md:w-1/2 p-6">
                  <h3 className="text-2xl font-semibold mb-4">Era Moderna (2000 - Presente)</h3>
                  <p className="text-gray-600">Os Jogos Olímpicos continuam a evoluir, abraçando a tecnologia, a sustentabilidade e a inclusão. Com mais de 200 nações participantes, os Jogos são um símbolo de união global e excelência atlética.</p>
                </div>
                <div className="md:w-1/2 p-6">
                <Image
                    src="/12bad359-5b99-47f1-9846-c448dd939160.jpg"
                    alt="Landscape picture"
                    width={300}
                    height={400}
                />
                </div>
              </div>
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
    )
}