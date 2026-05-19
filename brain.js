```javascript id="6pk8vd"
// ===============================
// ISLAM M.BOT - CÉREBRO PRINCIPAL
// Arquivo: brain.js
// ===============================

const BOT_BRAIN = {

    "islam": {
        keywords: ["islam", "islão", "o que é o islam"],
        answer: "Islam é a submissão sincera a Allah seguindo Sua orientação.",
        source: "Alcorão 3:19",
        link: "https://quran.com/3/19"
    },

    "allah": {
        keywords: ["allah", "quem é allah", "deus"],
        answer: "Allah é o Criador dos céus e da terra, perfeito e sem início nem fim.",
        source: "Alcorão 2:255",
        link: "https://quran.com/2/255"
    },

    "tawhid": {
        keywords: ["tawhid", "monoteísmo", "allah único"],
        answer: "Tawhid é acreditar que Allah é Único, sem parceiros nem semelhantes.",
        source: "Alcorão 112:1-4",
        link: "https://quran.com/112"
    },

    "allah_filhos": {
        keywords: ["allah tem filhos", "deus tem filho"],
        answer: "Allah não possui filhos nem necessita deles.",
        source: "Alcorão 112:3",
        link: "https://quran.com/112/3"
    },

    "jesus_islam": {
        keywords: ["jesus no islam", "isa", "islam acredita em jesus"],
        answer: "Isa é um mensageiro honrado enviado por Allah.",
        source: "Alcorão 4:171",
        link: "https://quran.com/4/171"
    },

    "jesus_deus": {
        keywords: ["jesus é deus", "jesus filho de deus"],
        answer: "Isa não é Deus, mas um servo e mensageiro de Allah.",
        source: "Alcorão 5:72",
        link: "https://quran.com/5/72"
    },

    "muhammad": {
        keywords: ["muhammad", "maomé", "mensageiro"],
        answer: "Muhammad foi enviado por Allah como guia para humanidade.",
        source: "Alcorão 34:28",
        link: "https://quran.com/34/28"
    },

    "ultimo_profeta": {
        keywords: ["último profeta", "muhammad último profeta"],
        answer: "Muhammad é o selo e último dos profetas.",
        source: "Alcorão 33:40",
        link: "https://quran.com/33/40"
    },

    "alcorao": {
        keywords: ["alcorão", "corão", "quran"],
        answer: "O Alcorão é a palavra revelada por Allah como guia para humanidade.",
        source: "Alcorão 15:9",
        link: "https://quran.com/15/9"
    },

    "alcorao_alterado": {
        keywords: ["alcorão alterado", "corão alterado"],
        answer: "Allah prometeu preservar o Alcorão de alterações.",
        source: "Alcorão 15:9",
        link: "https://quran.com/15/9"
    },

    "anjos": {
        keywords: ["anjos", "malaika"],
        answer: "Os anjos são criaturas de luz que obedecem sempre a Allah.",
        source: "Alcorão 66:6",
        link: "https://quran.com/66/6"
    },

    "anjos_livre_arbitrio": {
        keywords: ["anjos têm livre arbítrio", "anjos pecam"],
        answer: "Os anjos não desobedecem Allah e cumprem Suas ordens.",
        source: "Alcorão 66:6",
        link: "https://quran.com/66/6"
    },

    "jinn": {
        keywords: ["jinn", "djinn", "gênios"],
        answer: "Os jinn são criaturas criadas do fogo e possuem livre arbítrio.",
        source: "Alcorão 55:15",
        link: "https://quran.com/55/15"
    },

    "jinn_prejudicar": {
        keywords: ["jinn prejudicar humanos", "ataque de jinn"],
        answer: "Alguns jinn podem tentar prejudicar humanos com permissão de Allah.",
        source: "Alcorão 72:6",
        link: "https://quran.com/72/6"
    },

    "qadar": {
        keywords: ["qadar", "destino", "predestinação"],
        answer: "Tudo ocorre pelo conhecimento e decreto de Allah.",
        source: "Alcorão 54:49",
        link: "https://quran.com/54/49"
    },

    "livre_arbitrio": {
        keywords: ["livre arbítrio", "escolhas humanas"],
        answer: "Allah conhece tudo, mas o ser humano escolhe suas ações.",
        source: "Alcorão 18:29",
        link: "https://quran.com/18/29"
    },

    "inferno_eterno": {
        keywords: ["inferno eterno", "jahannam eterno"],
        answer: "O inferno é uma punição preparada para descrentes persistentes.",
        source: "Alcorão 4:169",
        link: "https://quran.com/4/169"
    },

    "quem_vai_paraiso": {
        keywords: ["quem vai para o paraíso", "jannah"],
        answer: "Entrarão no Paraíso os que crerem e praticarem boas ações.",
        source: "Alcorão 2:82",
        link: "https://quran.com/2/82"
    },

    "verdadeiro_crente": {
        keywords: ["verdadeiro crente", "muçulmano verdadeiro"],
        answer: "O verdadeiro crente obedece Allah sinceramente.",
        source: "Alcorão 8:2",
        link: "https://quran.com/8/2"
    },

    "kufr": {
        keywords: ["kufr", "descrença", "incredulidade"],
        answer: "Kufr é rejeitar a verdade após ela ter sido esclarecida.",
        source: "Alcorão 2:6",
        link: "https://quran.com/2/6"
    },

    "dua_ansiedade": {
        keywords: ["ansiedade", "tristeza", "dua ansiedade"],
        answer: `
        <div class="arabic-text">
        اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ
        </div>
        <div class="hadith-box">
            <div class="hadith-narrator">Dua contra ansiedade e tristeza</div>
            Ó Allah, eu busco refúgio em Ti contra ansiedade e tristeza.
            <div class="hadith-grade">Sahih</div>
        </div>`,
        source: "Sahih al-Bukhari",
        link: "https://sunnah.com/bukhari"
    },

    "bismillah": {
        keywords: ["bismillah", "basmala"],
        answer: `
        <div class="arabic-text">
        بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </div>
        Em nome de Allah, o Misericordioso, o Compassivo.`,
        source: "Alcorão 1:1",
        link: "https://quran.com/1/1"
    }

};
```
