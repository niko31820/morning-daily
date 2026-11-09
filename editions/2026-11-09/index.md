# Morning routine Tech — Le brief du lundi 9 novembre 2026

lundi 9 novembre 2026

Informations vérifiées à 7 h, heure de Paris. Sélection des 7 et 8 novembre, sans remplissage.

## 1 / 6 — Siri : Apple viserait des tâches suivies dans la durée, pas seulement des commandes isolées

Selon les informations de Mark Gurman, rapportées le 8 novembre par The Verge, Apple veut accélérer la transformation de Siri en véritable agent IA. Une première étape, attendue avec iOS 27.3, lui donnerait un contrôle plus précis des applications Apple : recadrer une photo, la faire pivoter ou organiser des onglets Safari. L’intégration aux applications tierces suivrait plutôt au printemps, avec des usages comme réserver une table ou commander un repas. L’ambition suivante serait de poursuivre un objectif en plusieurs étapes sans demander à l’utilisateur de relancer chaque action : un changement plus profond qu’une simple amélioration des réponses vocales. **Il s’agit toutefois d’une feuille de route rapportée, pas d’un calendrier officiel ni de fonctions déjà disponibles** ; leur arrivée sur tes appareils et leurs conditions d’accès restent donc à confirmer.

Sources : [The Verge](<https://www.theverge.com/ai-artificial-intelligence/1029552/apple-siri-ai-agentic>)

## 2 / 6 — Google Messages teste des conversations épinglées plus visibles et une recherche à portée de pouce

Dans une mise à jour de son article le 7 novembre, 9to5Google documente une nouvelle présentation expérimentale de Google Messages pour Android. Les conversations épinglées prennent la forme de grandes photos de contacts au-dessus de la liste, tandis qu’un bouton de recherche flottant rejoint le bas de l’écran et que Gemini se déplace près du profil. Le bénéfice est très concret sur un grand téléphone : accéder plus facilement à la recherche et distinguer immédiatement ses interlocuteurs favoris. La contrepartie est moins heureuse pour ceux qui consultent les aperçus : ces contacts mis en avant n’affichent plus l’historique ou le dernier message à cet endroit. **Ces changements concernent la bêta et arrivent par morceaux**, y compris chez les testeurs ; ne pas les voir sur ton Pixel 10 Pro Fold ne signifie donc pas qu’un réglage manque.

Sources : [9to5Google](<https://9to5google.com/2026/11/07/google-messages-pinned-chats-redesign/>)

## 3 / 6 — GPU Taskman aide à comprendre ce qui remplit réellement la mémoire graphique

Une prise en main publiée le 8 novembre par Tom’s Hardware met en lumière GPU Taskman, l’outil libre de Scott Hanselman, dont la présentation initiale remonte au 3 novembre. Son intérêt dépasse une jauge de VRAM : il rapproche les processus, l’activité du GPU et les logiciels chargés pour expliquer où part la mémoire. Pour certains modèles IA locaux, il détaille notamment les poids et le cache de contexte, utile pour comprendre pourquoi une session finit par saturer. Le projet prend en charge Windows, Linux et macOS sur Apple Silicon, avec des possibilités variables selon le matériel et le système. **Il reste expérimental** : son dépôt distingue explicitement les compteurs mesurés des identifications et répartitions estimées, et il n’analyse pas les modèles exécutés chez un fournisseur cloud.

Sources : [Tom’s Hardware, via Yahoo Tech](<https://tech.yahoo.com/ar-vr/articles/open-source-gpu-task-manager-134000058.html>) · [Dépôt officiel](<https://github.com/shanselman/gputaskman>)

## 4 / 6 — Nvidia ouvre une enquête indépendante sur un possible ciblage de son dirigeant par un renseignement étranger

Nvidia a annoncé le 8 novembre une enquête indépendante après des révélations de presse selon lesquelles Jensen Huang aurait été ciblé par une opération de renseignement étrangère, rapporte Reuters. L’affaire concerne une relation avec une femme d’affaires chinoise et a également conduit des responsables républicains de la Chambre des représentants à demander des explications au dirigeant. **Le conseil d’administration affirme à ce stade n’avoir aucune raison de croire que des secrets de Nvidia ou la sécurité nationale américaine ont été compromis.** La nouveauté est donc l’ouverture formelle d’une enquête, et non la démonstration d’un vol de technologie. Pour l’industrie des accélérateurs IA, l’enjeu dépasse la vie privée du dirigeant : il touche à la protection des informations stratégiques et à la gouvernance d’un fournisseur central, sans permettre pour l’instant de conclure à un impact sur ses produits.

Sources : [Reuters, via ThePrint](<https://theprint.in/world/nvidia-opens-probe-after-report-that-ceo-huang-was-target-of-foreign-intelligence/3093812/>)

## 5 / 6 — Un modèle IA de 2 800 milliards de paramètres tourne sans GPU… mais à moins d’un token par seconde

Tom’s Hardware rapporte le 8 novembre l’expérience d’un passionné qui fait fonctionner Kimi K3 sur un Xeon à 40 cœurs et de la mémoire persistante Intel Optane de deuxième génération, sans GPU pour l’inférence. Le montage répond d’abord à un problème de capacité : même une version communautaire très comprimée de ce modèle réclame au moins 610 Go de mémoire, selon l’article. Le résultat annoncé par son auteur atteint seulement 0,85 token par seconde en quantification à 1 bit, bien loin d’une conversation fluide. Autre difficulté, les barrettes Optane chauffent fortement sous cette charge et nécessitent un refroidissement actif dirigé, pas simplement une ventilation générale du boîtier. **C’est une démonstration de faisabilité rapportée, pas un benchmark indépendant ni une configuration à reproduire aveuglément** : elle rappelle surtout que loger un modèle en mémoire et le faire fonctionner confortablement sont deux défis différents.

Sources : [Tom’s Hardware](<https://www.tomshardware.com/tech-industry/artificial-intelligence/homelabber-uses-second-gen-optane-memory-sticks-to-run-a-2-8-trillion-parameter-ai-model-on-cpu-alone-warns-that-optanes-extreme-heat-can-burn-out-nearby-memory-dram-used-blower-fans-to-prevent-melting-ram>)

## 6 / 6 — Un récepteur ukrainien de 290 grammes illustre la miniaturisation de la détection antidrones

Un article de Tom’s Hardware du 8 novembre présente le D·Vision SDR de l’entreprise ukrainienne CODE380, un récepteur portable capable d’intercepter certains flux vidéo analogiques de drones. L’appareil pèse 290 grammes et couvre une large plage de fréquences, ce qui permet de concentrer dans un équipement léger des fonctions auparavant associées à des récepteurs plus encombrants. Son intérêt technologique tient à cette radio logicielle : les signaux captés peuvent être convertis en images pour mieux comprendre la menace observée. Les capacités annoncées ne constituent toutefois pas une protection universelle : l’interception analogique ne s’applique pas automatiquement aux transmissions numériques et ne résout pas le cas des drones reliés par fibre optique. **L’article souligne ainsi la nécessité de combiner plusieurs capteurs**, plutôt que de confondre un détecteur compact avec un système complet de défense.

Sources : [Tom’s Hardware](<https://www.tomshardware.com/tech-industry/drones/pocket-sized-ukrainian-receiver-intercepts-russian-strike-drone-video-feeds-up-to-six-miles-away-device-only-slightly-heavier-than-a-smartphone-intercepts-analog-video-signals-sent-to-russian-operators>)

ceci a été le brief de lundi
