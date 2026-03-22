const quizSets = [
  {
    id: 'quiz1',
    title: 'Quiz 1 – ICS Fundamentals & Attacks',
    timing: 'Slutet av vecka 1',
    description: 'Fokus på ICS-arkitektur, centrala OT-begrepp och historiska attacker mot industriella styrsystem.',
    tags: ['ICS-arkitektur', 'Begrepp', 'Historiska attacker'],
    questions: [
      {
        category: 'ICS Fundamentals', catClass: 'cat-fund',
        q: 'Vad är huvudsyftet med ett <strong>SCADA-system</strong>?',
        options: [
          'Att utveckla PLC-program',
          'Att övervaka och styra industriella processer',
          'Att skydda nätverk från intrång',
          'Att analysera loggar'
        ],
        answer: 1,
        explanation: 'SCADA står för Supervisory Control and Data Acquisition. Systemet används för att övervaka processer, samla in driftdata och möjliggöra styrning av industriella anläggningar på övergripande nivå.'
      },
      {
        category: 'ICS Fundamentals', catClass: 'cat-fund',
        q: 'Vilken komponent styr vanligtvis <strong>fysiska processer</strong> i ett ICS-system?',
        options: ['Firewall', 'PLC', 'Router', 'Historian'],
        answer: 1,
        explanation: 'En PLC, Programmable Logic Controller, används för att läsa in signaler från sensorer och styra aktuatorer i den fysiska processen. Det är därför en central komponent i många industriella system.'
      },
      {
        category: 'Arkitektur', catClass: 'cat-arch',
        q: 'Vad beskriver <strong>Purdue-modellen</strong>?',
        options: [
          'En attackmodell',
          'En säkerhetsstandard',
          'En arkitekturmodell för industriella system',
          'En riskanalysmetod'
        ],
        answer: 2,
        explanation: 'Purdue-modellen är en referensmodell som delar upp industriella system i olika nivåer, från fysisk process och styrning till företags-IT. Den används ofta för att diskutera segmentering och säkerhetszoner i OT-miljöer.'
      },
      {
        category: 'Historiska attacker', catClass: 'cat-attacks',
        q: 'Vilken attack är mest känd för att ha riktat sig mot <strong>industriella styrsystem i Iran</strong>?',
        options: ['WannaCry', 'Stuxnet', 'NotPetya', 'Heartbleed'],
        answer: 1,
        explanation: 'Stuxnet är det mest kända exemplet på malware som specifikt riktades mot industriella styrsystem. Den attackerade bland annat centrifuger och blev ett historiskt vägskäl för ICS-säkerhet.'
      },
      {
        category: 'ICS Fundamentals', catClass: 'cat-fund',
        q: 'Vilken typ av komponent används ofta för att <strong>samla in sensordata och skicka den till SCADA</strong>?',
        options: ['RTU', 'Switch', 'IDS', 'Proxy'],
        answer: 0,
        explanation: 'En RTU, Remote Terminal Unit, används ofta i distribuerade miljöer för att samla in data från sensorer och skicka vidare informationen till ett SCADA-system för övervakning och styrning.'
      },
      {
        category: 'Attackytor', catClass: 'cat-attacks',
        q: 'Vilket av följande är en typisk <strong>attackyta i OT-miljöer</strong>?',
        options: ['Remote maintenance access', 'Offline PLC', 'Air-gapped system', 'Analog sensor'],
        answer: 0,
        explanation: 'Fjärråtkomst för underhåll är en vanlig attackyta eftersom den skapar en väg in till OT-miljön. Extern uppkoppling, leverantörsåtkomst och svagt skyddade VPN-lösningar är därför särskilt känsliga.'
      },
      {
        category: 'Arkitektur', catClass: 'cat-arch',
        q: 'Varför är patchning svårare i OT än i IT?',
        options: [
          'Patchar existerar inte',
          'Uppdateringar kan påverka drift och safety',
          'OT använder inte operativsystem',
          'OT-system saknar nätverk'
        ],
        answer: 1,
        explanation: 'I OT kan en uppdatering påverka tillgänglighet, stabilitet eller safety. Därför måste patchning ofta planeras noggrant, testas i förväg och ibland skjutas upp om driftkritiska system riskerar att påverkas.'
      },
      {
        category: 'Historiska attacker', catClass: 'cat-attacks',
        q: 'Vilken attack riktade sig mot <strong>ukrainska elnätet 2015–2016</strong>?',
        options: ['Solarigate', 'Industroyer', 'Mirai', 'Code Red'],
        answer: 1,
        explanation: 'Industroyer, även känt som CrashOverride, är starkt förknippat med attacker mot Ukrainas elnät. Det är ett viktigt exempel på hur malware kan byggas för att påverka industriella kontrollsystem och eldistribution.'
      },
      {
        category: 'Arkitektur', catClass: 'cat-arch',
        q: 'Vilken beskrivning fångar bäst skillnaden mellan <strong>IT och OT</strong> ur ett säkerhetsperspektiv?',
        options: [
          'IT fokuserar främst på konfidentialitet medan OT ofta prioriterar tillgänglighet och safety',
          'OT fokuserar främst på konfidentialitet medan IT prioriterar safety',
          'IT och OT har i praktiken identiska säkerhetskrav',
          'OT saknar behov av informationssäkerhet eftersom systemen styr fysisk utrustning'
        ],
        answer: 0,
        explanation: 'I IT är konfidentialitet ofta mycket central, medan OT-miljöer vanligtvis prioriterar tillgänglighet, stabil drift och safety eftersom störningar kan påverka fysisk process, människor och samhällsviktig verksamhet.'
      },
      {
        category: 'Historiska attacker', catClass: 'cat-attacks',
        q: 'Varför blev <strong>Stuxnet</strong> ett strategiskt vägskäl för ICS-säkerhet?',
        options: [
          'För att det var det första antivirusprogrammet för PLC:er',
          'För att det visade att malware kunde designas för att påverka fysisk process via styrsystem',
          'För att det bara påverkade vanliga kontorsdatorer',
          'För att det gjorde patchning onödig i OT'
        ],
        answer: 1,
        explanation: 'Stuxnet visade att avancerad skadlig kod kunde gå längre än datastöld eller störning av IT-system och i stället manipulerar styrlogik och fysisk process. Det förändrade hur världen såg på cyberhot mot industriella miljöer.'
      }
    ]
  },
  {
    id: 'quiz2',
    title: 'Quiz 2 – Threat Modeling & Risk',
    timing: 'Slutet av vecka 2',
    description: 'Fokus på hotmodellering, attackvägar, assets, hotaktörer och grundläggande riskanalys i ICS/OT.',
    tags: ['Threat modeling', 'Attack paths', 'Riskanalys'],
    questions: [
      {
        category: 'Threat Modeling', catClass: 'cat-threat',
        q: 'Vad är syftet med <strong>threat modeling</strong>?',
        options: [
          'Att installera säkerhetsprogram',
          'Att identifiera och analysera potentiella attacker',
          'Att konfigurera nätverk',
          'Att skriva säkerhetspolicy'
        ],
        answer: 1,
        explanation: 'Threat modeling används för att systematiskt identifiera vad som behöver skyddas, vilka hot som är relevanta och hur en angripare skulle kunna ta sig fram genom miljön.'
      },
      {
        category: 'Threat Modeling', catClass: 'cat-threat',
        q: 'Vilket av följande är ett exempel på en <strong>asset</strong> i ett ICS-system?',
        options: ['PLC', 'Malware', 'Phishing', 'Network scan'],
        answer: 0,
        explanation: 'En asset är något av värde som organisationen vill skydda. I ett ICS-system kan det vara en PLC, ett styrsystem, en server, ett nätverk eller själva processen som kontrolleras.'
      },
      {
        category: 'Attack Paths', catClass: 'cat-attacks',
        q: 'Vad beskriver en <strong>attack path</strong>?',
        options: [
          'Hur ett system patchas',
          'Hur en angripare stegvis komprometterar systemet',
          'Hur data lagras',
          'Hur nätverk segmenteras'
        ],
        answer: 1,
        explanation: 'En attack path beskriver de steg en angripare kan ta för att nå ett mål, till exempel från phishing till stulna konton, vidare till VPN-access och därefter in i OT-nätverket.'
      },
      {
        category: 'Threat Modeling', catClass: 'cat-threat',
        q: 'Vilket av följande är ett exempel på en <strong>attack surface</strong>?',
        options: ['PLC firmware', 'VPN access', 'Historian database', 'Safety controller'],
        answer: 1,
        explanation: 'En attackyta är en möjlig ingång eller exponerad punkt som angriparen kan utnyttja. VPN-access är ett tydligt exempel eftersom den öppnar en väg in i nätverket.'
      },
      {
        category: 'Riskanalys', catClass: 'cat-risk',
        q: 'Vad mäter en <strong>riskanalys</strong>?',
        options: [
          'Hur mycket CPU systemet använder',
          'Kombinationen av sannolikhet och konsekvens',
          'Hur många användare systemet har',
          'Antal patchar installerade'
        ],
        answer: 1,
        explanation: 'Risk brukar beskrivas som en kombination av hur sannolik en händelse är och hur stor konsekvensen blir om den inträffar. Det är en kärnidé i många riskmodeller.'
      },
      {
        category: 'Riskanalys', catClass: 'cat-risk',
        q: 'Vilken typ av hotaktör är mest trolig bakom <strong>sabotage mot kritisk infrastruktur</strong>?',
        options: ['Nation state', 'Script kiddie', 'Student', 'Web designer'],
        answer: 0,
        explanation: 'Sabotage mot kritisk infrastruktur kräver ofta resurser, uthållighet och strategiskt motiv. Därför kopplas sådana scenarier ofta till statsstödda aktörer eller nation state-kapacitet.'
      },
      {
        category: 'Attack Paths', catClass: 'cat-attacks',
        q: 'Vad är ett exempel på <strong>sensor spoofing</strong>?',
        options: [
          'Manipulera sensordata så att systemet tror att processen är normal',
          'Installera ransomware',
          'Blockera nätverkstrafik',
          'Uppdatera PLC firmware'
        ],
        answer: 0,
        explanation: 'Sensor spoofing innebär att angriparen manipulerar eller förfalskar mätvärden så att operatörer eller styrlogik får en felaktig bild av processens verkliga tillstånd.'
      },
      {
        category: 'Attack Paths', catClass: 'cat-attacks',
        q: 'Vilken attack kan beskrivas som <code>Phishing → stolen credentials → VPN access → OT network</code>?',
        options: ['Attack chain', 'Firewall rule', 'IDS alert', 'Network segmentation'],
        answer: 0,
        explanation: 'Detta beskriver en attack chain, alltså en kedja av steg där angriparen successivt tar sig närmare sitt mål genom att utnyttja flera svagheter eller möjligheter i följd.'
      },
      {
        category: 'Threat Modeling', catClass: 'cat-threat',
        q: 'Vilket steg är oftast <strong>mest användbart först</strong> i en enkel hotmodellering av ett OT-system?',
        options: [
          'Att börja med att köpa säkerhetsverktyg',
          'Att kartlägga assets, zoner, kommunikationsvägar och kritiska beroenden',
          'Att direkt skriva incidentrapport',
          'Att slumpmässigt välja ett hot och anta att det är viktigast'
        ],
        answer: 1,
        explanation: 'En användbar hotmodellering börjar normalt med att förstå miljön: vilka tillgångar som finns, hur systemen kommunicerar, vilka beroenden som är kritiska och var gränssnitten finns. Utan den bilden blir resten av analysen svag.'
      },
      {
        category: 'Riskanalys', catClass: 'cat-risk',
        q: 'Vilket scenario illustrerar bäst <strong>hög konsekvens men lägre sannolikhet</strong> i OT-riskanalys?',
        options: [
          'En användare skriver fel lösenord en gång',
          'En kort nätverksfördröjning utan processpåverkan',
          'Manipulation av styrlogik i ett kraftsystem som leder till längre driftstopp',
          'En missad loggpost i en övervakningsserver'
        ],
        answer: 2,
        explanation: 'I OT finns scenarier som inte inträffar ofta men som kan få mycket stora effekter om de väl händer, exempelvis manipulation av styrlogik i kritisk infrastruktur. Riskbedömning i ICS måste därför väga in även sällsynta men allvarliga utfall.'
      }
    ]
  },
  {
    id: 'quiz3',
    title: 'Quiz 3 – ICS Defense & Security',
    timing: 'Slutet av vecka 3',
    description: 'Fokus på försvar i OT, segmentering, övervakning, autentisering och säkerhetsprinciper.',
    tags: ['Försvar', 'Säkerhetsarkitektur', 'Utvärdering'],
    questions: [
      {
        category: 'Defense', catClass: 'cat-defense',
        q: 'Vad är syftet med <strong>network segmentation i OT</strong>?',
        options: [
          'Att öka bandbredd',
          'Att isolera system och begränsa attacker',
          'Att förbättra grafikprestanda',
          'Att minska energiförbrukning'
        ],
        answer: 1,
        explanation: 'Segmentering delar upp nätverket i zoner och begränsar kommunikationen mellan dem. Det minskar risken att en angripare kan röra sig fritt mellan IT och OT eller mellan olika OT-delar.'
      },
      {
        category: 'Defense', catClass: 'cat-defense',
        q: 'Vad är en <strong>OT firewall</strong>?',
        options: [
          'En brandvägg anpassad för industriella protokoll',
          'En router',
          'En PLC',
          'Ett antivirus'
        ],
        answer: 0,
        explanation: 'En OT-firewall är anpassad för industriella miljöer och kan ofta hantera eller filtrera trafik med protokoll som används i styrsystem, inte bara vanlig IT-trafik.'
      },
      {
        category: 'Defense', catClass: 'cat-defense',
        q: 'Vad innebär <strong>least privilege</strong>?',
        options: [
          'Alla användare har samma rättigheter',
          'Användare får minsta möjliga behörighet',
          'Administratörer har inga rättigheter',
          'System saknar autentisering'
        ],
        answer: 1,
        explanation: 'Principen least privilege innebär att användare, konton och system endast ska ha de rättigheter de faktiskt behöver. Det begränsar skadeomfånget vid misstag eller intrång.'
      },
      {
        category: 'Defense', catClass: 'cat-defense',
        q: 'Vilken metod används för att <strong>upptäcka avvikande beteende i OT-nätverk</strong>?',
        options: ['Antivirus', 'Anomaly detection', 'Defragmentering', 'Backup'],
        answer: 1,
        explanation: 'Anomaly detection bygger på att känna igen normalt beteende och därefter larma när trafiken eller processmönster avviker på ett misstänkt sätt.'
      },
      {
        category: 'Defense', catClass: 'cat-defense',
        q: 'Vad är syftet med <strong>multi-factor authentication</strong>?',
        options: [
          'Öka CPU-prestanda',
          'Förhindra obehörig åtkomst även om lösenord läcker',
          'Förbättra nätverkshastighet',
          'Automatisera patchning'
        ],
        answer: 1,
        explanation: 'MFA kräver fler än en autentiseringsfaktor, till exempel lösenord och engångskod. Därför räcker det inte att angriparen bara får tag i ett lösenord.'
      },
      {
        category: 'Defense', catClass: 'cat-defense',
        q: 'Vilken standard är särskilt relevant för <strong>industriell cybersäkerhet</strong>?',
        options: ['ISO 9001', 'IEC 62443', 'HTML5', 'PCI DSS'],
        answer: 1,
        explanation: 'IEC 62443 är en central standardserie för cybersäkerhet i industriella automations- och kontrollsystem. Den används ofta som referens för både teknik, processer och ansvar.'
      },
      {
        category: 'Riskanalys', catClass: 'cat-risk',
        q: 'Vad betyder <strong>residual risk</strong>?',
        options: [
          'Risk innan säkerhetsåtgärder',
          'Risk efter att säkerhetsåtgärder införts',
          'Risk som ignoreras',
          'Risk i IT-system'
        ],
        answer: 1,
        explanation: 'Residual risk är den risk som återstår efter att kontroller och skyddsåtgärder har införts. Den blir sällan noll, vilket gör att organisationen måste bedöma om den kvarvarande risken är acceptabel.'
      },
      {
        category: 'Defense', catClass: 'cat-defense',
        q: 'Vad är huvudsyftet med <strong>monitoring i OT-nätverk</strong>?',
        options: [
          'Förbättra grafik',
          'Upptäcka intrång och avvikelser',
          'Komprimera data',
          'Optimera PLC-kod'
        ],
        answer: 1,
        explanation: 'Monitoring används för att upptäcka avvikande beteenden, intrångsförsök och driftmässiga anomalier. I OT är det viktigt eftersom många attacker först syns som små förändringar i trafik eller processdata.'
      },
      {
        category: 'Defense', catClass: 'cat-defense',
        q: 'Vilken kombination ger oftast <strong>starkast praktiskt skydd</strong> mot lateral rörelse från IT till OT?',
        options: [
          'Snabbare switchar och större skärmar i kontrollrummet',
          'Segmentering, strikt åtkomstkontroll, övervakning och begränsad fjärråtkomst',
          'Fler användarkonton för operatörer',
          'Att låta all trafik passera fritt men logga den i efterhand'
        ],
        answer: 1,
        explanation: 'Ett effektivt OT-försvar bygger sällan på en enda kontroll. Kombinationen av segmentering, begränsad åtkomst, övervakning och kontrollerad fjärranslutning gör det betydligt svårare för en angripare att röra sig från IT in i OT-miljön.'
      },
      {
        category: 'Defense', catClass: 'cat-defense',
        q: 'Varför är <strong>passiv övervakning</strong> ofta att föredra i OT-nätverk?',
        options: [
          'För att den alltid blockerar attacker automatiskt',
          'För att den kan minska risken att störa känsliga system och protokoll',
          'För att den ersätter behovet av segmentering',
          'För att den gör patchning onödig'
        ],
        answer: 1,
        explanation: 'Många OT-system är känsliga för aktiv scanning och oväntad trafik. Passiv övervakning låter organisationen observera kommunikation och beteenden utan att i samma grad riskera att störa driftkritiska system eller processer.'
      }
    ]
  }
];
