"use client";
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
                                            'Descubra a história do java desde a sua criação',
                                            'Conheça os principais recursos do java',
                                            'Aprenda sobre a história do Java e suas versões',
                                            'Descubra os principais frameworks e bibliotecas Java',
                                            'Explore os usos do Java em desenvolvimento web e mobile',
                                            'Conheça as melhores práticas de programação em Java',
                                            'Veja como o Java é utilizado em grandes empresas e startups'
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

            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container mx-auto px-4 md:px-6 space-y-8">
                    <h2 className="text-2xl font-bold text-center md:text-3xl lg:text-4xl">Apresentação sobre Java</h2>
                    
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold">1. Introdução</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Java é uma linguagem de programação orientada a objetos criada em 1991 por James Gosling e Mike Sheridan na Sun Microsystems. Lançada publicamente em 1995, tornou-se uma das linguagens mais populares devido à sua portabilidade, robustez, segurança e vasta gama de ferramentas e bibliotecas.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold">2. Características Principais do Java</h3>
                        <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400 space-y-2">
                            <li>Orientação a Objetos: organização do código em objetos, aplicando encapsulamento, herança e polimorfismo.</li>
                            <li>Portabilidade: "Write Once, Run Anywhere" - programas Java podem rodar em qualquer plataforma com uma JVM.</li>
                            <li>Compilação para Bytecode: O código fonte é compilado em bytecode, executado pela JVM.</li>
                            <li>Segurança: A JVM oferece segurança para proteger o sistema contra acesso não autorizado.</li>
                            <li>Multithreading: Suporte para execução simultânea de múltiplas tarefas.</li>
                            <li>Gestão Automática de Memória com Garbage Collection.</li>
                            <li>Biblioteca Rica: extensa biblioteca de funcionalidades e frameworks.</li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold">3. Estrutura do Código Java</h3>
                        <p className="text-gray-500 dark:text-gray-400">Exemplo simples de código em Java:</p>
                        <pre id="code" className="bg-gray-100 dark:bg-gray-800 text-black p-4 rounded-md">
                            <code>{`public class main {\n    public static void main(String[] args) {\n        System.out.println("Olá, Mundo!");\n    }\n}`}
                                
                            </code>
                        </pre>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold">4. Principais Versões do Java</h3>
                        <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400 space-y-2">
                            <li>Java 1.0 (1996): Lançamento inicial com a JVM.</li>
                            <li>Java 2 (1998): Introdução do J2SE e novas bibliotecas.</li>
                            <li>Java 5 (2004): Inclusão de generics e enumerações.</li>
                            <li>Java 8 (2014): Expressões lambda e API de Streams.</li>
                            <li>Java 17 (2021): Versão LTS com melhorias em desempenho e segurança.</li>
                        </ul>
                    </div>

                    {/* Repita o padrão para as demais seções */}
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
