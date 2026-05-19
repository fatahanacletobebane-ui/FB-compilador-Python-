// ╔══════════════════════════════════════════════════════════════╗
// ║           🧠 CÉREBRO DO ISLAM M.BOT                          ║
// ║   ADICIONE SEU CONHECIMENTO AQUI                             ║
// ║                                                              ║
// ║   FORMATO:                                                   ║
// ║   "nome-do-topico": {                                        ║
// ║       keywords: ["palavra1", "palavra2"],                    ║
// ║       answer: "sua resposta em HTML",                        ║
// ║       source: "fonte islâmica",                              ║
// ║       link: "https://..."  // OPCIONAL                       ║
// ║   }                                                          ║
// ╚══════════════════════════════════════════════════════════════╝

const BOT_BRAIN = {

    "allah": {
        keywords: ["allah", "deus", "criador", "senhor"],
        answer: "<strong>Allah</strong> é o nome próprio do Criador em árabe. Significa "O único Deus verdadeiro digno de adoração".",
        source: "Alcorão 2:255",
        link: "https://quran.com/2/255"
    },

    "islam": {
        keywords: ["islam", "islão", "o que é islam", "definição de islam"],
        answer: "O <strong>Islam</strong> significa submissão a Allah e paz. É a religião monoteísta revelada ao Profeta Muhammad (ﷺ).",
        source: "Alcorão 3:19",
        link: "https://quran.com/3/19"
    },

    "alcorao": {
        keywords: ["alcorão", "corão", "quran", "livro sagrado"],
        answer: "O <strong>Alcorão</strong> é a palavra literal de Allah, revelada ao Profeta Muhammad (ﷺ) através do Anjo Gabriel.",
        source: "Alcorão 15:9",
        link: "https://quran.com/15/9"
    },

    "profeta": {
        keywords: ["profeta", "muhammad", "mohamed", "mensageiro"],
        answer: "O <strong>Profeta Muhammad</strong> (ﷺ) é o último e selo dos profetas, enviado como misericórdia para toda a humanidade.",
        source: "Alcorão 33:40",
        link: "https://quran.com/33/40"
    },

    "wudu": {
        keywords: ["wudu", "ablusão", "ablusao", "como lavar", "purificação"],
        answer: "O <strong>Wudu</strong> é obrigatório antes da oração. Passos: 1.Intenção 2.Bismillah 3.Lavar mãos 3x 4.Enxaguar boca/nariz 3x 5.Lavar rosto 3x 6.Lavar braços até cotovelos 3x 7.Passar mãos na cabeça 8.Limpar ouvidos 9.Lavar pés 3x",
        source: "Sahih al-Bukhari 191",
        link: "https://sunnah.com/bukhari/4/4"
    },

    "salat": {
        keywords: ["salat", "oração", "oracao", "rezar", "salah", "namaz"],
        answer: "A <strong>Salat</strong> é obrigatória 5 vezes ao dia: Fajr (2 rak'ahs), Dhuhr (4), Asr (4), Maghrib (3), Isha (4).",
        source: "Alcorão 4:103",
        link: "https://quran.com/4/103"
    },

    "zakat": {
        keywords: ["zakat", "zakat", "caridade obrigatória", "pobre", "2.5%"],
        answer: "A <strong>Zakat</strong> é obrigatória: 2.5% da riqueza acima do Nisab após 1 ano lunar. São 8 grupos que podem receber.",
        source: "Alcorão 9:60",
        link: "https://quran.com/9/60"
    },

    "ramadan": {
        keywords: ["ramadan", "ramadã", "jejum", "sawm", "mês do jejum"],
        answer: "O <strong>Jejum de Ramadã</strong> é obrigatório. Abster-se de comida, bebida e relações desde Fajr até Maghrib.",
        source: "Alcorão 2:183",
        link: "https://quran.com/2/183"
    },

    "caridade": {
        keywords: ["caridade", "sadaqah", "sadaqa", "doar", "doação", "ajudar"],
        answer: "O Profeta (ﷺ) disse: 'A caridade não diminui a riqueza.' Sorrir para o irmão também é caridade.",
        source: "Sahih Muslim 2588",
        link: "https://sunnah.com/muslim/32/24"
    },

    "paciencia": {
        keywords: ["paciência", "paciencia", "sabr", "esperar", "calma"],
        answer: "O Profeta (ﷺ) disse: 'Quão maravilhosa é a situação do crente! Se algo bom acontece, agradece; se algo mal, é paciente.'",
        source: "Sahih Muslim 2999",
        link: "https://sunnah.com/muslim/45/57"
    },

    "intencao": {
        keywords: ["intenção", "intencao", "niyyah", "niyya", "ações por intenções"],
        answer: "O Profeta (ﷺ) disse: 'As ações são julgadas pelas intenções, e cada pessoa terá o que pretendeu.'",
        source: "Sahih al-Bukhari 1",
        link: "https://sunnah.com/bukhari/1/1"
    },

    "ansiedade": {
        keywords: ["ansiedade", "medo", "preocupação", "preocupacao", "tristeza"],
        answer: "A Dua de Yunus: 'Não há divindade exceto Tu; glorificado sejas! Eu fui dos injustos.' Também: 'Hasbunallahu wa ni'mal wakeel' (Allah é suficiente).",
        source: "Alcorão 21:87",
        link: "https://quran.com/21/87"
    },

    "sono": {
        keywords: ["sono", "dormir", "deitar", "antes de dormir", "noite"],
        answer: "Antes de dormir: 'Em Teu nome, ó Allah, eu morro e vivo.' Ao acordar: 'Louvado seja Allah que nos ressuscitou.'",
        source: "Sahih al-Bukhari 247",
        link: "https://sunnah.com/bukhari/80/64"
    },

    "estudo": {
        keywords: ["estudo", "conhecimento", "aprender", "saber", "ilmu"],
        answer: "'Meu Senhor, aumenta-me o conhecimento!' (Rabbi zidni ilma). Quem busca conhecimento, Allah facilita caminho para o Paraíso.",
        source: "Alcorão 20:114",
        link: "https://quran.com/20/114"
    },

    "suporte": {
        keywords: ["suporte", "ajuda", "contacto", "contato", "apoio", "islam moçambique", "860407269"],
        answer: "<strong>🕌 Islam Moçambique - Suporte</strong><br><br>📞 <strong>WhatsApp/Telefone:</strong> 860407269<br><br><strong>💰 Apoio Financeiro:</strong><br>• M-Pesa Agente Paga Fácil: <strong>1228803</strong><br>• Emola: <strong>860407269</strong><br>• Banco BIM NIB: <strong>0001000000124733562</strong>",
        source: "Islam Moçambique",
        link: "https://wa.me/258860407269"
    },

    "doar": {
        keywords: ["doar", "doação", "donativo", "contribuir", "apoiar"],
        answer: "<strong>💚 Apoie o Islam M.bot</strong><br><br><strong>Meios de Pagamento:</strong><br>📱 <strong>M-Pesa (Agente Paga Fácil):</strong> 1228803<br>📲 <strong>Emola:</strong> 860407269<br>🏦 <strong>Banco BIM:</strong> NIB 0001000000124733562<br><br>📞 <strong>Confirmar/Questões:</strong> 860407269 (WhatsApp)",
        source: "Islam Moçambique",
        link: "https://wa.me/258860407269"
    }

    // ═══ ADICIONE SEUS TÓPICOS AQUI ═══
    // Copie um bloco acima, cole aqui e altere
    // Não esqueça: vírgula no final de cada bloco, exceto o último

};
