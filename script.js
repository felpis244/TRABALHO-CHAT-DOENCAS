const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

const responses = {
    
    
    "depressão": "Depressão é um transtorno de humor que causa uma sensação persistente de tristeza.",
    "gripe": "A gripe é uma infecção viral que afeta o sistema respiratório. Os sintomas incluem febre, tosse e dores no corpo.",
    "covid": "A COVID-19 é uma doença causada pelo coronavírus SARS-CoV-2. Os sintomas variam de leves a graves.",
    "diabetes": "Diabetes é uma doença crônica que ocorre quando o corpo não consegue produzir insulina suficiente ou não a utiliza de forma eficaz.",
    "asma": "Asma é uma condição que afeta as vias aéreas e pode causar dificuldade para respirar, tosse e chiado no peito.",
    "dor de cabeça": "A dor de cabeça pode ter várias causas, desde tensão até enxaquecas. Se persistir, consulte um médico.",
    "hipertensão": "Hipertensão é uma condição em que a pressão arterial está constantemente elevada, aumentando o risco de doenças cardíacas.",
    "alergia": "Alergias são reações do sistema imunológico a substâncias específicas, podendo causar sintomas como espirros e coceira.",
    "gastrite": "Gastrite é a inflamação do revestimento do estômago, podendo causar dor abdominal, náuseas e indigestão.",
    "artrite": "Artrite é a inflamação das articulações, causando dor, inchaço e rigidez, muitas vezes afetando a mobilidade.",
    "depressão": "Depressão é um transtorno de humor que causa uma sensação persistente de tristeza e perda de interesse.",
    "ansiedade": "Transtornos de ansiedade envolvem sentimentos intensos de preocupação e medo que podem interferir na vida cotidiana.",
    "insônia": "Insônia é a dificuldade em adormecer ou permanecer dormindo, levando a um sono não reparador.",
    "fibromialgia": "Fibromialgia é uma condição que causa dor generalizada e fadiga, muitas vezes acompanhada de distúrbios do sono.",
    "infecção urinária": "Infecções urinárias são causadas por bactérias e podem causar dor ao urinar, necessidade frequente de urinar e desconforto abdominal.",
    "câncer": "Câncer é uma doença caracterizada pelo crescimento descontrolado de células anormais no corpo.",
    "alzheimer": "A Doença de Alzheimer é uma condição neurodegenerativa que afeta a memória, o pensamento e o comportamento.",
    "esclerose múltipla": "Esclerose múltipla é uma doença autoimune que afeta o sistema nervoso central, causando diversos sintomas neurológicos.",
    "doença cardíaca": "Doenças cardíacas referem-se a uma variedade de condições que afetam o coração, incluindo doenças coronarianas.",
    "acidente vascular cerebral": "Um AVC ocorre quando o fluxo sanguíneo para uma parte do cérebro é interrompido, podendo causar danos cerebrais.",
    "artrite reumatoide": "Artrite reumatoide é uma doença autoimune que causa inflamação crônica nas articulações.",
    "síndrome do intestino irritável": "Síndrome do intestino irritável é um distúrbio gastrointestinal que causa dor abdominal e alterações nos hábitos intestinais.",
    "hipotireoidismo": "Hipotireoidismo ocorre quando a glândula tireoide não produz hormônios suficientes, levando a sintomas como fadiga e ganho de peso.",
    "epilepsia": "Epilepsia é um transtorno neurológico caracterizado por convulsões recorrentes.",
    "pneumonia": "Pneumonia é uma infecção que inflama os sacos de ar nos pulmões, causando tosse e dificuldade para respirar.",
    "tuberculose": "Tuberculose é uma infecção bacteriana que afeta os pulmões, mas pode atingir outras partes do corpo.",
    "hepatite": "Hepatite é a inflamação do fígado, podendo ser causada por vírus, álcool ou outras substâncias.",
    "doença celíaca": "A doença celíaca é uma condição autoimune em que a ingestão de glúten causa danos ao intestino delgado.",
    "esclerose lateral amiotrófica": "Esclerose lateral amiotrófica (ELA) é uma doença neurodegenerativa que afeta as células nervosas do cérebro e da medula espinhal.",
    "infecção por HIV": "O HIV é um vírus que ataca o sistema imunológico, podendo levar à AIDS se não tratado.",
    "síndrome da fadiga crônica": "Síndrome da fadiga crônica é uma condição que causa fadiga extrema que não melhora com repouso.",
    "artrite psoriática": "Artrite psoriática é uma condição inflamatória que afeta as articulações e a pele.",
    "doença de Parkinson": "A Doença de Parkinson é um transtorno neurodegenerativo que afeta o movimento, causando tremores e rigidez.",
    "trombose": "Trombose é a formação de um coágulo sanguíneo em um vaso sanguíneo, podendo causar dor e inchaço.",
    "tendinite": "Tendinite é a inflamação de um tendão, frequentemente causada por uso excessivo ou lesão.",
    "síndrome do túnel do carpo": "Essa condição ocorre quando o nervo mediano é comprimido no punho, causando dor e formigamento.",
    "infeção bacteriana": "Infecções bacterianas são causadas por bactérias e podem afetar diferentes partes do corpo.",
    "insuficiência renal": "Insuficiência renal é a incapacidade dos rins de filtrar adequadamente o sangue.",
    "síndrome de Down": "Síndrome de Down é uma condição genética causada pela presença de uma cópia extra do cromossomo 21.",
    "dislexia": "Dislexia é um transtorno de aprendizagem que afeta a habilidade de leitura e escrita.",
    "doenças autoimunes": "Doenças autoimunes ocorrem quando o sistema imunológico ataca as células do próprio corpo.",
    "hipertensão pulmonar": "Hipertensão pulmonar é a pressão alta nas artérias que levam aos pulmões.",
    "doença de Crohn": "A doença de Crohn é uma condição inflamatória que afeta o trato gastrointestinal.",
    "colite ulcerativa": "Colite ulcerativa é uma doença inflamatória intestinal que causa inflamação no cólon.",
    "doença de Huntington": "A Doença de Huntington é um transtorno genético que causa a degeneração progressiva das células nervosas.",
    "neoplasia": "Neoplasias são tumores que podem ser benignos ou malignos.",
    "anemia": "Anemia é a redução do número de glóbulos vermelhos ou da hemoglobina no sangue.",
    "laringite": "Laringite é a inflamação da laringe, causando rouquidão e dor de garganta.",
    "otite": "Otite é a inflamação do ouvido, podendo causar dor e desconforto.",
    "varíola": "Varíola é uma infecção viral grave que foi erradicada globalmente.",
    "varicela": "Varicela, ou catapora, é uma infecção viral que causa erupções cutâneas e febre.",
    "herpes": "Herpes é uma infecção viral que causa bolhas dolorosas na pele.",
    "sífilis": "Sífilis é uma infecção bacteriana transmitida sexualmente que pode ter consequências graves se não tratada.",
    "gonorreia": "Gonorreia é uma infecção bacteriana sexualmente transmissível que afeta o trato urinário e reprodutivo.",
    "candidíase": "Candidíase é uma infecção causada por fungos do gênero Candida, comumente afetando a região genital.",
    "malária": "Malária é uma doença infecciosa causada por parasitas transmitidos por mosquitos.",
    "dengue": "Dengue é uma doença viral transmitida por mosquitos, causando febre e dores no corpo.",
    "febre amarela": "Febre amarela é uma doença viral transmitida por mosquitos, que pode ser grave.",
    "chikungunya": "Chikungunya é uma infecção viral transmitida por mosquitos, causando febre e dor nas articulações.",
    "zika": "Zika é uma infecção viral transmitida por mosquitos, associada a malformações congênitas.",
    "doença de Lyme": "Doença de Lyme é uma infecção bacteriana transmitida por carrapatos, causando erupções cutâneas e sintomas gripais.",
    "toxoplasmose": "Toxoplasmose é uma infecção causada pelo parasita Toxoplasma gondii, geralmente adquirida através de gatos.",
    "oi": "Oi! Que bom ver você por aqui! Como posso ajudar?",
    "olá": "Olá! Espero que esteja tendo um bom dia. O que você precisa?",
    "beleza": "Tudo tranquilo por aqui! E com você? Como posso ajudar?",
    "blz": "Beleza! Estou aqui para ajudar. O que você gostaria de saber?",
    "bom dia": "Bom dia! Como posso iluminar seu dia hoje?",
    "boa tarde": "Boa tarde! Como posso tornar sua tarde mais interessante?",
    "boa noite": "Boa noite! Estou aqui se precisar de algo antes de dormir.",
    "função do diafragma": "O diafragma é o principal músculo envolvido na respiração, ajudando na inspiração e expiração.",
    "função do sistema reprodutor": "O sistema reprodutor é responsável pela produção de gametas e pela reprodução.",
    "função do sistema imunológico": "O sistema imunológico protege o corpo contra infecções e doenças.",
    "função do sistema tegumentar": "O sistema tegumentar é responsável pela proteção do corpo e pela regulação da temperatura.",
    "tchau": "Tchau! Espero ter ajudado. Volte sempre!",
    "até logo": "Até logo! Tenha um ótimo dia!",
    "até mais": "Até mais! Fico à disposição!",
    "adeus": "Adeus! Cuide-se e até a próxima!",
    "valeu": "Valeu! Se precisar de algo, é só chamar!",
    "saudações": "Saudações! Como posso ajudar você hoje?",
    "e aí": "Oi! O que posso fazer por você?",
    "como vai": "Estou aqui para ajudar! O que você precisa?"

};

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage === '') return;

    appendMessage(userMessage, 'user');
    userInput.value = '';

    const botResponse = getBotResponse(userMessage.toLowerCase());
    appendMessage(botResponse, 'bot');
}

function appendMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', sender);
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; 
}

function getBotResponse(userMessage) {
    for (const key in responses) {
        if (userMessage.includes(key)) {
            return responses[key];
        }
    }
    return "Desculpe, não consegui entender sua pergunta.";
}