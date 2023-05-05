

import React from "react";
import ReactDOM from "react-dom/client";
import paredeEmL from "../../../assets/pix/parede em L.png";
import janela from "../../../assets/pix/janela.png";
import MontantesAuxiliaresETravessaDaPorta from "../../../assets/pix/Montantes auxiliares e travessa da porta.png";
import instalaçãoDoChepeamentoDaPorta from "../../../assets/pix/instalação do chepeamento da porta.png";
import instalaçãoDasCantoneirasDaSancaPadrão from "../../../assets/pix/instalação das cantoneiras da sanca padrão.png";
import esqueletoDaSancaPadrão from "../../../assets/pix/esqueleto da sanca padrão.png";
import nivelamentoDaSanca from "../../../assets/pix/nivelamento da sanca.png";



export default function Drywall() {


    return( <>
        <home>
            <t1>Drywall - 4 Passos para executar o trabalho</t1>
            <t2>
                <ol>
                    <li>Instalação das guias inferior e superior
                        <ol>
                            <li>riscar o chão na posição da guia ( levando em conta a espessura da placa&lt;1cm p/ trás&gt; )</li>
                            <li>
                                transferir para o teto essa medida com o nível a laser
                                <ul>
                                    <li>com o nível de bolha, tirar a medida nas duas faces:</li>
                                    <li>frente e lado</li>
                                </ul>
                            </li>
                            <li>
                                Fixação da guia de baixo
                                <ul>
                                    <li>1 parafuso em cada ponta</li>
                                    <li>1 parafuso à cada 1 metro</li>
                                    <li>banda acústica sempre atrás da guia (entre o chão e a guia)</li>
                                </ul>
                            </li>
                        </ol>
                    </li>
                    <li>Instalação dos montantes
                        <ul>
                            <li>Instalação:
                                <ol>
                                    <li>Instalação dos montantes fixos das extremidades</li>
                                    <li>
                                        distância entre os montantes internos
                                        <ul>
                                            <li>chapas st: 60cm</li>
                                            <li>chapas ru: 40cm</li>
                                        </ul>
                                    </li>
                                    <li>faz a marcação de corte da altura dos montantes com 0.5cm de folga</li>
                                    <li>corta primeiro as laterais</li>
                                    <li>dobra na posição do meio e corta a frente</li>
                                    <li>acerta as beiradas do corte com o alicate</li>
                                    <li>os montantes devem estar com a parte aberta no sentido oposto ao do chapeamento</li>
                                    <li>os furos dos montantes devem estar alinhados</li>
                                    <li>fixa os montantes do projeto</li>
                                    <li>a fixação dos montantes internos devem permanecer soltos até a instalação do chapeamento</li>
                                    <li>
                                        para montantes com pé direito alto
                                        <ul>
                                            <li>as partes do montante devem ser emendados com uma parte de guia de 60cm com 30cm para cada lado do transpasse</li>
                                            <li>cada transpasse deve ser fixado com dois parafusos dos dois lados</li>
                                            <li>na hora da montagem as emendas devem estar desencontradas em ralação aos montantes</li>
                                        </ul>
                                    </li>
                                </ol>
                            </li>
                            <li>Instalação de cargas em drywall
                                <ul>
                                    <li>o reforço deve ser feito com madeiras tratadas contra fungos e cupins</li>
                                    <li>medias: 60cm x 20cm</li>
                                    <li>faz a marcação do eixo na madeira e nos montantes</li>
                                    <li>3 parafusos em cada lado</li>
                                    <li>para até 30kg: buchas toggle bolt</li>
                                    <li>para pesos maiores: montantes duplos, um de costas para o outro</li>
                                </ul>
                            </li>
                            <li>paredes em L
                                <ul>
                                    <li>a parede B não deve ser encostada na parede A, deve ser levado em conta a expessura da chapa também</li>
                                    <li>os montantes da parede B devem ser instalados à 60cm entre: com referencia ao montante da parede A
                                        <img src={ paredeEmL } alt="" width="150" />
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Janelas
                                <ul>
                                    <li>são instalados dois montantes como batentes da janela</li>
                                    <li>ambos com o lado aberto voltado para dentro</li>
                                    <li>respeitando o espaço de 60cm, devem ser instalados os montantes auxiliares</li>
                                    <li><img src={ janela } width="150" /></li>
                                    <li>para janelas coladas com espuma, a estrutura pode ser deixada no aço mesmo</li>
                                    <li>para janelas com trilhos do vidro, deve ser feito o chapeamento e o tratamento de quina</li>
                                    <li>nas áreas das curvas da janela ou porta, não deve ter as emendas, deve ser inteira</li>
                                </ul>
                            </li>
                            <li>Vão de portas
                                <ul>
                                    <li>A porta nunca encosta direto na parede, precisa de 10cm </li>
                                    <li>espaço da porta = tamanho total da porta acabada + 1cm de cada lado para receber a espuma</li>
                                    <li>chapas de reforço de pelo menos 15cm</li>
                                    <li>um montante à 20cm de distância do montante de batente da porta</li>
                                    <li>para portas grandes ou pesadas = dois montantes ou com madeira dentro</li>
                                    <li>
                                        montantes auxiliares e a travessa da porta
                                        <br />
                                        <img src={ MontantesAuxiliaresETravessaDaPorta } alt="" />
                                    </li>
                                    <li>regras de chapeamento de portas
                                        <ul>
                                            <li>
                                                uma chapa inteira desde a bandeira até a parte de baixo alcançavel
                                                <img src={ instalaçãoDoChepeamentoDaPorta } alt="" width="300" />
                                            </li>
                                            <li>fazer cortes de marcações com o serrote e riscar com o lapis</li>
                                            <li>cortar com o serrote um lado e a parte da bandeira</li>
                                            <li>cortar com a estilete o outro lado por dentro e dobrar para fora</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>Instalação das chapas drywall
                        <ul>
                            <li>as placas não devem ser fixadas encostando no chão</li>
                            <li>a primeira placa deve começar inteira de baixo para cima</li>
                            <li>a distancia entre os parafusos deve ser: 30cm</li>
                            <li>nas pontas não coloca parafusos</li>
                            <li>nas extremidades os parafusos devem formar um triangulo</li>
                            <li>os parafusos de uma placa deve ser desencontrado com os da outra</li>
                            <li>as placas devem ser desencontradas</li>
                            <li>na parte de trás a placa também deve ser desencontrada com a do outro lado</li>
                        </ul>
                    </li>
                    <li>Tratamento das juntas ( fita e massa )
                        <ul>
                            <li>Materiais:
                                <ul>
                                    <li>espatulas
                                        <ul>
                                            <li>pequena para pegar massa</li>
                                            <li>média: 20cm, para fazer o tratamento no rebaixo</li>
                                            <li>grande: 30cm, para topo e segurar a massa</li>
                                        </ul>
                                    </li>
                                    <li>fita para tratamento
                                        <ul>
                                            <li>fita de papel microperfurada</li>
                                            <li>fita telada: para reparos</li>
                                        </ul>
                                    </li>
                                    <li>massa para tratamento de juntas de drywall</li>
                                </ul>
                            </li>
                            <li>Tratamento:
                                <li>tratar primeiro todas as juntas de rebaixo</li>
                                <li>nas juntas de topo fazer uma camada extra maior para desfarçar o desnível da fita</li>
                                <li>quinas:
                                    <ul>
                                        <li>perfuração na segunda fileira de furos</li>
                                        <li>parafusos desencontrados e a cada 40cm</li>
                                        <li>1° demão com massa para tratamento drywall</li>
                                        <li>2° demão com massa corrida</li>
                                    </ul>
                                </li>
                            </li>
                        </ul>
                    </li>
                    <li>Elétrica básica
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </li>
                </ol>
            </t2>
            <tipos-de-montantes>
                <t2>Tipos de guias e montantes</t2>
                <ol>
                    <li>48mm: paredes e mobiliário</li>
                    <li>70mm: paredes com portas</li>
                    <li>90mm: parede de pé direito alto</li>
                </ol>
            </tipos-de-montantes>
            <calculos-de-materiais>
                <p>
                    área da chapa = 1,80 x 1,20 = 2,16 m2
                </p>
    
                <p>
                    <h2>Exemplo</h2>
                    parede comprimento: 5m, pé direito: 2,70m
                    <li>Calculo da área
                        <ul>
                            <li>5 x 2,70 = 13,50</li>
                            <li>13,50 x 2 = 27 m2</li>
                        </ul>
                    </li>
                    <li>Chapas:
                        <ul>
                            <li>área da chapa: 2,16 m2</li>
                            <li>área da parede: 27 m2</li>
                            <li>Fórmula: área da parede / 2,16 + 5%</li>
                            <li>
                                27 / 2,16 = 12,50
                                <br />
                                12,50 + 5% = 13,12
                            </li>
                        </ul>
                    </li>
                    <li>Guias: metro linear
                        <ul>
                            <li>5 x 2 = 10m</li>
                            <li>10 / 3 = 3,33</li>
                            <li>= 4 peças</li>
                        </ul>
                    </li>
                    <li>Montantes: a cada 60cm
                        <ul>
                            <li>5 / 0,60 = 8,33</li>
                            <li>+ 2 montantes das extremidades</li>
                            <li>= 10 peças</li>
                        </ul>
                    </li>
                </p>
            </calculos-de-materiais>
            <sanca-padrao>
                <t1>Sanca padrão</t1>
                <br />
                <t2>medidas</t2>
                <ul>
                    <li>rebaixo acabado: 15cm</li>
                    <li>corpo: 40cm</li>
                    <li>iluminação indireta: 10cm</li>
                </ul>
                <t2>instalação das cantoneiras</t2>
                <ul>
                    <li><img src={ instalaçãoDasCantoneirasDaSancaPadrão } alt="" /></li>
                    <li>cantoneira: 25 x 30</li>
                    <li>cantoneira da parede: lado maior na parede</li>
                    <li>cantoneira do teto: lado menor no teto</li>
                    <li>parafusos:
                        <ul>
                            <li>cantoneiras: parafuso 6</li>
                            <li>tirantes: parafuso 8 e arruela</li>
                        </ul>
                    </li>
                    <li>tirantes:
                        <ul>
                            <li>quase encostado com a canaleta do teto</li>
                            <li>15 cm das estremidades</li>
                            <li>e a cada 1 metro</li>
                            <li><img src={ esqueletoDaSancaPadrão } alt="" /></li>
                            <li>o nível é feito após instalar a canaleta f530</li>    
                            <li><img src={ nivelamentoDaSanca } alt="" /></li>
                        </ul>
                    </li>
                    <li>chapeamento:
                        <ul>
                            <li>começa pela frente</li>
                            <li>faz o tratamento das juntas</li>
                            <li>faz a instalação do corpo com 1cm a menos do total</li>
                            <li>a aba tem a metade da altura do rebaixo</li>
                            <li>instala uma canaleta f530 na beirada da sanca</li>
                            <li>tratamento da quina com a fita leveline</li>
                        </ul>
                    </li>
                </ul>
            </sanca-padrao>
            <forro-estruturado-drywall>
                <t1>Forro Estruturado Drywall</t1>
                <t2>07 passos</t2>
                <ol>
                    <li>Riscar no perímetro o nível do forro</li>
                    <li>Instalação da cantoneira 25/30 ou tabica</li>
                    <li>Instalar os tirantes e reguladores</li>
                    <li>Instalar as canaletas f530</li>
                    <li>Nivelar o forro</li>
                    <li>Fazer o chapeamento drywall</li>
                    <li>Fazer o tratamento de juntas</li>
                </ol>
                <t2>CALCULAR ÁREA E PERÍMETRO</t2>
                <ol>
                    <li>Área: medida de toda superfície e espaço do ambiente
                        <ul>
                            <li>Primeira coisa a se fazer</li>
                            <li>é medida em metros quadrados</li>
                        </ul>
                    </li>
                    <li>Perímetro: soma de todos os lados de um ambiente
                        <ul>
                            <li>usado para calcular as quantidades de cantoneiras 25/30, tabica</li>
                            <li>é medido em metro linear</li>
                        </ul>
                    </li>
                    <li>Cálculo de exemplo:
                        <ul>
                            <li>Sala: h = 8m, v = 4m</li>
                            <li>Área
                                <ul>
                                    <li>área = 8m x 4m</li>
                                    <li>área = 32 m2</li>
                                </ul>
                            </li>
                            <li>Perímetro
                                <ul>
                                    <li>perímetro = 8 + 8 + 4 + 4</li>
                                    <li>perímetro = 24m</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ol>
                <t2>Instalação</t2>
                <ul>
                    <li>furação a cada 60cm</li>
                    <li></li>
                </ul>
            </forro-estruturado-drywall>
        </home>
    </> );
}
