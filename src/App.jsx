import github from "./assets/github.svg";
import linkedin from "./assets/linkedin.svg";
import instagram from "./assets/instagram.svg";

import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.pageContent}>
      <header className={styles.header}>
        <h1>Naomi Teruya</h1>
        <h2>Engenheira Frontend Junior</h2>
        <p>
          Apaixonada por tecnologia, estou constantemente em busca de novas
          experiências que desafiem e expandam meus conhecimentos
        </p>
        <nav>
          <ul>
            <li>
              <div className={styles.indicator}></div>
              <a href="#about">Sobre mim</a>
            </li>
            <li>
              <div className={styles.indicator}></div>
              <a href="#experience">Experiência</a>
            </li>
            <li>
              <div className={styles.indicator}></div>
              <a href="#projects">Projetos</a>
            </li>
          </ul>
        </nav>
        <ul className={styles.socialMedias}>
          <li id="github">
            <a href="#">
              <img src={github} alt="Github" width={24} />
            </a>
          </li>
          <li id="linkedin">
            <a href="#">
              <img src={linkedin} alt="LinkedIn" width={20} />
            </a>
          </li>
          <li id="instagram">
            <a href="#">
              <img src={instagram} alt="Instagram" width={26} />
            </a>
          </li>
        </ul>
      </header>
      <main className={styles.main}>
        <section id="about">
          <h2>Sobre mim</h2>
          <p>
            Recém formada e ingressante no mercado de trabalho, apaixonada pela
            área da tecnologia. Trabalho com projetos de automação de processos
            e projetos de desenvolvimento no-code para validação de ideias de
            novos negócios. Meu trabalho exige que eu trabalhe constantemente
            meu raciocínio lógico e a lógica de programação, apesar de às vezes
            não exigir conhecimento de linguagem de programação. Minhas reuniões
            diárias com o time me permitem aprender sobre os processos de
            metodologia ágil e SCRUM e também me permite evoluir competências
            como comunicação e relações interpessoais.
          </p>
          <p>
            Em paralelo, me dedico aos meus estudos diários de programação.
            Domino HTML, CSS e Javascript e estou em processo de aprendizado em
            ReactJS e React Native.
          </p>
        </section>
        <section id="experience">
          <h2>Histórico profissional</h2>
          <ul className={styles.experienceList}>
            <li className={styles.card}>
              <span className={styles.period}>04/2023 - hoje</span>
              <div>
                <h3>
                  Pesquisadora e Desenvolvedora de UX JR • Superbid Exchange
                </h3>
                <p>
                  • Desenvolvimento de POCs e MVPs para validação de ideias de
                  novos negócios; • Mapeamento e automatização de processos
                  manuais;
                </p>
              </div>
            </li>
            <li className={styles.card}>
              <span className={styles.period}>05/2022 – 04/2023</span>
              <div>
                <h3>Estagiária • Superbid Exchange</h3>
                <p>
                  • Participei no desenvolvimento de projetos para validação de
                  ideias de novos negócios; • Aprofundei meus conhecimentos em
                  plataformas no-code, como Adalo, Bubble e Make; • Participei
                  de atividades de UX como Design Critique e Crazy Eights; •
                  Desenvolvi plataformas para automatização de processos
                  internos, bem como a construção dos fluxos para o entendimento
                  dos mesmos; • Participei de cerimônias de metodologia ágil
                  como Sprint Planning e Sprint Review.
                </p>
              </div>
            </li>
            <li className={styles.card}>
              <span className={styles.period}>07/2021 - 04/2022</span>
              <div>
                <h3>Estagiária • Round Pegs</h3>
                <p>
                  Aprendi a utilizar o Adalo, uma ferramenta de desenvolvimento
                  de aplicativo nocode, por meio de tutoriais disponibilizados
                  pela empresa concedente; • Tomei conhecimento do poder das
                  plataformas no-code, • Realizei uma pesquisa de mercado, na
                  qual foi analisado as empresas do setor de desenvolvimento de
                  softwares a fim de obter uma visão geral da posição da Round
                  Pegs dentro do mercado digital; • Participei de reuniões com
                  clientes brasileiros para o acompanhamento de seus projetos,
                  adaptando a melhor proposta para cada cliente e para cada
                  projeto; • Participei as reuniões semanais com a equipe da
                  Round Pegs, sugerindo ideias para melhoria no fluxo de vendas
                  e participando de sessões de brainstorms; • Ajudei a gerenciar
                  a página da Round Pegs no LinkedIn, por meio da construção de
                  um calendário de postagens e da análise dos indicadores que
                  nos mostram a melhor estratégia para aumentar a taxa de
                  engajamento e gerar leads;
                </p>
              </div>
            </li>
          </ul>
        </section>
        <section id="projects">
          <h2>Meus projetos</h2>
          <ul className={styles.projectsList}>
            <li>
              <a href="#">
                <img src="/ignite-feed.png" alt="Ignite Feed" />
                <div>
                  <h3>Ignite Feed</h3>
                  <p>
                    Interface de uma rede social, cujo feed mostra postagens e
                    comentários dos usuários e no qual é possível interagir
                    criando novos comentários e reagindo à eles.
                  </p>
                  <div className={styles.technologiesList}>
                    <FaReact />
                    <SiTypescript />
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/to-do-list.png" alt="To Do List" />
                <div>
                  <h3>To-Do List</h3>
                  <p>
                    Lista de tarefas, no qual é possível adicionar uma nova
                    tarefa, marcar e desmarcar uma tarefa como concluída,remover
                    uma tarefa da listagem e mostrar o progresso de conclusão
                    das tarefas.
                  </p>
                  <div className={styles.technologiesList}>
                    <FaReact />
                    <SiTypescript />
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/pomodoro-timer.png" alt="Pomodoro Timer" />
                <div>
                  <h3>Pomodoro Timer</h3>
                  <p>
                    Cronômetro para método de estudos Pomodoro, no qual é
                    adicionado o nome da tarefa e o tempo de duração para
                    inicializar o timer. Com tela de histórico no qual é listado
                    o histórico de tarefas e seu status (finalizado,
                    interrompido ou em andamento).
                  </p>
                  <div className={styles.technologiesList}>
                    <FaReact />
                    <SiTypescript />
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
