import Logo from '../../assets/Logo.png'
import Foto from '../../assets/Foto.jpeg'
import { 
  FiHeart as Heart, 
  FiShoppingBag as Bag, 
  
} from "react-icons/fi";

import {
  BsList as Menu, 
  BsSearch as Search,
  BsWhatsapp as Zap } from "react-icons/bs";
import { IoMdAdd as Add } from "react-icons/io";

import { LuSettings2 as Filter } from "react-icons/lu";
import { useState } from 'react';



function Home() {

  const [isOpen, setIsOpen] = useState<boolean>(false);


    return (
      <div className="Home h-[3000px]">
        <header className='sticky w-full top-0 z-10'>
          {/* Aviso */}
          <div className="notice pt-1 h-13 bg-purple-500 flex items-center justify-center px-14">
            <h4 className="text-center text-white animate-pulse text-xs leading-5 md:text-sm lg:text-sm">
              PEÇAS DE CROCHÊ SOB MEDIDA COM PREÇOS QUE ENCANTAM! 🧶
            </h4>
          </div>
          
          {/* Navbar Principal */}
          <div className="flex-col h-20 flex justify-center border-b border-gray-300 md:flex-row md:h-16 px-2 bg-white pb-1 transition-all">
            <nav className="mb-1 max-w-full w-full mx-auto h-full md:max-w-[70%] flex items-center justify-between bg-white">
              {/* Menu Mobile */}
              <Menu size={32} className="block md:hidden" />
              
              {/* Logo */}
              <img src={Logo} className="h-6 w-40 !ml-8 md:!ml-0" />
              
              {/* Links de Navegação */}
              <div className="hidden md:block nav pl-[5%] text-gray-900 grow">
                <ul className="flex gap-7 text-sm font-black">
                  <li className='hover:underline cursor-pointer'>VERÃO</li>
                  <li className='hover:underline cursor-pointer'>INVERNO</li>
                  <li className='hover:underline cursor-pointer'>HOMENS</li>
                  <li className='hover:underline cursor-pointer'>MULHERES</li>
                </ul>
              </div>
              
              {/* Ícones de Ações */}
              <div className="relative -right-8 hidden md:block">
                  <input
                    className={`bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-300 rounded-md pl-3 pr-10 py-2
                    transition-all duration-300 ease-in-out
                    ${isOpen ? "w-60 opacity-100 scale-x-100" : "w-0 opacity-0 scale-x-0"} outline-0
              `}
                    placeholder="Pesquisar..."
                  />
              </div>
              <div className="buttons ml-auto gap-10">
                <ul className="flex items-center gap-3">
                  <li><Search size={23} className="hidden md:block z-2 sticky" onClick={() => setIsOpen(!isOpen)}/></li>
                  <li><Heart size={24} /></li>
                  <li><Bag size={24} /></li>
                </ul>
              </div>
            </nav>
            
            {/* Barra de Pesquisa Mobile */}
            <div className="w-full block md:hidden">
              <div className="relative">
                <input
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none"
                  placeholder="Pesquisar"
                />
                <div className="absolute h-full top-0 right-1 flex items-center rounded py-1 px-2.5 text-center text-sm text-white transition-all border-0">
                  <Search size={20} className="text-gray-800" />
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Conteudo principal */}
        <main className='pt-5'>
            <div id="title" className="flex items-center justify-center">
              <h4 className=' text-md text-center'>Todas as peças</h4>
            </div>
            <section id="filters" className="flex justify-center">

              <div className="mb-1 max-w-[100%] w-full mx-auto h-full md:max-w-[70%] flex justify-between px-2 md:px-0">
              <div id="Filters btns" className="flex gap-2">
                <button className="h-9 w-34 border-black border rounded-sm flex items-center justify-center cursor-pointer">
                  <Filter className="" />
                  <p className="!ml-2">Filtrar</p>
                </button>
                <select className=" text-sm h-9 px-4 pl-4 block w-34 cursor-pointer bg-gray-100 border border-black rounded-sm  focus:border-purple-500 focus:ring-purple-500 disabled:opacity-50 disabled:pointer-events-none md:w-50 lg:w-50 outline-0">
                  <option selected={true} disabled><b>Ordernar por: </b></option>
                  <option>Mais pedidos</option>
                  <option>Novos</option>
                </select>
              </div>

              <div id="results" className="flex items-center !mx-2 justify-center flex-col">
                <h1 className="text-xs text-gray-700 align-middle inline-block">04</h1>
                <h1 className="text-xs text-gray-700 align-middle inline-block">Resultados</h1>
              </div>

              </div>
            </section>

            <section id="products" className="flex justify-center !mt-3 px-2 md:px-0">
              <div className=" mb-1 max-w-[100%] w-full mx-auto h-full md:max-w-[70%]">
                <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
                  <div className="aspect-[3/4] min-w-40 relative group">
                    <Heart size={16} className="absolute right-2 top-2 text-white invisible group-hover:visible" />
                    <div className="absolute right-3 bottom-15 text-white invisible group-hover:visible bg-blue-100/20 px-3 py-1 flex rounded-md justify-center items-center md:bottom-10" >
                      <Bag size={16}>
                        <p>+</p>
                      </Bag>
                    </div>
                    <img src={Foto} alt="foto" className="rounded-md" />
                    <div className="details flex justify-between">
                      <h6 className='!mt-2 text-sm'>Cropped branco de florzinha</h6>
                      <h6 className='!mt-2 text-sm'>R$ 60</h6>
                    </div>
                  </div>
                  <div className="aspect-[3/4] min-w-40 relative group">
                    <Heart size={16} className="absolute right-2 top-2 text-white invisible group-hover:visible" />
                    <div className="absolute  text-white right-3 bottom-15 invisible group-hover:visible bg-blue-100/20 px-3 py-1 flex rounded-md justify-center items-center md:right-3 md:bottom-10" >
                      <Bag size={16}>
                        <p>+</p>
                      </Bag>
                    </div>
                    <img src={Foto} alt="foto" className="rounded-md" />
                    <div className="details flex justify-between">
                      <h6 className='!mt-2 text-sm'>Cropped branco de florzinha</h6>
                      <h6 className='!mt-2 text-sm'>R$ 60</h6>
                    </div>
                  </div>
                  <div className="aspect-[3/4] min-w-40 relative group">
                    <Heart size={16} className="absolute right-2 top-2 text-white invisible group-hover:visible" />
                    <div className="absolute right-3 bottom-15 text-white invisible group-hover:visible bg-blue-100/20 px-3 py-1 flex rounded-md justify-center items-center md:bottom-10" >
                      <Bag size={16}>
                        <p>+</p>
                      </Bag>
                    </div>
                    <img src={Foto} alt="foto" className="rounded-md" />
                    <div className="details flex justify-between">
                      <h6 className='!mt-2 text-sm'>Cropped branco de florzinha</h6>
                      <h6 className='!mt-2 text-sm'>R$ 60</h6>
                    </div>
                  </div>
                  <div className="aspect-[3/4] min-w-40 relative group">
                    <Heart size={16} className="absolute right-2 top-2 text-white invisible group-hover:visible" />
                    <div className="absolute right-3 bottom-15 text-white invisible group-hover:visible bg-blue-100/20 px-3 py-1 flex rounded-md justify-center items-center md:bottom-10" >
                      <Bag size={16}>
                        <p>+</p>
                      </Bag>
                    </div>
                    <img src={Foto} alt="foto" className="rounded-md" />
                    <div className="details flex justify-between">
                      <h6 className='!mt-2 text-sm'>Cropped branco de florzinha</h6>
                      <h6 className='!mt-2 text-sm'>R$ 60</h6>
                    </div>
                  </div>
                  <div className="aspect-[3/4] min-w-40 relative group">
                    <Heart size={16} className="absolute right-2 top-2 text-white invisible group-hover:visible" />
                    <div className="absolute right-3 bottom-15 text-white invisible group-hover:visible bg-blue-100/20 px-3 py-1 flex rounded-md justify-center items-center md:bottom-10" >
                      <Bag size={16}>
                        <p>+</p>
                      </Bag>
                    </div>
                    <img src={Foto} alt="foto" className="rounded-md" />
                    <div className="details flex justify-between">
                      <h6 className='!mt-2 text-sm'>Cropped branco de florzinha</h6>
                      <h6 className='!mt-2 text-sm'>R$ 60</h6>
                    </div>
                  </div>
                  <div className="aspect-[3/4] min-w-40 relative group">
                    <Heart size={16} className="absolute right-2 top-2 text-white invisible group-hover:visible" />
                    <div className="absolute right-3 bottom-15 text-white invisible group-hover:visible bg-blue-100/20 px-3 py-1 flex rounded-md justify-center items-center md:bottom-10" >
                      <Bag size={16}>
                        <p>+</p>
                      </Bag>
                    </div>
                    <img src={Foto} alt="foto" className="rounded-md" />
                    <div className="details flex justify-between">
                      <h6 className='!mt-2 text-sm'>Cropped branco de florzinha</h6>
                      <h6 className='!mt-2 text-sm'>R$ 60</h6>
                    </div>
                  </div>
                  <div className="aspect-[3/4] min-w-40 relative group">
                    <Heart size={16} className="absolute right-2 top-2 text-white invisible group-hover:visible" />
                    <div className="absolute right-3 bottom-15 text-white invisible group-hover:visible bg-blue-100/20 px-3 py-1 flex rounded-md justify-center items-center md:bottom-10" >
                      <Bag size={16}>
                        <p>+</p>
                      </Bag>
                    </div>
                    <img src={Foto} alt="foto" className="rounded-md" />
                    <div className="details flex justify-between">
                      <h6 className='!mt-2 text-sm'>Cropped branco de florzinha</h6>
                      <h6 className='!mt-2 text-sm'>R$ 60</h6>
                    </div>
                  </div>
                  <div className="aspect-[3/4] min-w-40 relative group">
                    <Heart size={16} className="absolute right-2 top-2 text-white invisible group-hover:visible" />
                    <div className="absolute right-3 bottom-15 text-white invisible group-hover:visible bg-blue-100/20 px-3 py-1 flex rounded-md justify-center items-center md:bottom-10" >
                      <Bag size={16}>
                        <p>+</p>
                      </Bag>
                    </div>
                    <img src={Foto} alt="foto" className="rounded-md" />
                    <div className="details flex justify-between">
                      <h6 className='!mt-2 text-sm'>Cropped branco de florzinha</h6>
                      <h6 className='!mt-2 text-sm'>R$ 60</h6>
                    </div>
                  </div>
                  <div className="aspect-[3/4] min-w-40 relative group">
                    <Heart size={16} className="absolute right-2 top-2 text-white invisible group-hover:visible" />
                    <div className="absolute right-3 bottom-15 text-white invisible group-hover:visible bg-blue-100/20 px-3 py-1 flex rounded-md justify-center items-center md:bottom-10" >
                      <Bag size={16}>
                        <p>+</p>
                      </Bag>
                    </div>
                    <img src={Foto} alt="foto" className="rounded-md" />
                    <div className="details flex justify-between">
                      <h6 className='!mt-2 text-sm'>Cropped branco de florzinha</h6>
                      <h6 className='!mt-2 text-sm'>R$ 60</h6>
                    </div>
                  </div>
                  <div className="aspect-[3/4] min-w-40 relative group">
                    <Heart size={16} className="absolute right-2 top-2 text-white invisible group-hover:visible" />
                    <div className="absolute right-3 bottom-15 text-white invisible group-hover:visible bg-blue-100/20 px-3 py-1 flex rounded-md justify-center items-center md:bottom-10" >
                      <Bag size={16}>
                        <p>+</p>
                      </Bag>
                    </div>
                    <img src={Foto} alt="foto" className="rounded-md" />
                    <div className="details flex justify-between">
                      <h6 className='!mt-2 text-sm'>Cropped branco de florzinha</h6>
                      <h6 className='!mt-2 text-sm'>R$ 60</h6>
                    </div>
                  </div>
                  <div className="aspect-[3/4] min-w-40 relative group">
                    <Heart size={16} className="absolute right-2 top-2 text-white invisible group-hover:visible" />
                    <div className="absolute right-3 bottom-15 text-white invisible group-hover:visible bg-blue-100/20 px-3 py-1 flex rounded-md justify-center items-center md:bottom-10" >
                      <Bag size={16}>
                        <p>+</p>
                      </Bag>
                    </div>
                    <img src={Foto} alt="foto" className="rounded-md" />
                    <div className="details flex justify-between">
                      <h6 className='!mt-2 text-sm'>Cropped branco de florzinha</h6>
                      <h6 className='!mt-2 text-sm'>R$ 60</h6>
                    </div>
                  </div>
                  <div className="aspect-[3/4] min-w-40 relative group">
                    <Heart size={16} className="absolute right-2 top-2 text-white invisible group-hover:visible" />
                    <div className="absolute right-3 bottom-15 text-white invisible group-hover:visible bg-blue-100/20 px-3 py-1 flex rounded-md justify-center items-center md:bottom-10" >
                      <Bag size={16}>
                        <p>+</p>
                      </Bag>
                    </div>
                    <img src={Foto} alt="foto" className="rounded-md" />
                    <div className="details flex justify-between">
                      <h6 className='!mt-2 text-sm'>Cropped branco de florzinha</h6>
                      <h6 className='!mt-2 text-sm'>R$ 60</h6>
                    </div>
                  </div>
                  <div className="aspect-[3/4] min-w-40 relative group">
                    <Heart size={16} className="absolute right-2 top-2 text-white invisible group-hover:visible" />
                    <div className="absolute right-3 bottom-15 text-white invisible group-hover:visible bg-blue-100/20 px-3 py-1 flex rounded-md justify-center items-center md:bottom-10" >
                      <Bag size={16}>
                        <p>+</p>
                      </Bag>
                    </div>
                    <img src={Foto} alt="foto" className="rounded-md" />
                    <div className="details flex justify-between">
                      <h6 className='!mt-2 text-sm'>Cropped branco de florzinha</h6>
                      <h6 className='!mt-2 text-sm'>R$ 60</h6>
                    </div>
                  </div>
                  <div className="aspect-[3/4] min-w-40 relative group">
                    <Heart size={16} className="absolute right-2 top-2 text-white invisible group-hover:visible" />
                    <div className="absolute right-3 bottom-15 text-white invisible group-hover:visible bg-blue-100/20 px-3 py-1 flex rounded-md justify-center items-center md:bottom-10" >
                      <Bag size={16}>
                        <p>+</p>
                      </Bag>
                    </div>
                    <img src={Foto} alt="foto" className="rounded-md" />
                    <div className="details flex justify-between">
                      <h6 className='!mt-2 text-sm'>Cropped branco de florzinha</h6>
                      <h6 className='!mt-2 text-sm'>R$ 60</h6>
                    </div>
                  </div>
                  <div className="aspect-[3/4] min-w-40 relative group">
                    <Heart size={16} className="absolute right-2 top-2 text-white invisible group-hover:visible" />
                    <div className="absolute right-3 bottom-15 text-white invisible group-hover:visible bg-blue-100/20 px-3 py-1 flex rounded-md justify-center items-center md:bottom-10" >
                      <Bag size={16}>
                        <p>+</p>
                      </Bag>
                    </div>
                    <img src={Foto} alt="foto" className="rounded-md" />
                    <div className="details flex justify-between">
                      <h6 className='!mt-2 text-sm'>Cropped branco de florzinha</h6>
                      <h6 className='!mt-2 text-sm'>R$ 60</h6>
                    </div>
                  </div>
                  <div className="aspect-[3/4] min-w-40 relative group">
                    <Heart size={16} className="absolute right-2 top-2 text-white invisible group-hover:visible" />
                    <div className="absolute right-3 bottom-15 text-white invisible group-hover:visible bg-blue-100/20 px-3 py-1 flex rounded-md justify-center items-center md:bottom-10" >
                      <Bag size={16}>
                        <p>+</p>
                      </Bag>
                    </div>
                    <img src={Foto} alt="foto" className="rounded-md" />
                    <div className="details flex justify-between">
                      <h6 className='!mt-2 text-sm'>Cropped branco de florzinha</h6>
                      <h6 className='!mt-2 text-sm'>R$ 60</h6>
                    </div>
                  </div>
                  <div className="aspect-[3/4] min-w-40 relative group">
                    <Heart size={16} className="absolute right-2 top-2 text-white invisible group-hover:visible" />
                    <div className="absolute right-3 bottom-15 text-white invisible group-hover:visible bg-blue-100/20 px-3 py-1 flex rounded-md justify-center items-center md:bottom-10" >
                      <Bag size={16}>
                        <p>+</p>
                      </Bag>
                    </div>
                    <img src={Foto} alt="foto" className="rounded-md" />
                    <div className="details flex justify-between">
                      <h6 className='!mt-2 text-sm'>Cropped branco de florzinha</h6>
                      <h6 className='!mt-2 text-sm'>R$ 60</h6>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="footer" className="flex justify-center !mt-3 flex-col items-center" >
              <div className="text-center pr-5">
              <h6 className="text-sm">
                Mostrando 30 de 75
              </h6>
              </div>
              <div className="!mt-3">
                <button className="py-2 px-16 border-1 rounded-md hover:bg-black hover:text-white cursor-pointer transition-colors duration-300">
                  +25
                </button>
                <button className="py-2 px-14 border-1 rounded-md !ml-3 hover:bg-black hover:text-white cursor-pointer transition-colors duration-300">
                  Ver tudo
                </button>
              </div>
            </section>
            <section className="flex justify-center !mt-15 px-2 md:px-0">
            <div className="mb-1 max-w-[100%] w-full mx-auto h-full md:max-w-[90%]">
              <h1 className="text-[14px] text-gray-800 font-bold mb-6 mt-6">
                  Encante-se com as Peças de Crochê Feitas com Amor
              </h1>
              <p className="text-[12px] mb-8">
                  Cada ponto, cada fio, cada peça criada por mim carrega um toque especial: o amor pelo crochê. 
                  É mais do que uma técnica, é a expressão de carinho em cada laçada, a delicadeza de um trabalho 
                  feito à mão, com paciência e dedicação.
              </p>

              <h1 className="text-[14px] text-gray-800 font-bold mb-6 mt-6">
                  Estilo Artesanal e Atemporal
              </h1>
              <p className="text-[12px] mb-8">
                  O crochê é um clássico que nunca sai de moda. Nossas peças combinam tradição e modernidade, 
                  criando looks versáteis para qualquer ocasião.
              </p>

              <h1 className="text-[14px] text-gray-800 font-bold mb-6 mt-6">
                  Feito à Mão, Com Amor
              </h1>
              <p className="text-[12px] mb-8">
                  Cada peça é única, feita com paciência, carinho e dedicação. Valorizamos o feito à mão, onde 
                  cada laçada carrega história e tradição. Escolher crochê é escolher autenticidade, conforto e 
                  a beleza do trabalho artesanal.
              </p>

              <div className="text-[12px] space-y-2">
                  <p>✨ <b>Materiais de qualidade</b> – Fios selecionados para garantir maciez e durabilidade.</p>
                  <p>🧵 <b>Exclusividade</b> – Cada uma tem sua própria essência.</p>
                  <p>💛 <b>Feito com amor</b> – Criado para aquecer o corpo e encantar a alma.</p>
              </div>
          </div>

            </section>
        </main>

        <footer className="bg-white text-black py-10 px-5 md:px-16 flex justify-center">
          <div className="mb-1 max-w-[100%] w-full mx-auto h-full md:max-w-[70%]">

          
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
            <div>
              <ul className="!space-y-2 text-[14px]">
                <li className="flex items-center gap-2">
                  <span>📍</span> <a href="#" className="hover:underline">Store Locator</a>
                </li>
                <li className="flex items-center gap-2">
                  <span>📦</span> <a href="#" className="hover:underline">Start a Return</a>
                </li>
                <li className="flex items-center gap-2">
                  <span>💬</span> <a href="#" className="hover:underline">Feedback</a>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex justify-between items-center py-5 border-y-1 border-gray-300 ">
                <h2 className={`text-[14px] font-bold  md:text-[16px]`}>Para Clientes </h2>
                <Add className="text-gray-600" size={20}/>
              </div>
              
              <ul className="!space-y-2 text-[14px]">
                <li><a href="#" className="hover:underline">Termos de Uso</a></li>
                <li><a href="#" className="hover:underline">Perguntas frequentes</a></li>
                <li><a href="#" className="hover:underline">Politicas de retorno</a></li>
                <li><a href="#" className="hover:underline">Politicas de compras</a></li>
                <li><a href="#" className="hover:underline">LGPD</a></li>
                <li className="flex items-center gap-2">
                  <a href="#" className="hover:underline">Feedback</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-[16px] font-bold !mb-4">Sobre mim</h2>
              <ul className="!space-y-2 text-[14px]">
                <li><a href="#" className="hover:underline">Carreira</a></li>
                <li><a href="#" className="hover:underline">Matériais</a></li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold mb-4">Siga-nos nas redes sociais</h2>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-600">📸</a>
                <a href="#" className="hover:text-gray-600">🐦</a>
                <a href="#" className="hover:text-gray-600">📘</a>
                <a href="#" className="hover:text-gray-600">📌</a>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                By signing up you agree to our <a href="#" className="underline">Terms of Use</a> and <a href="#" className="underline">Privacy Policy</a>.
              </p>
            </div>
          </div>
          </div>
        </footer>
        <div className="fixed right-4 bottom-4 text-white w-14 h-14 bg-green-500 flex justify-center items-center rounded-full">
        <a href="https://wa.me/557188150480"><Zap size={32} /></a>
        </div>
      </div>
    )
  }
  
  export default Home
  