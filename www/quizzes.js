const quizSets = [
  {
    id: 'quiz1',
    title: 'Molnsäkerhet och hybrida miljöer – Del 1: Cloud Fundamentals & DevOps',
    description: 'Grundläggande förståelse för molntjänster, ansvar och säker CI/CD.',
    tags: ['Cloud', 'DevOps', 'Security'],
    questions: [
      {
        category: 'Cloud Fundamentals', catClass: 'cat-cloud',
        q: 'Vad innebär <strong>IaaS</strong>?',
        options: [
          'Att leverantören hanterar hela applikationen',
          'Att kunden hanterar operativsystem och applikationer',
          'Att kunden endast hanterar användare',
          'Att inget ansvar ligger på kunden'
        ],
        answer: 1,
        explanation: 'IaaS innebär att leverantören tillhandahåller infrastruktur medan kunden ansvarar för OS, applikationer och data.'
      },
      {
        category: 'Cloud Fundamentals', catClass: 'cat-cloud',
        q: 'Vad beskriver <strong>Shared Responsibility Model</strong>?',
        options: [
          'Att kunden ansvarar för allt',
          'Att leverantören ansvarar för allt',
          'Att ansvar delas mellan leverantör och kund',
          'Att säkerhet inte behövs i molnet'
        ],
        answer: 2,
        explanation: 'Ansvar delas beroende på tjänstemodell.'
      },
      {
        category: 'Cloud', catClass: 'cat-cloud',
        q: 'Vilken risk är typisk vid felkonfigurerad <strong>cloud storage</strong>?',
        options: [
          'Ökad CPU-användning',
          'Dataexponering',
          'Långsammare nätverk',
          'Felaktig UI-design'
        ],
        answer: 1,
        explanation: 'Felaktiga access policies kan exponera data.'
      },
      {
        category: 'Cloud', catClass: 'cat-cloud',
        q: 'Varför är <strong>identity management</strong> kritiskt i molnet?',
        options: [
          'För att öka prestanda',
          'För att styra åtkomst till resurser',
          'För att komprimera data',
          'För att hantera nätverk'
        ],
        answer: 1,
        explanation: 'Identiteter styr åtkomst till resurser.'
      },
      {
        category: 'Cloud Architecture', catClass: 'cat-cloud',
        q: 'Vilken designprincip minskar blast radius i cloud?',
        options: [
          'Centralisering',
          'Segmentering och isolering',
          'Delade credentials',
          'Publika endpoints'
        ],
        answer: 1,
        explanation: 'Segmentering begränsar spridning av attacker.'
      },
      {
        category: 'Security', catClass: 'cat-cloud',
        q: 'Vilken typ av attack är vanligast mot cloud identities?',
        options: [
          'DDoS',
          'Credential theft',
          'Fysisk sabotage',
          'Disk failure'
        ],
        answer: 1,
        explanation: 'Stulna credentials är en vanlig attackvektor.'
      },
      {
        category: 'Cloud', catClass: 'cat-cloud',
        q: 'Vad är en typisk konsekvens av överprivilegierade konton?',
        options: [
          'Snabbare system',
          'Större attackyta',
          'Mindre lagring',
          'Lägre kostnader'
        ],
        answer: 1,
        explanation: 'För breda rättigheter ökar risken vid intrång.'
      },
      {
        category: 'Security', catClass: 'cat-cloud',
        q: 'Vad är syftet med <strong>Zero Trust</strong>?',
        options: [
          'Tillåta all trafik internt',
          'Verifiera allt, alltid',
          'Blockera internet',
          'Ta bort autentisering'
        ],
        answer: 1,
        explanation: 'Zero Trust bygger på kontinuerlig verifiering.'
      },

      // NYA FRÅGOR
      {
        category: 'Azure DevOps', catClass: 'cat-devops',
        q: 'Vilken säkerhetsrisk uppstår om <strong>hemligheter lagras direkt i kod eller pipeline</strong>?',
        options: [
          'Pipelinen blir långsammare',
          'Hemligheter kan exponeras via repo eller loggar',
          'Deployment slutar fungera',
          'Versionshantering bryts'
        ],
        answer: 1,
        explanation: 'Secrets i kod kan exponeras via repo, historik och loggar.'
      },
      {
        category: 'Azure DevOps', catClass: 'cat-devops',
        q: 'Vilken kombination ger bäst säker CI/CD?',
        options: [
          'Publika repos och admin-access',
          'Branch policies, least privilege och skyddade service connections',
          'Full access till alla utvecklare',
          'Ingen loggning'
        ],
        answer: 1,
        explanation: 'Säker CI/CD kräver flera lager av kontroll.'
      }
    ]
  },

  {
    id: 'quiz2',
    title: 'Molnsäkerhet och hybrida miljöer – Del 2: Risk, Threats & Defender',
    description: 'Riskanalys, hotbild och Defender for Cloud.',
    tags: ['Risk', 'Threats', 'Defender'],
    questions: [
      {
        category: 'Defender', catClass: 'cat-defender',
        q: 'Vad är syftet med <strong>Microsoft Defender for Cloud</strong>?',
        options: [
          'Skriva kod',
          'Ge säkerhetsrekommendationer och upptäcka hot',
          'Ersätta brandväggar',
          'Hantera klienter'
        ],
        answer: 1,
        explanation: 'Defender analyserar säkerhetsläge och hot.'
      },
      {
        category: 'Risk', catClass: 'cat-risk',
        q: 'Vad definierar risk?',
        options: [
          'Antal användare',
          'Sannolikhet × konsekvens',
          'CPU-belastning',
          'Antal servrar'
        ],
        answer: 1,
        explanation: 'Risk = sannolikhet × konsekvens.'
      },
      {
        category: 'Threats', catClass: 'cat-threat',
        q: 'Vilket hot är vanligt i cloud?',
        options: ['Phishing', 'Power surge', 'Disk failure', 'Overheating'],
        answer: 0,
        explanation: 'Phishing används för att få access.'
      },
      {
        category: 'Risk', catClass: 'cat-risk',
        q: 'Vad är en asset?',
        options: ['Attack', 'VM', 'Threat', 'Exploit'],
        answer: 1,
        explanation: 'En VM är en tillgång.'
      },
      {
        category: 'Risk', catClass: 'cat-risk',
        q: 'Vad innebär residual risk?',
        options: [
          'Risk före skydd',
          'Risk efter skydd',
          'Ingen risk',
          'Endast IT-risk'
        ],
        answer: 1,
        explanation: 'Residual risk är kvarvarande risk.'
      },
      {
        category: 'Threat Modeling', catClass: 'cat-threat',
        q: 'Vad är första steget i threat modeling?',
        options: [
          'Installera verktyg',
          'Kartlägga system och assets',
          'Patcha system',
          'Blockera trafik'
        ],
        answer: 1,
        explanation: 'Man måste förstå systemet först.'
      },
      {
        category: 'Compliance', catClass: 'cat-comp',
        q: 'Vad är syftet med compliance?',
        options: [
          'Öka prestanda',
          'Följa lagar',
          'Bygga UI',
          'Hantera CPU'
        ],
        answer: 1,
        explanation: 'Compliance handlar om regelverk.'
      },
      {
        category: 'Risk', catClass: 'cat-risk',
        q: 'Vilken risk ökar vid dålig accesskontroll?',
        options: [
          'Prestanda',
          'Obehörig åtkomst',
          'UI-problem',
          'CPU usage'
        ],
        answer: 1,
        explanation: 'Accesskontroll skyddar resurser.'
      },

      // NYA FRÅGOR
      {
        category: 'Defender', catClass: 'cat-defender',
        q: 'Vad innebär en rekommendation i Defender?',
        options: [
          'Systemfel',
          'Säkerhetsförbättring behövs',
          'Azure är trasigt',
          'Ingen betydelse'
        ],
        answer: 1,
        explanation: 'Rekommendationer visar förbättringsområden.'
      },
      {
        category: 'Defender', catClass: 'cat-defender',
        q: 'Hur bör en alert analyseras?',
        options: [
          'Ignorera den',
          'Analysera kontext, resurs och risk',
          'Stäng allt',
          'Titta på kostnad'
        ],
        answer: 1,
        explanation: 'Alertanalys kräver kontext.'
      }
    ]
  },

  {
    id: 'quiz3',
    title: 'Molnsäkerhet och hybrida miljöer – Del 3: Security Controls & AI Security',
    description: 'Tekniska skydd och AI-säkerhet.',
    tags: ['Security', 'AI', 'Controls'],
    questions: [
      {
        category: 'Security', catClass: 'cat-sec',
        q: 'Vad gör MFA?',
        options: [
          'Ökar CPU',
          'Flera autentiseringsfaktorer',
          'Tar bort lösenord',
          'Blockerar nätverk'
        ],
        answer: 1,
        explanation: 'MFA skyddar konton.'
      },
      {
        category: 'Security', catClass: 'cat-sec',
        q: 'Vad innebär least privilege?',
        options: [
          'Alla admin',
          'Minsta behörighet',
          'Ingen access',
          'Full access'
        ],
        answer: 1,
        explanation: 'Begränsar risk.'
      },
      {
        category: 'Network', catClass: 'cat-sec',
        q: 'Vad gör segmentering?',
        options: [
          'Ökar hastighet',
          'Isolerar system',
          'Tar bort nätverk',
          'Komprimerar data'
        ],
        answer: 1,
        explanation: 'Segmentering begränsar attacker.'
      },
      {
        category: 'Monitoring', catClass: 'cat-sec',
        q: 'Vad används för att upptäcka attacker?',
        options: ['Backup', 'Logging', 'Scaling', 'CDN'],
        answer: 1,
        explanation: 'Loggar används för analys.'
      },

      // NYA FRÅGA 5
      {
        category: 'AI Security', catClass: 'cat-ai',
        q: 'Vad är en risk med AI-agenter med API-access?',
        options: [
          'De blir långsamma',
          'De kan utföra oönskade handlingar',
          'De slutar fungera',
          'De tappar data'
        ],
        answer: 1,
        explanation: 'Felaktig styrning kan ge oönskade actions.'
      },

      {
        category: 'Security', catClass: 'cat-sec',
        q: 'Vad gör encryption?',
        options: [
          'Ökar hastighet',
          'Skyddar data',
          'Raderar data',
          'Analyserar loggar'
        ],
        answer: 1,
        explanation: 'Kryptering skyddar data.'
      },
      {
        category: 'Monitoring', catClass: 'cat-sec',
        q: 'Vad gör Application Insights?',
        options: [
          'Styra nätverk',
          'Samla loggar',
          'Bygga UI',
          'Deploya kod'
        ],
        answer: 1,
        explanation: 'Används för monitoring.'
      },
      {
        category: 'Defense', catClass: 'cat-sec',
        q: 'Vilken kombination ger bäst skydd?',
        options: [
          'Endast MFA',
          'IAM + segmentering + logging',
          'Endast antivirus',
          'Endast backup'
        ],
        answer: 1,
        explanation: 'Defense in depth är bäst.'
      },

      // NY FRÅGA 9
      {
        category: 'AI Security', catClass: 'cat-ai',
        q: 'Hur minskar man risker med AI-agenter?',
        options: [
          'Ge admin-access',
          'Least privilege + logging + kontroll',
          'Ingen loggning',
          'Full frihet'
        ],
        answer: 1,
        explanation: 'AI-system måste styras strikt.'
      },

      {
        category: 'Advanced', catClass: 'cat-adv',
        q: 'Vad minskar lateral movement mest?',
        options: [
          'Snabbare servrar',
          'Zero Trust + segmentering + logging',
          'Fler användare',
          'Snabbare nätverk'
        ],
        answer: 1,
        explanation: 'Kombinerade kontroller stoppar attacker.'
      }
    ]
  }
];