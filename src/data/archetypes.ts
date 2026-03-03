export interface Archetype {
  id: string;
  name: string;
  religion: string;
  description: string;
  coreBeliefs: string[];
  spiritualFitness: {
    strength: string;
    focus: string;
  };
  afterlifeStats: {
    advantage: string;
    disadvantage: string;
  };
}

export const archetypes: Archetype[] = [
  {
    id: 'devout-catholic',
    name: 'The Sacramental Pilgrim',
    religion: 'Catholicism',
    description: 'A believer who navigates life through the visible signs of invisible grace, relying on the Church as the vessel of salvation.',
    coreBeliefs: [
      'Grace is mediated through Sacraments (Baptism, Eucharist, Confession).',
      'Purgatory is a necessary state of cleansing for imperfect souls.',
      'Faith must be perfected by charity and works.'
    ],
    spiritualFitness: {
      strength: 'Ritual Resilience',
      focus: 'Maintaining a "State of Grace" via regular Confession and Mass to avoid mortal sin.'
    },
    afterlifeStats: {
      advantage: 'Safety Net: Access to Purgatory means minor sins don\'t result in eternal damnation.',
      disadvantage: 'Rigidity: Dying with an unconfessed mortal sin is viewed as a catastrophic spiritual failure.'
    }
  },
  {
    id: 'reformed-believer',
    name: 'The Elect',
    religion: 'Presbyterianism (Reformed)',
    description: 'A believer resting in the sovereignty of God, trusting that their salvation was secured before the foundation of the world.',
    coreBeliefs: [
      'Total Depravity: Humans cannot save themselves.',
      'Unconditional Election: God chooses who to save based on His will, not human merit.',
      'Sola Fide: Justification is by faith alone.'
    ],
    spiritualFitness: {
      strength: 'Assurance',
      focus: 'Gratitude and living out one\'s calling as a sign of being chosen, rather than earning salvation.'
    },
    afterlifeStats: {
      advantage: 'Security: "Once Saved Always Saved" provides immense psychological peace regarding the afterlife.',
      disadvantage: 'Uncertainty of Status: The anxiety of "Am I truly one of the Elect?" can be a lifelong struggle.'
    }
  },
  {
    id: 'sunni-practitioner',
    name: 'The Servant of Allah',
    religion: 'Islam (Sunni)',
    description: 'A disciplined devotee who structures their entire life around submission to the will of the One God.',
    coreBeliefs: [
      'Life is a test; the Afterlife (Akhirah) is the reality.',
      'Every deed is recorded by angels.',
      'Intercession is limited; personal accountability is paramount.'
    ],
    spiritualFitness: {
      strength: 'Discipline',
      focus: 'Rigorous adherence to the Five Pillars (Prayer, Fasting, etc.) to build a "bank account" of good deeds.'
    },
    afterlifeStats: {
      advantage: 'Clarity: The rules for entry (The Five Pillars) are explicit and structured.',
      disadvantage: 'The Scale: The fear that one\'s bad deeds might slightly outweigh the good on Judgment Day.'
    }
  },
  {
    id: 'vedantic-hindu',
    name: 'The Karmic Traveler',
    religion: 'Hinduism',
    description: 'A soul aware that this life is just one chapter in a very long book, seeking to break the cycle.',
    coreBeliefs: [
      'Karma: Every action has a reaction in this life or the next.',
      'Samsara: The cycle of birth and death is a trap, not a gift.',
      'Dharma: Fulfilling one\'s cosmic duty is essential for better rebirth.'
    ],
    spiritualFitness: {
      strength: 'Long-term Perspective',
      focus: 'Accumulating Punya (merit) and detaching from material desires to purify the consciousness.'
    },
    afterlifeStats: {
      advantage: 'Second Chances: Failure in this life just means another try (reincarnation), not eternal hell.',
      disadvantage: 'The Grind: The sheer timescale required to achieve Moksha (liberation) can feel overwhelming.'
    }
  },
  {
    id: 'theravada-monk',
    name: 'The Arhat Seeker',
    religion: 'Buddhism (Theravada)',
    description: 'A practitioner striving to extinguish the fires of greed, hatred, and delusion to end suffering.',
    coreBeliefs: [
      'Anatta: There is no permanent self or soul.',
      'Dukkha: Existence is inherently unsatisfactory.',
      'Nirvana is the only true refuge.'
    ],
    spiritualFitness: {
      strength: 'Mental Fortitude',
      focus: 'Mindfulness and meditation to deconstruct the illusion of "self" and stop generating new karma.'
    },
    afterlifeStats: {
      advantage: 'End of Suffering: The goal is not a "heaven" but the complete cessation of all pain and trouble.',
      disadvantage: 'High Bar: True liberation (Nirvana) is extremely difficult for laypeople to attain in one lifetime.'
    }
  },
  {
    id: 'ancient-egyptian',
    name: 'The Prepared Soul',
    religion: 'Ancient Egyptian',
    description: 'A person who spends their life preparing for their death, viewing it as a journey requiring a map and supplies.',
    coreBeliefs: [
      'Death is a physical journey requiring preservation of the body (Ka).',
      'Magic (Heka) can overcome obstacles in the underworld.',
      'The heart must be light as a feather.'
    ],
    spiritualFitness: {
      strength: 'Preparation',
      focus: 'Acquiring the necessary spells (Book of the Dead) and burial goods to survive the Duat.',
    },
    afterlifeStats: {
      advantage: 'Cheat Codes: Knowledge of the correct spells can literally bypass afterlife guardians.',
      disadvantage: 'Physical Dependency: If your physical body or tomb is destroyed, your afterlife is jeopardized.'
    }
  },
  {
    id: 'norse-warrior',
    name: 'The Einherjar Hopeful',
    religion: 'Norse Mythology',
    description: 'A warrior who embraces a fatalistic worldview, seeking glory before the inevitable end.',
    coreBeliefs: [
      'Wyrd (Fate) is unchangeable.',
      'Death in battle is the only ticket to the VIP section (Valhalla).',
      'Reputation is the only thing that survives death.'
    ],
    spiritualFitness: {
      strength: 'Courage',
      focus: 'Living fearlessly and seeking dangerous conflicts to ensure a "good death."',
    },
    afterlifeStats: {
      advantage: 'Glory: The promise of feasting and fighting with the gods until the end of the world.',
      disadvantage: 'Exclusivity: Dying of old age or sickness ("Straw Death") is a shameful disqualification.'
    }
  },
  {
    id: 'secular-humanist',
    name: 'The Legacy Builder',
    religion: 'Secular / Atheism',
    description: 'An individual finding meaning in the finite nature of existence, focusing on impact in the here and now.',
    coreBeliefs: [
      'This life is the only one we know for sure.',
      'Meaning is created, not discovered.',
      'Immortality is achieved through memory and impact.'
    ],
    spiritualFitness: {
      strength: 'Urgency',
      focus: 'Maximizing well-being and leaving the world better than they found it because there is no "later."',
    },
    afterlifeStats: {
      advantage: 'Freedom: No fear of eternal punishment or judgment by a deity.',
      disadvantage: 'Finality: The existential weight of believing that consciousness permanently ends.'
    }
  }
];
