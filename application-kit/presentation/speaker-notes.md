# Speaker notes - Dutch interview version

These notes also appear inside the PPTX. Rehearse in your own words. Describe workshops as designed/simulated and target integrations as proposed.

## Slide 1 - The business problem

Ik gebruik een fictieve bouwgroep om een herkenbaar operationeel probleem te onderzoeken. Materiaal wordt uitgeleend en tussen werven verplaatst, terwijl de registratie achterblijft. Schade wordt via losse berichten opgevolgd. Mijn centrale vraag is: welke afspraken en informatie ontbreken om dit betrouwbaar te organiseren? Deze case is onafhankelijk portfolio-werk. De workshops en bedrijfsgegevens zijn gesimuleerd.

## Slide 2 - How I approached it

Ik ontwierp de stakeholderaanpak en een fictieve workshop. De magazijnmedewerker wil weinig extra registratie. Finance wil controle op kosten. IT wil een onderhoudbare oplossing. Met een proceswalkthrough en Five Whys vertaal ik materiaal raakt zoek naar een concrete hypothese: directe transfers missen een bevestigde ontvangst. De traceability matrix koppelt die behoefte vervolgens aan een regel, component, test en KPI. In een echt project zou ik die hypothese eerst met gebruikers en handoff-data toetsen.

## Slide 3 - AS-IS and TO-BE

Bij een beschadigde retour komen beide cases samen. Het magazijn inspecteert het materiaal. Een schone retour maakt het opnieuw beschikbaar. Schade houdt het buiten circulatie en creëert een gekoppelde Draft claim. Ik scheid de waarneming van schade van aansprakelijkheid: de laatste gebruiker is niet automatisch schuldig. Het BPMN-model toont wie handelt, waar een beslissing valt en welke automatisering helpt. De volledige workflow en uitzonderingen blijven in de bronrepository beschikbaar.

## Slide 4 - Solution architecture

Het doelontwerp sluit aan op de Microsoft-omgeving: Power Apps voor gebruikers, Dataverse voor operationele gegevens en Power Automate voor menselijke opvolging. Transactieregels zorgen dat status en historiek samen veranderen. Het ERP blijft eigenaar van financiële stamdata en facturen. Een adapter verwerkt goedgekeurde herstelverzoeken asynchroon. De lokale API en publieke browserdemo maken dit tastbaar. Ze zijn geen gedeployde Power Platform-oplossing of echte ERP-koppeling.

## Slide 5 - Automation and AI

Automatisering helpt bij validatie, taakroutering en herinneringen. Boven vijfduizend euro vraagt deze fictieve delegatieregel een extra Finance-beslissing. De grens zou ik bij een echte klant toetsen. AI mag feiten structureren en ontbrekende informatie aanwijzen. Een mens accepteert of verwerpt het voorstel. AI mag geen aansprakelijkheid bepalen of kosten boeken. De live assistent gebruikt een deterministische simulatie. Een echte provider vraagt eerst privacy-, kwaliteits- en waardevalidatie.

## Slide 6 - From design to production

Ik zou de invoering begrenzen tot één magazijn en twee representatieve werven. Vooraf valideer ik data, rollen, ERP-capaciteit en gebruikstaken. UAT behandelt ook dubbele checkout, ontbrekende evidence en storingen. Er zijn plannen voor migratie, training, rollback en hypercare. Een ervaren operator betrek ik bij het ontwerp en vergelijk taakduur in de pilot. Business, Warehouse, Finance en IT hebben eigen acceptatieverantwoordelijkheden. De portfolio-UAT is voorbereid, niet door echte eindgebruikers uitgevoerd.

## Slide 7 - Business value

Ik meet locatiebetrouwbaarheid, claimdoorlooptijd en registratie tijdens dezelfde shift. De getoonde baselines en targets zijn illustratief. De businesscase houdt vermeden aankopen apart van vrijgekomen zoektijd en administratie. Die tijd is geen automatische cashbesparing. Bij een echt project verzamelt de baseline representatieve samples, en vergelijken we op dertig, zestig en negentig dagen. Projectmix en seizoenen kunnen de vergelijking beïnvloeden. Ik rapporteer onzekerheid en gemiste doelen mee.

## Slide 8 - Why this case matters

Deze case laat zien hoe ik een onduidelijk probleem kan structureren en bespreekbaar maken. Ik verbind stakeholderbehoeften met een proces, technische grenzen, tests en invoeringskeuzes. Wat ik kan tonen is analyse- en ontwerpbewijs plus een getest prototype. Een echte workshop, tenantimplementatie, ERP-sandbox en productie-uitrol zijn nog geen bewezen praktijkervaring. In een gesprek kan ik iedere ontwerpkeuze verdedigen en aangeven welke informatie de beslissing bij een echte klant zou veranderen.
