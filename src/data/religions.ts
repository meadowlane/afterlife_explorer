export interface Rule {
  id: string;
  description: string;
  type: 'requirement' | 'prohibition' | 'ritual' | 'belief';
}

export interface Realm {
  name: string;
  description: string;
  type: 'paradise' | 'purgatory' | 'punishment' | 'neutral' | 'state-of-being';
}

export interface Quote {
  text: string;
  source: string;
}

export interface Denomination {
  name: string;
  description: string;
  afterlifeRealms: Realm[];
  entryRules: Rule[];
  notes?: string;
  origins?: string;
  quotes?: Quote[];
}

export interface Religion {
  id: string;
  name: string;
  description: string;
  denominations: Denomination[];
  generalBeliefs?: string;
}

export const religions: Religion[] = [
  {
    id: 'christianity',
    name: 'Christianity',
    description: 'Monotheistic religion based on the life and teachings of Jesus of Nazareth.',
    denominations: [
      {
        name: 'Catholicism',
        description: 'The largest Christian church, led by the Pope.',
        origins: 'Traces its history to Jesus and the Apostles, specifically Peter as the first Pope. The theology of Purgatory and the Sacraments evolved over centuries, solidified at the Council of Trent (1545-1563) in response to the Reformation.',
        quotes: [
          { text: "And I tell you, you are Peter, and on this rock I will build my church, and the gates of hell shall not prevail against it.", source: "Matthew 16:18" },
          { text: "If you forgive the sins of any, they are forgiven them; if you withhold forgiveness from any, it is withheld.", source: "John 20:23" }
        ],
        afterlifeRealms: [
          { name: 'Heaven', description: 'Eternal union with God.', type: 'paradise' },
          { name: 'Purgatory', description: 'A state of final purification after death and before entrance into heaven.', type: 'purgatory' },
          { name: 'Hell', description: 'Eternal separation from God.', type: 'punishment' }
        ],
        entryRules: [
          { id: 'c1', description: 'Baptism (removes original sin).', type: 'ritual' },
          { id: 'c2', description: 'State of Grace (no unconfessed mortal sins) at death.', type: 'requirement' },
          { id: 'c3', description: 'Faith in Jesus Christ and his teachings.', type: 'belief' },
          { id: 'c4', description: 'Participation in Sacraments (Eucharist, Confession).', type: 'ritual' }
        ]
      },
      {
        name: 'Presbyterianism (Reformed)',
        description: 'Protestant tradition following Calvinist theology.',
        origins: 'Originated in the 16th-century Reformation with John Calvin. Emphasizes the sovereignty of God and the authority of Scripture over church tradition. Diverged from Catholicism by rejecting Purgatory and the necessity of works for salvation.',
        quotes: [
          { text: "For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.", source: "Ephesians 2:8-9" },
          { text: "For those whom he foreknew he also predestined to be conformed to the image of his Son.", source: "Romans 8:29" }
        ],
        afterlifeRealms: [
          { name: 'Heaven', description: 'Eternal presence of God.', type: 'paradise' },
          { name: 'Hell', description: 'Eternal separation from God.', type: 'punishment' }
        ],
        entryRules: [
          { id: 'p1', description: 'Predestination: You must be one of the "Elect" chosen by God before time.', type: 'belief' },
          { id: 'p2', description: 'Faith alone (Sola Fide) is the evidence of election, not the cause.', type: 'belief' },
          { id: 'p3', description: 'Good works are a fruit of salvation, not a requirement for it.', type: 'belief' }
        ]
      },
      {
        name: 'Baptist',
        description: 'Protestant group emphasizing believer\'s baptism.',
        origins: 'Emerged in the early 17th century among English Separatists. Distinct for rejecting infant baptism, insisting that baptism is an ordinance for believers only. Heavily influenced by Anabaptist theology regarding the separation of church and state.',
        quotes: [
          { text: "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.", source: "John 3:16" },
          { text: "If you confess with your mouth that Jesus is Lord and believe in your heart that God raised him from the dead, you will be saved.", source: "Romans 10:9" }
        ],
        afterlifeRealms: [
          { name: 'Heaven', description: 'Eternal life with God.', type: 'paradise' },
          { name: 'Hell', description: 'Eternal separation/punishment.', type: 'punishment' }
        ],
        entryRules: [
          { id: 'b1', description: 'Personal profession of faith in Jesus Christ (Born Again).', type: 'requirement' },
          { id: 'b2', description: 'Believer\'s Baptism (symbolic obedience, usually not strictly saving but highly emphasized).', type: 'ritual' },
          { id: 'b3', description: 'Once Saved Always Saved (Eternal Security) - common in many Baptist traditions.', type: 'belief' }
        ]
      }
    ]
  },
  {
    id: 'islam',
    name: 'Islam',
    description: 'Monotheistic faith revealed through Muhammad as the Prophet of Allah.',
    denominations: [
      {
        name: 'Sunni',
        description: 'The largest branch of Islam.',
        origins: 'Formed after the death of Prophet Muhammad (632 CE) over the question of succession. Sunnis believed the leader (Caliph) should be elected by the community (starting with Abu Bakr). They follow the Sunnah (tradition) of the Prophet as recorded in Hadith.',
        quotes: [
          { text: "And hasten to forgiveness from your Lord and a garden as wide as the heavens and earth, prepared for the righteous.", source: "Quran 3:133" },
          { text: "None of you will enter Paradise by his deeds alone... not even me, unless Allah wraps me in His Grace and Mercy.", source: "Hadith (Sahih al-Bukhari)" }
        ],
        afterlifeRealms: [
          { name: 'Jannah (Paradise)', description: 'Gardens of pleasure and proximity to Allah.', type: 'paradise' },
          { name: 'Jahannam (Hell)', description: 'Place of punishment and spiritual suffering.', type: 'punishment' }
        ],
        entryRules: [
          { id: 's1', description: 'Shahada: Declaration of faith in One God and Muhammad as his messenger.', type: 'requirement' },
          { id: 's2', description: 'Adherence to the Five Pillars (Prayer, Alms, Fasting, Pilgrimage).', type: 'ritual' },
          { id: 's3', description: 'Weight of good deeds (Hasanat) outbalancing bad deeds on Judgment Day.', type: 'requirement' },
          { id: 's4', description: 'God\'s Mercy (Rahma) is ultimately required for entry.', type: 'belief' }
        ]
      },
      {
        name: 'Shia',
        description: 'Branch believing in the succession of Ali and the Imams.',
        origins: 'Split from the main body of Muslims believing that leadership belonged to the Prophet\'s family (Ahl al-Bayt), specifically his cousin and son-in-law Ali. They emphasize the spiritual authority of the Imams.',
        quotes: [
          { text: "Of whomsoever I am Master (Mawla), Ali is his Master.", source: "Hadith of Ghadir Khumm" },
          { text: "Allah intends only to remove from you the impurity [of sin], O people of the [Prophet's] household, and to purify you with [extensive] purification.", source: "Quran 33:33" }
        ],
        afterlifeRealms: [
          { name: 'Jannah', description: 'Paradise.', type: 'paradise' },
          { name: 'Jahannam', description: 'Hell.', type: 'punishment' }
        ],
        entryRules: [
          { id: 'sh1', description: 'All Sunni requirements (5 Pillars, Faith).', type: 'requirement' },
          { id: 'sh2', description: 'Walayah: Love and allegiance to the Ahl al-Bayt (Household of the Prophet).', type: 'belief' },
          { id: 'sh3', description: 'Intercession (Shafa\'ah) of the Imams can aid entry.', type: 'belief' }
        ]
      }
    ]
  },
  {
    id: 'hinduism',
    name: 'Hinduism',
    description: 'Diverse system of thought with roots in the Vedas.',
    denominations: [
      {
        name: 'General / Vedanta',
        description: 'Core philosophical traditions.',
        origins: 'Based on the Vedas (c. 1500 BCE) and later Upanishads. Vedanta ("End of the Vedas") focuses on the relationship between the individual soul (Atman) and the Ultimate Reality (Brahman).',
        quotes: [
          { text: "As a person puts on new garments, giving up old ones, the soul similarly accepts new material bodies, giving up the old and useless ones.", source: "Bhagavad Gita 2:22" },
          { text: "Tat Tvam Asi (Thou Art That).", source: "Chandogya Upanishad" }
        ],
        afterlifeRealms: [
          { name: 'Moksha', description: 'Liberation from the cycle of rebirth; union with Brahman.', type: 'state-of-being' },
          { name: 'Svarga (Heaven)', description: 'Temporary paradise for good karma before rebirth.', type: 'paradise' },
          { name: 'Naraka (Hell)', description: 'Temporary purgatory for expiating bad karma.', type: 'punishment' }
        ],
        entryRules: [
          { id: 'h1', description: 'Accumulation of good Karma (actions).', type: 'requirement' },
          { id: 'h2', description: 'Following Dharma (cosmic law/duty).', type: 'requirement' },
          { id: 'h3', description: 'Realization of the Self (Atman) as one with the Ultimate (Brahman) for Moksha.', type: 'belief' },
          { id: 'h4', description: 'Bhakti (devotion) to a deity can grant liberation.', type: 'ritual' }
        ]
      }
    ]
  },
  {
    id: 'buddhism',
    name: 'Buddhism',
    description: 'Path of spiritual development leading to Insight of the true nature of reality.',
    denominations: [
      {
        name: 'Theravada',
        description: 'The "School of the Elders".',
        origins: 'The oldest surviving branch, adhering closely to the Pali Canon. Emphasizes individual effort to attain Nirvana through meditation and monastic life.',
        quotes: [
          { text: "You yourselves must strive; the Buddhas only point the way.", source: "Dhammapada 276" },
          { text: "All conditioned things are impermanent—when one sees this with wisdom, one turns away from suffering.", source: "Dhammapada 277" }
        ],
        afterlifeRealms: [
          { name: 'Nirvana', description: 'The cessation of suffering and rebirth. Not a place, but a state.', type: 'state-of-being' },
          { name: 'Samsara Realms', description: '31 planes of existence including hells, hungry ghosts, animals, humans, and heavens.', type: 'neutral' }
        ],
        entryRules: [
          { id: 't1', description: 'Elimination of the Ten Fetters (greed, hatred, delusion).', type: 'requirement' },
          { id: 't2', description: 'Following the Noble Eightfold Path.', type: 'ritual' },
          { id: 't3', description: 'Accumulation of Merit (Punya) for better rebirth.', type: 'requirement' }
        ]
      },
      {
        name: 'Pure Land (Mahayana)',
        description: 'Focuses on Amitabha Buddha.',
        origins: 'Arose in India and flourished in East Asia. Based on the belief that the world is in a degenerate age (Mappo) where self-power is insufficient, thus relying on the "Other Power" of Amitabha Buddha.',
        quotes: [
          { text: "If, when I attain Buddhahood, sentient beings in the lands of the ten directions who sincerely and joyfully entrust themselves to me... should not be born there, may I not attain perfect Enlightenment.", source: "Larger Sutra of Immeasurable Life (18th Vow)" }
        ],
        afterlifeRealms: [
          { name: 'Sukhavati (Pure Land)', description: 'A buddha-field where enlightenment is easier to attain.', type: 'paradise' }
        ],
        entryRules: [
          { id: 'pl1', description: 'Recitation of Amitabha\'s name (Nianfo/Nembutsu).', type: 'ritual' },
          { id: 'pl2', description: 'Faith in the Primal Vow of Amitabha Buddha.', type: 'belief' },
          { id: 'pl3', description: 'Desire to be born in the Pure Land.', type: 'requirement' }
        ]
      }
    ]
  },
  {
    id: 'ancient_egypt',
    name: 'Ancient Egyptian Religion',
    description: 'Polytheistic beliefs of ancient Egypt.',
    denominations: [
      {
        name: 'New Kingdom Era',
        description: 'Classic period of the Book of the Dead.',
        origins: 'Evolved from Old Kingdom pyramid texts. The democratization of the afterlife meant that anyone who could afford the rituals and lived Ma\'at could enter the Field of Reeds, not just the Pharaoh.',
        quotes: [
          { text: "I have not committed sin... I have not stolen... I have not slain men... I have not destroyed the food offerings.", source: "Book of the Dead (Negative Confession)" }
        ],
        afterlifeRealms: [
          { name: 'Aaru (Field of Reeds)', description: 'An idealized version of Egypt with endless harvest.', type: 'paradise' },
          { name: 'Duat', description: 'The underworld filled with dangers.', type: 'neutral' },
          { name: 'Non-existence', description: 'Being devoured by Ammit.', type: 'punishment' }
        ],
        entryRules: [
          { id: 'ae1', description: 'Preservation of the body (Mummification).', type: 'ritual' },
          { id: 'ae2', description: 'Possession of the Book of the Dead (spells to pass gates).', type: 'ritual' },
          { id: 'ae3', description: 'Weighing of the Heart: Heart must be lighter than the Feather of Ma\'at (Truth).', type: 'requirement' },
          { id: 'ae4', description: 'Negative Confessions (declaring sins one has NOT committed).', type: 'ritual' }
        ]
      }
    ]
  },
  {
    id: 'norse',
    name: 'Norse Mythology',
    description: 'North Germanic paganism.',
    denominations: [
      {
        name: 'Viking Age Beliefs',
        description: 'Warrior-centric traditions.',
        origins: 'Part of the wider Germanic pagan tradition. The focus on Valhalla reflected the martial society of the Viking Age, where dying in battle was the highest honor.',
        quotes: [
          { text: "Cattle die, kinsmen die, the self must also die; I know one thing which never dies: the reputation of each dead man.", source: "Havamal (Poetic Edda)" }
        ],
        afterlifeRealms: [
          { name: 'Valhalla', description: 'Hall of the Slain, ruled by Odin.', type: 'paradise' },
          { name: 'Folkvangr', description: 'Field ruled by Freyja (takes half the slain).', type: 'paradise' },
          { name: 'Hel', description: 'The underworld for those dying of age or sickness.', type: 'neutral' },
          { name: 'Nastrond', description: 'Shore of Corpses, for oath-breakers and murderers.', type: 'punishment' }
        ],
        entryRules: [
          { id: 'n1', description: 'Die in battle (for Valhalla/Folkvangr).', type: 'requirement' },
          { id: 'n2', description: 'Do not die of old age or sickness (avoids Hel).', type: 'requirement' },
          { id: 'n3', description: 'Keep oaths and avoid murder (avoids Nastrond).', type: 'requirement' }
        ]
      }
    ]
  },
  {
    id: 'judaism',
    name: 'Judaism',
    description: 'Monotheistic religion of the Jewish people.',
    denominations: [
      {
        name: 'General / Rabbinic',
        description: 'Focus is primarily on Olam Ha-Zeh (this world).',
        origins: 'Developed from Second Temple Judaism. The concept of the afterlife is less defined than in Christianity or Islam, focusing more on the resurrection of the dead in the Messianic Age.',
        quotes: [
          { text: "All Israel has a share in the World to Come.", source: "Mishnah Sanhedrin 10:1" },
          { text: "The dust returns to the earth as it was, and the spirit returns to God who gave it.", source: "Ecclesiastes 12:7" }
        ],
        afterlifeRealms: [
          { name: 'Olam Ha-Ba', description: 'The World to Come.', type: 'paradise' },
          { name: 'Gehenna', description: 'Temporary place of spiritual purification (max 12 months usually).', type: 'purgatory' }
        ],
        entryRules: [
          { id: 'j1', description: 'Living a righteous life according to the Mitzvot (commandments).', type: 'requirement' },
          { id: 'j2', description: 'Repentance (Teshuvah) before death.', type: 'ritual' },
          { id: 'j3', description: 'Righteous Gentiles (Noahides) also have a share in the World to Come.', type: 'belief' }
        ]
      }
    ]
  },
  {
    id: 'secular',
    name: 'Secular / Atheism',
    description: 'Absence of belief in deities or supernatural.',
    denominations: [
      {
        name: 'Materialism',
        description: 'Consciousness is a product of the brain.',
        origins: 'Roots in ancient Greek atomism (Democritus, Epicurus) and modern scientific rationalism. Posits that the mind is a function of the physical brain and ceases when the brain dies.',
        quotes: [
          { text: "Death is nothing to us. When we exist, death is not; and when death exists, we are not.", source: "Epicurus" },
          { text: "We are made of starstuff. We are a way for the cosmos to know itself.", source: "Carl Sagan" }
        ],
        afterlifeRealms: [
          { name: 'Non-existence', description: 'Cessation of consciousness. Similar to before birth.', type: 'state-of-being' }
        ],
        entryRules: [
          { id: 'sec1', description: 'Biological death.', type: 'requirement' },
          { id: 'sec2', description: 'Legacy lives on through memory, genes, and impact.', type: 'belief' }
        ]
      }
    ]
  }
];
