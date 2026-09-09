// Dados do fluxograma
const flowchartData = {
    nodes: [
        {
            id: 1,
            label: "IA para Preservação\nda Natureza",
            type: "start",
            x: 600,
            y: 30,
            width: 180,
            height: 80,
            info: {
                title: "Início: IA para Preservação da Natureza",
                description: "A inteligência artificial oferece ferramentas inovadoras para monitorar, proteger e restaurar os ecossistemas naturais."
            }
        },
        {
            id: 2,
            label: "Monitoramento\ne Detecção",
            type: "process",
            x: 200,
            y: 160,
            width: 160,
            height: 80,
            info: {
                title: "Monitoramento e Detecção",
                description: "Tecnologias IA monitoram florestas, oceanos e vida selvagem em tempo real.",
                details: [
                    "✓ Satélites com visão computacional",
                    "✓ Drones autônomos de vigilância",
                    "✓ Sensores IoT nas florestas",
                    "✓ Câmeras de reconhecimento de espécies"
                ]
            }
        },
        {
            id: 3,
            label: "Análise de Dados\ne Padrões",
            type: "process",
            x: 600,
            y: 160,
            width: 160,
            height: 80,
            info: {
                title: "Análise de Dados e Padrões",
                description: "Machine Learning analisa grandes volumes de dados ambientais.",
                details: [
                    "✓ Detecção de desmatamento",
                    "✓ Predição de incêndios",
                    "✓ Análise de mudanças climáticas",
                    "✓ Identificação de espécies ameaçadas"
                ]
            }
        },
        {
            id: 4,
            label: "Alertas e\nPrevenção",
            type: "process",
            x: 1000,
            y: 160,
            width: 160,
            height: 80,
            info: {
                title: "Alertas e Prevenção",
                description: "Sistemas IA geram alertas para ações preventivas imediatas.",
                details: [
                    "✓ Notificações em tempo real",
                    "✓ Coordenação com autoridades",
                    "✓ Planos de resposta automáticos",
                    "✓ Mobilização de recursos"
                ]
            }
        },
        {
            id: 5,
            label: "Conservação\nde Biodiversidade",
            type: "solution",
            x: 100,
            y: 330,
            width: 160,
            height: 80,
            info: {
                title: "Conservação de Biodiversidade",
                description: "IA protege espécies em risco de extinção.",
                details: [
                    "✓ Rastreamento populacional",
                    "✓ Criação de reservas inteligentes",
                    "✓ Reprodução assistida",
                    "✓ Conexão de habitats"
                ]
            }
        },
        {
            id: 6,
            label: "Restauração de\nEcossistemas",
            type: "solution",
            x: 400,
            y: 330,
            width: 160,
            height: 80,
            info: {
                title: "Restauração de Ecossistemas",
                description: "IA otimiza projetos de reflorestamento e recuperação.",
                details: [
                    "✓ Seleção de espécies nativas",
                    "✓ Otimização de plantios",
                    "✓ Monitoramento de crescimento",
                    "✓ Ajuste de estratégias"
                ]
            }
        },
        {
            id: 7,
            label: "Redução de\nPoluição",
            type: "solution",
            x: 700,
            y: 330,
            width: 160,
            height: 80,
            info: {
                title: "Redução de Poluição",
                description: "IA minimiza impactos ambientais nocivos.",
                details: [
                    "✓ Otimização de processos industriais",
                    "✓ Monitoramento de qualidade do ar",
                    "✓ Tratamento de resíduos inteligente",
                    "✓ Redução de emissões"
                ]
            }
        },
        {
            id: 8,
            label: "Educação e\nEngajamento",
            type: "solution",
            x: 1000,
            y: 330,
            width: 160,
            height: 80,
            info: {
                title: "Educação e Engajamento",
                description: "IA promove consciência ambiental nas comunidades.",
                details: [
                    "✓ Plataformas educativas interativas",
                    "✓ Gamificação da conservação",
                    "✓ Realidade virtual de ecossistemas",
                    "✓ Aplicativos de identificação"
                ]
            }
        },
        {
            id: 9,
            label: "Benefícios\nAmbientais",
            type: "benefit",
            x: 600,
            y: 520,
            width: 180,
            height: 80,
            info: {
                title: "Benefícios Ambientais Alcançados",
                description: "Os resultados práticos da aplicação de IA na natureza.",
                details: [
                    "✓ Redução do desmatamento",
                    "✓ Aumento da biodiversidade",
                    "✓ Melhoria da qualidade ambiental",
                    "✓ Mitigação das mudanças climáticas"
                ]
            }
        },
        {
            id: 10,
            label: "Planeta Saudável\ne Sustentável",
            type: "end",
            x: 600,
            y: 680,
            width: 180,
            height: 80,
            info: {
                title: "Futuro Sustentável",
                description: "Uma natureza preservada e regenerada para as futuras gerações, com IA como ferramenta essencial na conservação do planeta."
            }
        }
    ],
    
    connections: [
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 1, to: 4 },
        { from: 2, to: 5 },
        { from: 3, to: 6 },
        { from: 3, to: 7 },
        { from: 4, to: 8 },
        { from: 5, to: 9 },
        { from: 6, to: 9 },
        { from: 7, to: 9 },
        { from: 8, to: 9 },
        { from: 9, to: 10 }
    ]
};
