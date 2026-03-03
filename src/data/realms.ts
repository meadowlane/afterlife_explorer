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
    quote: { text: "The roof is shingled with golden shields... The benches are strewn with coats of mail.", source: "Grímnismál (Poetic Edda)" }
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
    quote: { text: "Gardens of perpetual residence; they will enter them with whoever were righteous among their fathers, their spouses and their descendants.", source: "Quran 13:23" }
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
    quote: { text: "He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away.", source: "Revelation 21:4" }
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
    quote: { text: "I have come to you, O my lords... I have brought you truth. I have repelled falsehood for you.", source: "Book of the Dead (Declaration of Innocence)" }
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
    quote: { text: "As a man himself sows, so he himself reaps; no man of an un-awakened mind can escape the result of his own actions.", source: "Mahabharata" }
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
    quote: { text: "There is, monks, an unborn, unoriginated, uncreated, unformed. If there were not... escape from the created, the formed, would not be possible.", source: "Udana 8.3 (Buddhism)" }
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
    quote: { text: "Every trace of attachment to evil must be eliminated, every imperfection of the soul corrected. Purification must be complete.", source: "Pope John Paul II" }
  }
];
