export interface DetailedRealm {
    id: string;
    name: string;
    religion: string;
    type: 'paradise' | 'purgatory' | 'punishment' | 'neutral' | 'state-of-being';
    shortDescription: string;
    vividDescription: string;
    experience: string;
    entryCriteria: string[];
    quote?: { text: string; source: string };
    imageUrl: string;
}

export const detailedRealms: DetailedRealm[] = [
    {
        id: 'valhalla',
        name: 'Valhalla',
        religion: 'Norse Mythology',
        type: 'paradise',
        shortDescription: 'The majestic Hall of the Slain, roofed with golden shields.',
        vividDescription: 'A colossal, roaring mead-hall situated in Asgard, ruled by Odin. The architecture itself is forged of war: the rafters are massive, gleaming spears, the roof is thatched with overlapping golden shields, and the benches are strewn with chainmail. The hall has 540 immense doors, each wide enough for 800 warriors to march through shoulder-to-shoulder.',
        experience: 'An eternity of glorious, violent camaraderie. Every morning, the Einherjar (the chosen dead) march into the courtyard to fight, maim, and kill each other in joyous battle. At dusk, all wounds miraculously heal, the dead rise, and they return to the hall to feast on the meat of the immortal boar Sæhrímnir and drink endless mead flowing from the udders of the goat Heiðrún.',
        entryCriteria: [
            'Dying a courageous death in battle.',
            'Being chosen by the Valkyries from the slain.',
            'Living a life of martial valor and honor.'
        ],
        quote: { text: "The roof is shingled with golden shields... The benches are strewn with coats of mail.", source: "Grímnismál (Poetic Edda)" },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Peter_Nicolai_Arbo_-_Valkyrjen_-_Nasjonalmuseet_-_NG.M.00259.jpg'
    },
    {
        id: 'jannah',
        name: 'Jannah (Paradise)',
        religion: 'Islam',
        type: 'paradise',
        shortDescription: 'Lush, eternal gardens of peace flowing with rivers of milk and honey.',
        vividDescription: 'A realm of unimaginable sensory and spiritual delight, structured in multiple ascending levels (the highest being Jannat al-Firdaws). It is a place of perpetual spring, shaded by the massive Tuba tree. The ground is made of musk and saffron, and the bricks of its palaces are gold and silver. Four rivers flow through it: one of incorruptible water, one of milk that never sours, one of sweet honey, and one of wine that brings joy but no intoxication or hangover.',
        experience: 'Total absence of negative emotion—no sorrow, anger, jealousy, or fatigue. Inhabitants wear garments of fine green silk and gold embroidery, reclining on raised thrones. They are reunited with righteous family members and converse in perfect peace. The ultimate, crowning joy is the lifting of the veil to gaze upon the "Face of Allah," a spiritual ecstasy that surpasses all physical pleasures of the gardens.',
        entryCriteria: [
            'Belief in the Oneness of God (Tawhid) and His messengers.',
            'A balance of good deeds outweighing the bad on the Day of Judgment.',
            'Ultimately, entry is granted through the Mercy (Rahma) of Allah.'
        ],
        quote: { text: "Gardens of perpetual residence; they will enter them with whoever were righteous among their fathers, their spouses and their descendants.", source: "Quran 13:23" },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Khalili_Collection_Islamic_Art_mss_0979_fol_30b.jpg'
    },
    {
        id: 'christian-heaven',
        name: 'The New Jerusalem (Heaven)',
        religion: 'Christianity',
        type: 'paradise',
        shortDescription: 'A state of supreme happiness and perfect communion with the Divine.',
        vividDescription: 'Described in Revelation as a radiant city descending from God, glowing with the glory of precious stones, clear as crystal. The city has twelve gates of solid pearl and streets of pure, transparent gold. There is no sun or moon, for the glory of God illuminates it entirely. The River of the Water of Life flows down the middle of its great street, flanked by the Tree of Life bearing twelve kinds of fruit.',
        experience: 'The "Beatific Vision"—the direct, unmediated perception of God. It is a state of profound, dynamic peace and joy. All earthly suffering, tears, death, and mourning are permanently eradicated. The soul is entirely fulfilled, experiencing perfect love, perfect knowledge, and unbroken fellowship with God, the angels, and all the saints.',
        entryCriteria: [
            'Acceptance of Jesus Christ as Lord and Savior.',
            'Having one\'s name written in the "Book of Life".',
            'Dying in a state of grace (in Catholic theology).'
        ],
        quote: { text: "He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away.", source: "Revelation 21:4" },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Diego_Vel%C3%A1zquez_-_Coronation_of_the_Virgin_-_Prado.jpg'
    },
    {
        id: 'christian-hell',
        name: 'Hell (Inferno)',
        religion: 'Christianity',
        type: 'punishment',
        shortDescription: 'A realm of eternal conscious torment and absolute separation from God.',
        vividDescription: 'Often depicted as a lake of unquenchable fire and brimstone, or as Dante envisioned it: nine descending circles of increasingly horrific, ironic punishments tailored to specific sins, culminating in a frozen lake where Satan himself is trapped. It is a place of absolute darkness, despite the flames, and is entirely devoid of hope, love, or divine presence.',
        experience: 'Eternal, agonizing physical and spiritual suffering. The damned experience the "pain of loss" (the agonizing awareness of having permanently lost God and Heaven) and the "pain of sense" (the physical torments of fire). There is constant weeping, wailing, and gnashing of teeth, surrounded by demons and other damned souls in a state of perpetual hatred and despair.',
        entryCriteria: [
            'Dying in a state of mortal sin without repentance.',
            'Willful and final rejection of God\'s grace and love.',
            'Choosing self over God to the very end.'
        ],
        quote: { text: "Abandon all hope, ye who enter here.", source: "Dante Alighieri, Inferno" },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Gustave_Dor%C3%A9_-_Dante_Alighieri_-_Inferno_-_Plate_9_%28Canto_III_-_Charon%29.jpg'
    },
    {
        id: 'aaru',
        name: 'Aaru (Field of Reeds)',
        religion: 'Ancient Egyptian',
        type: 'paradise',
        shortDescription: 'An idealized, eternal mirror of the fertile Nile valley.',
        vividDescription: 'A boundless, sun-drenched landscape that perfectly mirrors the geography of the Egyptian delta, but without any of its earthly flaws. The skies are a brilliant, unbroken blue. The Nile flows gently, never flooding too high or running too low. The fields are lush and green, and the wheat grows extraordinarily tall—sometimes described as being nine cubits (over 13 feet) high.',
        experience: 'A continuation of the best parts of earthly life, stripped of disease, famine, and death. Souls live in comfortable estates, reunited with their spouses, parents, and beloved pets. While agricultural work is required to maintain the realm, those who were buried with "Shabti" dolls can have these magical figurines do the manual labor for them, leaving the soul to enjoy eternal leisure, feasting, and sailing on the celestial river.',
        entryCriteria: [
            'Successful preservation of the physical body (mummification).',
            'Navigating the dangerous Duat using the Book of the Dead.',
            'Passing the Weighing of the Heart ceremony against the feather of Ma\'at (Truth).'
        ],
        quote: { text: "I have come to you, O my lords... I have brought you truth. I have repelled falsehood for you.", source: "Book of the Dead (Declaration of Innocence)" },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Bookofthedead-fieldofreeds.jpg'
    },
    {
        id: 'naraka',
        name: 'Naraka',
        religion: 'Hinduism / Buddhism',
        type: 'punishment',
        shortDescription: 'A temporary, agonizing purgatory for the expiation of bad karma.',
        vividDescription: 'Not a single place, but a vast, terrifying complex of subterranean hell-realms, each tailored to punish specific earthly transgressions. Some realms are characterized by suffocating, crushing darkness and freezing cold, while others are oceans of boiling oil, forests with leaves sharp as swords (Asipatra), or plains of burning copper.',
        experience: 'Intense, visceral suffering designed to burn away the negative karmic residue of the soul. The experience is horrific but, crucially, it is not eternal. The soul experiences the exact measure of pain required to balance their cosmic ledger. Once the bad karma is exhausted, the soul is released, floating back up into the cycle of Samsara to be reborn on earth, often starting as a lower lifeform and working their way back up.',
        entryCriteria: [
            'Accumulation of severe negative karma (Papa).',
            'Violating cosmic law (Dharma) through violence, deceit, or extreme greed.',
            'Failing to perform necessary expiatory rituals during life.'
        ],
        quote: { text: "As a man himself sows, so he himself reaps; no man of an un-awakened mind can escape the result of his own actions.", source: "Mahabharata" },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Shamon_jigoku_z%C3%B4shi.jpg'
    },
    {
        id: 'moksha',
        name: 'Moksha / Nirvana',
        religion: 'Hinduism / Buddhism',
        type: 'state-of-being',
        shortDescription: 'The ultimate liberation from the cycle of birth, death, and rebirth.',
        vividDescription: 'It is not a physical location with geography, architecture, or landscapes. It is the "blowing out" (Nirvana) of the fires of greed, hatred, and delusion. In Hindu Vedanta, it is the profound realization that the individual soul (Atman) and the universal reality (Brahman) are one and the same—like a drop of water finally falling back into the infinite ocean.',
        experience: 'The complete and permanent cessation of Dukkha (suffering/dissatisfaction). It is an experience of unconditioned, boundless peace, ultimate freedom, and pure awareness. The illusion of a separate, isolated "self" dissolves entirely. There is no more anxiety, no more striving, and no more being pulled back into the exhausting wheel of reincarnation.',
        entryCriteria: [
            'Complete eradication of ignorance (Avidya) and earthly attachments.',
            'Perfect realization of the true nature of reality.',
            'Exhaustion of all karmic debts and generation of no new karma.'
        ],
        quote: { text: "There is, monks, an unborn, unoriginated, uncreated, unformed. If there were not... escape from the created, the formed, would not be possible.", source: "Udana 8.3 (Buddhism)" },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Mandala1_detail.jpg'
    },
    {
        id: 'purgatory',
        name: 'Purgatory',
        religion: 'Catholic Christianity',
        type: 'purgatory',
        shortDescription: 'A temporary state of painful but hopeful purification before entering Heaven.',
        vividDescription: 'Often envisioned (most famously by Dante) as a towering mountain or a realm of cleansing fire. Unlike Hell, the atmosphere here is not one of despair, but of profound, melancholic hope. The fires of Purgatory are said to be the burning love of God, which painfully sears away the remaining attachments to sin that the soul clung to in life.',
        experience: 'A paradoxical mix of intense suffering and immense joy. The soul suffers because it is acutely aware of its imperfections and its distance from God, experiencing a burning delay. Yet, the soul is joyful because its ultimate salvation is absolutely guaranteed; no one in Purgatory goes to Hell. The suffering is willingly embraced as a necessary bath to make oneself clean enough to enter the divine presence.',
        entryCriteria: [
            'Dying in a state of grace (destined for Heaven).',
            'Still bearing the "temporal punishment" or attachment to venial (minor) sins.',
            'Not having achieved perfect holiness during earthly life.'
        ],
        quote: { text: "Every trace of attachment to evil must be eliminated, every imperfection of the soul corrected. Purification must be complete.", source: "Pope John Paul II" },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Dor%C3%A9_Dante_Fegefeuer.jpg'
    },
    {
        id: 'tartarus',
        name: 'Tartarus',
        religion: 'Greek Mythology',
        type: 'punishment',
        shortDescription: 'A deep, gloomy abyss used as a dungeon of torment and suffering.',
        vividDescription: 'A primordial abyss located as far beneath Hades as the earth is beneath the heavens. It is a dark, sunless pit surrounded by a wall of bronze and a river of fire (Phlegethon). It serves as the cosmic prison for the Titans and the most wicked of mortals who committed direct offenses against the gods.',
        experience: 'Eternal, ironic punishments tailored to the specific hubris of the damned. Tantalus stands in a pool of water beneath a fruit tree, but the water recedes when he tries to drink, and the branches pull away when he reaches for food. Sisyphus is forced to roll a massive boulder up a hill, only for it to roll back down every time he nears the top. Ixion is bound to a spinning wheel of fire.',
        entryCriteria: [
            'Committing extreme hubris or direct offenses against the Olympian gods.',
            'Being a Titan defeated in the Titanomachy.',
            'Unspeakable crimes like kin-slaying or violating the laws of hospitality (Xenia).'
        ],
        quote: { text: "As far beneath Hades as heaven is above earth.", source: "Homer, The Iliad" },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Punishment_sisyph.jpg'
    },
    {
        id: 'elysium',
        name: 'Elysium (Elysian Fields)',
        religion: 'Greek Mythology',
        type: 'paradise',
        shortDescription: 'A paradisiacal realm reserved for heroes and those chosen by the gods.',
        vividDescription: 'A beautiful, sunlit meadow located at the western edges of the earth, near the stream of Okeanos. It is untouched by snow, heavy rain, or harsh winter winds. Instead, the gentle, cooling breeze of Zephyrus blows constantly. The fields are covered in blooming asphodel and other beautiful flowers.',
        experience: 'An eternity of blissful leisure and athletic pursuits. The heroic dead retain their faculties and enjoy a life free from toil and sorrow. They spend their time feasting, playing music, engaging in friendly athletic competitions, and conversing with other great heroes of myth.',
        entryCriteria: [
            'Being a demigod or a hero of great renown.',
            'Being personally chosen by the gods for immortality.',
            'Later traditions included those who lived exceptionally righteous or philosophical lives.'
        ],
        quote: { text: "No snow is there, nor heavy storm, nor ever rain, but ever does Ocean send up blasts of the shrill-blowing West Wind.", source: "Homer, The Odyssey" },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Arnold_B%C3%B6cklin_-_Die_Gefilde_der_Seligen.jpg'
    },
    {
        id: 'asphodel',
        name: 'Asphodel Meadows',
        religion: 'Greek Mythology',
        type: 'neutral',
        shortDescription: 'The gray, featureless destination of ordinary souls.',
        vividDescription: 'A vast, shadowy, and monotonous plain covered in pale, ghostly asphodel flowers. It is neither a place of torment nor a place of joy. The landscape is dim, lit only by the twilight of the Underworld, lacking the vibrant colors of the living world or Elysium.',
        experience: 'A dull, forgetful existence. The souls here are mere "shades" (eidola) of their former selves—drifting, mindless phantoms who have drunk from the River Lethe and forgotten their past lives. They wander aimlessly, experiencing neither pain nor pleasure, simply existing in a state of eternal, melancholic neutrality. They only regain temporary consciousness if they drink the blood of a sacrificed animal.',
        entryCriteria: [
            'Living an ordinary life, neither exceptionally good nor exceptionally evil.',
            'The default destination for the vast majority of humanity.'
        ],
        quote: { text: "The ghosts of the dead, the phantoms of men outworn.", source: "Homer, The Odyssey" },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/The-waters-of-lethe-by-the-plains-of-elysium-1880.jpg'
    },
    {
        id: 'mictlan',
        name: 'Mictlan',
        religion: 'Aztec Mythology',
        type: 'neutral',
        shortDescription: 'The perilous, nine-leveled underworld of the dead.',
        vividDescription: 'A dark, treacherous realm ruled by the skeletal god Mictlantecuhtli and his consort Mictecacihuatl. It is not a place of punishment, but a difficult journey. The landscape is filled with terrifying obstacles: a river that can only be crossed with the help of a Xoloitzcuintli dog, mountains that crash together, fields of obsidian wind that tear at the flesh, and areas where arrows fly endlessly.',
        experience: 'The soul must undertake a grueling, four-year journey through the nine levels of Mictlan. It is a test of endurance. The dead must navigate the hazards, slowly shedding their earthly attachments and even their physical form. Upon reaching the ninth and final level, the soul finds ultimate rest and completely disappears, assimilating into the universe.',
        entryCriteria: [
            'Dying a natural death or from diseases not associated with specific gods.',
            'Not dying in battle, childbirth, or by water (which lead to other specific realms).'
        ],
        quote: { text: "We only came to sleep, we only came to dream. It is not true, it is not true that we came to live on the earth.", source: "Aztec Poem" },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Mictlantecuhtli_Codex_Borgia_page_18.jpg'
    },
    {
        id: 'xibalba',
        name: 'Xibalba',
        religion: 'Mayan Mythology',
        type: 'punishment',
        shortDescription: 'The "Place of Fright," a subterranean court of death gods.',
        vividDescription: 'A sprawling, subterranean city ruled by the Lords of Xibalba, who represent various forms of death, disease, and misfortune. The entrance is a steep, treacherous descent involving crossing rivers of blood and scorpions. The city contains the "Houses of Trials"—dark, freezing, or filled with jaguars, bats, or razor-sharp blades.',
        experience: 'A terrifying ordeal where souls are subjected to the cruel games and tests of the Lords of Xibalba. The Lords delight in tricking and humiliating the dead. The ultimate test is often a high-stakes game of the Mesoamerican ballgame. It is a place of suffering, fear, and darkness, though heroic figures (like the Hero Twins) could outwit the Lords.',
        entryCriteria: [
            'The destination for almost everyone who dies, regardless of their moral standing in life.',
            'A place to be feared and navigated, rather than a punishment for specific sins.'
        ],
        quote: { text: "They went down to Xibalba... down the steep stairs, down to the House of Gloom.", source: "Popol Vuh" },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Ik_Kil_Cenote_Yucatan_sink_hole_01.jpg'
    },
    {
        id: 'yomi',
        name: 'Yomi',
        religion: 'Shinto',
        type: 'neutral',
        shortDescription: 'The shadowy, polluted land of the dead.',
        vividDescription: 'A gloomy, subterranean realm separated from the world of the living by a boulder. It is a place of decay, darkness, and "kegare" (spiritual pollution). It is not a hell of fiery torment, but a dismal, rotting continuation of existence. The goddess Izanami became trapped here and transformed into a rotting, maggot-ridden corpse.',
        experience: 'A bleak, shadowy existence. Souls in Yomi are not judged or punished for their earthly deeds; they simply exist in a state of impurity and decay. The food of Yomi traps anyone who eats it, preventing them from ever returning to the land of the living. It is a realm characterized by the horror of physical corruption rather than moral retribution.',
        entryCriteria: [
            'Death itself. It is the destination for all the dead, regardless of their actions in life.',
            'Eating the food of the underworld seals one\'s fate there.'
        ],
        quote: { text: "I have eaten of the hearth of Yomi.", source: "Kojiki (Record of Ancient Matters)" },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Kobayashi_Izanami_and_Izanagi.jpg'
    },
    {
        id: 'diyu',
        name: 'Diyu',
        religion: 'Chinese Mythology',
        type: 'punishment',
        shortDescription: 'A massive, bureaucratic labyrinth of courts and hells for purification.',
        vividDescription: 'An incredibly complex subterranean bureaucracy, often depicted with ten courts, each ruled by a Yama King, and containing up to 18 levels of hell. The punishments are gruesome and highly specific to the sin: the Mountain of Knives, the Forest of Copper Pillars, the Cauldron of Boiling Oil, and the Chamber of Dismemberment.',
        experience: 'Souls are brought before the Yama Kings, judged based on their karmic record, and sentenced to specific hells for a set duration. The punishments are horrific but serve a purifying purpose. Once the sentence is served, the soul is given the Elixir of Forgetfulness by Meng Po and sent back into the cycle of reincarnation. It is a strict, terrifying, but ultimately temporary penal system.',
        entryCriteria: [
            'Accumulation of bad karma and sinful deeds.',
            'Every soul passes through Diyu for judgment, but only the wicked are detained for punishment.'
        ],
        quote: { text: "Good has its reward and evil has its recompense; it is not that there is no recompense, but the time has not yet arrived.", source: "Chinese Proverb" },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Hell_Scroll_-_Google_Art_Project.jpg'
    },
    {
        id: 'gehenna',
        name: 'Gehenna',
        religion: 'Judaism',
        type: 'purgatory',
        shortDescription: 'A temporary place of spiritual purification and reckoning.',
        vividDescription: 'Historically derived from the Valley of Hinnom outside Jerusalem (a place of ancient child sacrifice and later a burning garbage dump). In rabbinic literature, it is a realm of spiritual fire and intense self-reflection. It is not the eternal, demonic torture chamber of Christian Hell, but a cosmic "washing machine" for the soul.',
        experience: 'The soul experiences the painful, burning shame of reviewing its own earthly misdeeds in the presence of divine truth. The "fire" is often interpreted as the intense regret and realization of one\'s own shortcomings. For the vast majority, this purification process lasts no longer than 12 months, after which the cleansed soul ascends to Gan Eden (the Garden of Eden/Heaven).',
        entryCriteria: [
            'Souls requiring purification before entering the World to Come (Olam Ha-Ba).',
            'The exceptionally wicked may be annihilated entirely or remain longer, but for most, it is temporary.'
        ],
        quote: { text: "The judgment of the wicked in Gehenna is twelve months.", source: "Mishnah Eduyot 2:10" },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Valley_of_Hinnom_%289088059492%29.jpg'
    },
    {
        id: 'tir-na-nog',
        name: 'Tír na nÓg',
        religion: 'Celtic Mythology',
        type: 'paradise',
        shortDescription: 'The Land of Youth, an otherworldly island of eternal beauty.',
        vividDescription: 'A supernatural realm often located on an island far to the west, or sometimes beneath the sea or within fairy mounds (sídhe). It is a place of staggering natural beauty, where the trees are always in blossom, the weather is always perfect, and the landscape is vibrant and magical.',
        experience: 'An existence of eternal youth, health, and joy. There is no sickness, aging, or death. The inhabitants (the Tuatha Dé Danann or fairies) spend their time feasting, playing enchanting music, and engaging in romance. Time flows differently here; a few days in Tír na nÓg might equal hundreds of years in the mortal world.',
        entryCriteria: [
            'It is primarily the home of the gods/fairies, not a general afterlife for humans.',
            'Mortals can only enter if they are specifically invited or guided by an inhabitant, often through a magical mist or across the sea.'
        ],
        quote: { text: "A land of youth, a land of rest, a land from sorrow free; it lies far off in the golden west, on the verge of the azure sea.", source: "T.W. Rolleston" },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/John_Duncan_%281911%29_Riders_of_the_Sidhe.jpg'
    },
    {
        id: 'helheim',
        name: 'Helheim',
        religion: 'Norse Mythology',
        type: 'neutral',
        shortDescription: 'The cold, dreary realm of the dead ruled by the goddess Hel.',
        vividDescription: 'Located in Niflheim, the lowest level of the Norse cosmos. It is a freezing, misty, and dark place. The entrance is guarded by the hound Garmr, and one must cross the river Gjöll over a bridge thatched with gleaming gold. The goddess Hel, who is half-living flesh and half-blue corpse, rules from her hall, Éljúðnir.',
        experience: 'A dull, lethargic continuation of life. It is not a place of fiery torture, but rather a cold, joyless existence. The dead here are not tortured, but they do not experience the glory of Valhalla either. They simply exist in the gloom, waiting until Ragnarok, when they will sail on the ship Naglfar to battle the gods.',
        entryCriteria: [
            'Dying of old age, sickness, or any cause other than battle.',
            'The default destination for the vast majority of people in the Norse world.'
        ],
        quote: { text: "Downwards and northwards lies the road to Hel.", source: "Prose Edda" },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Hel-Johannes_Gehrts.jpg'
    },
    {
        id: 'pure-land',
        name: 'Sukhavati (Pure Land)',
        religion: 'Mahayana Buddhism',
        type: 'paradise',
        shortDescription: 'A perfect, enlightened realm created by Amitabha Buddha.',
        vividDescription: 'A realm of infinite light and boundless life, located far to the west. The ground is made of lapis lazuli and gold, and the trees are adorned with seven kinds of precious jewels. Heavenly music plays constantly, and lotus flowers bloom everywhere, radiating brilliant light.',
        experience: 'It is not the final destination (Nirvana), but an ideal "training ground" for enlightenment. Being reborn here means you are guaranteed to achieve Buddhahood. There is no suffering, no negative karma, and no distractions. The inhabitants receive direct teachings from Amitabha Buddha and his bodhisattvas, making the path to ultimate liberation effortless and joyous.',
        entryCriteria: [
            'Sincere faith and devotion to Amitabha Buddha.',
            'Chanting his name (the Nembutsu) with a pure heart, especially at the moment of death.'
        ],
        quote: { text: "In that Buddha-land, there is no suffering... therefore it is called 'Utmost Joy'.", source: "Amitabha Sutra" },
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Japanese_-_The_Buddha_Amida%27s_Descent_-_Walters_3568.jpg'
    }
];
