import { bruteForce, showMissions, byteMission, randomMission, showNotGate, showGates } from "./missions.mjs";

export const missions = {
    0: [
    {
        text: "Olá! Eu sou o Richard P. Feynman, e vou acompanhar você nesta aventura para desvendarmos o mundo da computação quântica!",
        img: null,
        minigame: null
    },

    {
        text:"Para podermos enteder o que é a computação quântica, precisaremos voltar um passo e entender a computação clássica, ou melhor, os computadores que temos acesso normalmente nos dias de hoje",
        img: null,
        minigame: null
    },

    {
        text:"Escolha o próximo passo da sua jornada clicando em dos caminhos abaixo. É recomendado que você comece a partir do primeiro caminho para entender tudo!",
        img: null,
        minigame: showMissions
    }],

    1: [
        {text:"Vamos começar com sua primeira missão: descobrir o que é a computação clássica.", img: null, minigame: null},
        {text:"A computação clássica consiste em circuitos elétricos realizando cálculos. A unidade de informação básica são os bits!", img: [{link:'/imgs/bitOnSF.png', alt: 'Bit 1',}, {link: '/imgs/bitOffSF.png', alt: 'Bit 0' }], minigame: null},
        {text:"Os bits representam dois valores: verdadeiro ou falso, 1 ou 0, alto ou baixo. E com 8 bits temos um byte. Aperte os bits e veja as combinações!", img: null, minigame: byteMission},
        {text:``, img: null, minigame: randomMission},
        {text:"Parabéns, você completou esse caminho. Agora, vamos continuar.", img: null, minigame: null},
    ],
    2: [
        {text:"No caminho passado aprendemos como a informação funciona nos computadores clássico. Agora vamos aprender como ela é tratada.", img: null, minigame: null},
        {text:"Os bits representam o estados. Nos circuitos eletrônicos, são os estados das correntes elétricas. Conduzindo ou não conduzindo.", img: null, minigame: null},
        {text:"Essas correntes elétricas atravessam, ou não, portas... Portas lógicas, onde são avaliadas e um resultado é gerado a partir de seus estados, ou seja, dos bits de entrada. Nesta missão, você vai conhecer as operações lógicas, e as portas lógicas que as representam.", img: null, minigame: null},
        {text:"Primeiro, vamos a porta lógica NOT, ou, Porta lógica Não. Esta porta lógica tem como resultado o inverso do bit de entrada. Ou seja, se o bit era 0, vira 1. Se era 1, vira 0. Além disso, ela é a única porta lógica que opera sobre um único bit. Guarde essa informação!", img: null, minigame: showNotGate},
        {text:"Agora, vamos com a porta lógica AND, ou, a Porta lógica E. Ela resulta em 1 quando todos os bits de entrada são 1. Bem símples.", img: null, minigame: showGates},
        {text:"Nossa terceira porta é a porta lógica OR, ou, a porta lógica Ou. Ela resulta em 1 quando um dos bits de entrada é 1. Experimente!", img: null, minigame: showGates},
        {text:"A última porta que irei mostrar é a porta XOR, ou, Ou Exclusivo. Ela é a porta Ou, porém resulta 0 para todos os casos em que os bits de entrada são iguais.", img: null, minigame: showGates},
        {text:"Existem algumas outras portas, que são misturas dessas portas que aqui já foram citadas. Com todos esses recursos, nós conseguimos transformar a computação no que ela é hoje: uma ferramente que move o mundo", img: null, minigame: null},
        {text:"E o próximo passo... é a revolução da computação quântica", img: null, minigame: showMissions},
    ],
    3: [
        {text:"Em 1982, eu, Richard P. Feynman, propus um modelo de computação onde poderiamos usar o mundo quântico para superar a computação clássica, ou melhor, a teoria de Church-Turing.", img: null, minigame: null},
        {text:"Algum tempo depois, o físico britânico David Deutsch revelou o Princípio de Deutsch-Church-Turing, e mostrou onde a computação quântica se encaixava no mundo. A partir daí, a corrida para dominá-la começou.", img: null, minigame: null},
        {text:"Finalmente, o que é a computação quântica?", img: null, minigame: null},
        {text:"A computação quântica é uma forma de computação, como muitas outras, que utiliza um sistema de informação diferente dos bits dos computadores clássicos. Os qbits", img: [{link: '/imgs/EsferaDeBloch.png', alt: '"Qbit"',}], minigame: null},
        {text:"Na verdade esse símbolo que você acabou de ver não é um qbit de fato, mas sim uma forma de representar o seu estado. A esfera de bloch... Achou complicado? Vou explicar, calma!", img: [{link: '/imgs/EsferaDeBloch.png', alt: 'Esfera de Bloch',}], minigame: null},
        {text:"Assim como nos circuitos elétricos os bits representam a passagem ou não de corrente, os qbits se baseiam em sistemas quânticos. Mas, sistemas quânticos estão sucetíveis as regras do mundo quântico... E ele é muito pequeno, tão pequeno que não podemos vê-lo.", img: null, minigame: null},
        {text:"Se não podemos vê-lo, como podemos usá-lo para obter informação? A resposta é: mecânica quântica", img: null, minigame: null},
        {text:"Essa ferramente que revolucionou o mundo, e agora a computação, nos ajuda a encontrar a probabilidade em que encontraremos um qbit em um estado", img: null, minigame: null},
        {text:`Acontece que os qbits <span class="style-span">podem</span> estar nos estados convencionais 1 e 0. Mas eles também podem estar em outros estados entre esses dois. <span class="style-span">SUPERPOSIÇÃO!</span>` , img: [{link: '/imgs/Estado0.png', alt: 'Estado 0'}, {link: '/imgs/Estado1.png', alt: 'Estado 1'}], minigame: null},
        {text:`A teoria nos diz que o qbit tem probabilidades de estar em infinitos estados entre 1 e 0, logo, se ele tem infinitos estados ao mesmo tempo, podemos trabalhar com a possibilidade de usar esses estados de uma vez. Isso é o <span class="style-span">PARALELISMO</span>, uma ferramenta que faz a computação quântica ter uma vantagem gigante sobre a computação clássica`, img: null, minigame: null},
        {text:`Existe outro fenômeno quântico para completar nossa lista: o <span class="style-span">EMARANHAMENTO</span>. Esse fenômeno ocorre quando dois sistemas quânticos estão ligados entre si, então sabemos as informações de um olhando para o outro`, img: null, minigame: null},
        {text:"Por fim, quando medimos este sistema quântico de fato, a superposição acaba, e aí sabemos se ele é 0 ou 1, assim como na computação clássica.", img: null, minigame: showMissions},
    ],
    4: [
        {text:"Assim como na computação clássica, para operar sobre os qbits, utilizamos as portas lógicas quânticas. Vamos ver algumas portas quânticas muito importantes.", img: null, minigame: null},
        {text:"A porta lógica a seguir é a Hadamard. Ela é responsável por fazer a superposição no sistema quântico, afinal, ele nem sempre estará em superposição, como no caso após ser medido em que ele perderá sua superposição. A porta Hadamard atua sobre os qbits individualmente, assim como muitas outras, diferentemente da computação clássica que conta com somente uma porta capaz de atuar sobre um único bit. Uma boa vantagem!", img: [{link:'/imgs/PortaHadarmard.png', alt:'Porta Hadamard'}], minigame: null},
        {text:"Já esta porta é a Pauli-X, ou simplesmente X. Ela é o análogo da porta Não. Ou seja, inverte as probabilidades dos estados", img: [{link: '/imgs/PortaX.png', alt: 'Pauli-X',}], minigame: null},
        {text:"Por último, temos a porta CNOT(Controled Not), o Não-Controlado. Ela é uma adição impressionante na lista, pois através dela podemos usar um qbit para definir o estado de outros no circuito quântico.", img: [{link: '/imgs/PortaCNOT.png', alt: 'Não-Controlado',}], minigame: null},
        {text:"Ufa... Vimos bastante coisa até aqui. Eu sei que esse assunto todo pode ser muito difícil de digerir, então o próximo passo vai ser o último, e você poderá presenciar o poder impressionante da computação quântica.", img: null, minigame: showMissions},
    ],
    5: [
        {text:"Muito bom! Depois de chegar até aqui, vamos testar o porquê da Computação Quântica ser uma área tão estudada e requisitada", img: null, minigame: null},
        {text:"No mundo de hoje, nossas senhas e dados são protegidos através de diversos métodos, principalmente criptografia. Os computadores clássicos podem demorar muito tempo e gastar muitos recursos para descobrir alguma senha ou descriptografar um algum dado. Mas já os computadores quânticos podem alcançar estes feitos com muitos menos trabalho.", img: null, minigame: null},
        {text:"Escreva uma senha de no mínimo 10 dígitos e veja a mágica acontecer!", img: null, minigame: bruteForce},
        {text:"Esse é apenas um pequeno exemplo para mostrar que no futuro, com tecnologias quânticas avançadas, nossos dados estão em perigo. Por isso, a computação quântica é uma grande revolução!", img: null, minigame: null},
    ]
}
