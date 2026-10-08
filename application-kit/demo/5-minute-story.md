# Five-minute story - Dutch

Use this as a rehearsal aid, not a text to memorise. Keep the independent-case disclosure. Spoken pace determines exact duration; practise with a timer and shorten examples rather than claims of uncertainty.

## 0:00-0:30 - Businessprobleem

“Deze case gaat over een fictieve Belgische bouwgroep. Materiaalbeheer zit verspreid over Excel en informele overdrachten. Schadegevallen komen binnen via losse berichten. Daardoor weten mensen niet altijd waar materiaal staat, wie een claim opvolgt of hoe een herstelling aan een factuur gekoppeld is. Ik heb onderzocht hoe je die handoffs expliciet kunt maken. Het is een onafhankelijke portfolio-case, geen uitgevoerd klantproject.”

## 0:30-1:15 - Stakeholders en workshop

“Mijn eerste stap is begrijpen hoe het werk vandaag gebeurt. Ik ontwierp interviews en een workshop met magazijn, werfgebruikers, Operations, Finance en IT. Die hebben andere behoeften: snelheid, duidelijke verantwoordelijkheid, kostencontrole en een onderhoudbare integratie. In de fictieve workshop werk ik één probleem uit met Five Whys: directe transfers worden onvoldoende geregistreerd. Daaruit volgt een requirement voor bevestigde ontvangst. In een echt project zou ik deze oorzaak toetsen met een sample van handoffs. De analyst brengt de afweging samen, terwijl de business owner de beslissing neemt.”

## 1:15-2:00 - AS-IS en TO-BE

“Het nieuwe proces maakt zichtbaar wanneer custody verandert. Bij een transfer blijft de verzender verantwoordelijk tot de bestemming ontvangst bevestigt. Bij een retour inspecteert het magazijn eerst de toestand. Een schone retour wordt beschikbaar. Schade houdt het materiaal buiten circulatie en maakt een gekoppelde Draft claim. De medewerker vult feiten en evidence aan. De laatste gebruiker is daarbij niet automatisch aansprakelijk. Ik modelleer ook wat er gebeurt zonder verbinding of bij twee gelijktijdige checkouts. Die uitzonderingen bepalen mee of het proces betrouwbaar is.”

## 2:00-2:45 - Architecture, API en ERP

“Daarna vertaal ik het proces naar de oplossing met IT. Het doelontwerp sluit aan op een Microsoft-omgeving, maar de technologiekeuze hangt af van licenties, gebruikerservaring en support. De app beheert operationele bewegingen en claims. Het ERP blijft eigenaar van financiële stamdata en facturen. Een goedgekeurde raming creëert een herstelverzoek. Dat is nog geen geboekte werkelijke kost. Een wachtrij met stabiele referentie helpt bij ERP-storingen. Na een onduidelijke timeout controleer je eerst of het verzoek al bestaat. Het prototype simuleert die grenzen.”

## 2:45-3:30 - Power Automate en AI

“Power Automate is in het ontwerp bedoeld voor taakroutering, goedkeuringen en herinneringen. Correcte stocktransacties horen in een transactionele regel, zodat je geen half uitgevoerde retour krijgt. Deze case vraagt boven vijfduizend euro extra Finance-goedkeuring. De delegatieregel moet je bij een echte klant bevestigen. AI is optioneel: het helpt de beschrijving structureren en ontbrekende informatie zien. Een mens controleert het voorstel. Aansprakelijkheid, sancties en financiële boekingen blijven menselijke beslissingen. De openbare assistent gebruikt een mock; tenant-flows en een echte provider zijn niet gedeployd.”

## 3:30-4:15 - UAT, rollout en change

“Voor invoering zou ik één magazijn en twee representatieve werven kiezen. Eerst komen datakwaliteit, rollen en taaktraining. Ik heb vierentwintig UAT-scenario’s voorbereid, inclusief dubbele checkout, ontbrekende informatie en factuurmismatch. Ze zijn nog niet door echte eindgebruikers uitgevoerd. Ook migratie, rollback en hypercare zijn uitgewerkt. Een ervaren magazijnmedewerker die Excel verkiest, betrek ik bij de taakflow. Ik wil zien of het nieuwe proces zijn werk werkelijk helpt. De analyst organiseert evidence; Warehouse, Finance, IT en business hebben eigen acceptatiegates.”

## 4:15-5:00 - Waarde en rolfit

“Tot slot definieer ik wat we meten: locatiebetrouwbaarheid, claimdoorlooptijd en registratie tijdens dezelfde shift. De cijfers hier zijn illustratieve aannames en targets. Een echte baseline komt eerst, en vrijgekomen zoektijd is geen automatische cashbesparing. Ik zou op dertig, zestig en negentig dagen het effect en de oorzaken van afwijkingen bespreken. Wat deze case over mij laat zien, is een aanpak om probleem, stakeholders, proces, technische keuzes en invoering met elkaar te verbinden. Tijdens het gesprek kan ik de afwegingen toelichten en aangeven wat ik nog zou valideren.”

[Eight-slide deck](../exports/interview-deck.pptx) · [Source evidence](../role-requirement-matrix.md).
