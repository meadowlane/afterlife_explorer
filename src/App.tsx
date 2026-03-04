/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FC } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Book, ChevronRight, Info, Search, X, Quote as QuoteIcon, History, User, Shield, AlertTriangle, Zap, Map } from 'lucide-react';
import { religions, Religion, Denomination, Realm } from './data/religions';
import { archetypes, Archetype } from './data/archetypes';
import { detailedRealms, DetailedRealm } from './data/realms';

type ViewMode = 'religions' | 'archetypes' | 'realms';

export default function App() {
    const [viewMode, setViewMode] = useState<ViewMode>('religions');
    const [selectedReligion, setSelectedReligion] = useState<Religion | null>(null);
    const [selectedArchetype, setSelectedArchetype] = useState<Archetype | null>(null);
    const [selectedRealm, setSelectedRealm] = useState<DetailedRealm | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredReligions = religions.filter(r =>
        r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.denominations.some(d => d.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const filteredArchetypes = archetypes.filter(a =>
        a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.religion.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredRealms = detailedRealms.filter(r =>
        r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.religion.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
            <header className="mb-12 md:mb-16">
                <h1 className="text-4xl md:text-6xl font-serif font-light mb-4 tracking-tight">
                    Afterlife Explorer
                </h1>
                <p className="text-xl font-sans font-light text-[var(--color-warm-muted)] max-w-2xl">
                    A guide to the realms beyond and the rules of entry across world faiths and philosophies.
                </p>
            </header>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
                <div className="relative flex-1 max-w-md">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-[var(--color-warm-muted)]" />
                    </div>
                    <input
                        type="text"
                        placeholder={`Search ${viewMode}...`}
                        className="pl-10 pr-4 py-3 w-full bg-white border-none rounded-2xl shadow-sm focus:ring-2 focus:ring-[var(--color-warm-accent)] focus:outline-none font-sans"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="flex flex-wrap bg-white p-1 rounded-xl shadow-sm">
                    <button
                        onClick={() => setViewMode('religions')}
                        className={`px-4 md:px-6 py-2 rounded-lg font-sans text-sm font-medium transition-all ${
                            viewMode === 'religions'
                                ? 'bg-[var(--color-warm-accent)] text-white shadow-sm'
                                : 'text-[var(--color-warm-muted)] hover:bg-[#f5f5f0]'
                        }`}
                    >
                        Religions
                    </button>
                    <button
                        onClick={() => setViewMode('archetypes')}
                        className={`px-4 md:px-6 py-2 rounded-lg font-sans text-sm font-medium transition-all ${
                            viewMode === 'archetypes'
                                ? 'bg-[var(--color-warm-accent)] text-white shadow-sm'
                                : 'text-[var(--color-warm-muted)] hover:bg-[#f5f5f0]'
                        }`}
                    >
                        Believer Archetypes
                    </button>
                    <button
                        onClick={() => setViewMode('realms')}
                        className={`px-4 md:px-6 py-2 rounded-lg font-sans text-sm font-medium transition-all ${
                            viewMode === 'realms'
                                ? 'bg-[var(--color-warm-accent)] text-white shadow-sm'
                                : 'text-[var(--color-warm-muted)] hover:bg-[#f5f5f0]'
                        }`}
                    >
                        Realms & Destinations
                    </button>
                </div>
            </div>

            <AnimatePresence mode="wait">
                {viewMode === 'religions' && (
                    <motion.div
                        key="religions-grid"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {filteredReligions.map((religion) => (
                            <motion.div
                                key={religion.id}
                                layoutId={`card-${religion.id}`}
                                onClick={() => setSelectedReligion(religion)}
                                className="bg-white rounded-[32px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] cursor-pointer hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow group"
                                whileHover={{ y: -4 }}
                            >
                                <div className="flex justify-between items-start mb-4">
                  <span className="font-sans text-xs font-bold tracking-widest uppercase text-[var(--color-warm-accent)] opacity-60">
                    Religion
                  </span>
                                    <ChevronRight className="w-5 h-5 text-[var(--color-warm-muted)] group-hover:text-[var(--color-warm-accent)] transition-colors" />
                                </div>
                                <h2 className="text-3xl font-serif font-medium mb-3">{religion.name}</h2>
                                <p className="font-sans text-sm text-[var(--color-warm-muted)] leading-relaxed line-clamp-3">
                                    {religion.description}
                                </p>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {religion.denominations.map((d, i) => (
                                        <span key={i} className="inline-block px-3 py-1 bg-[#f5f5f0] rounded-full text-xs font-sans text-[var(--color-warm-text)] opacity-70">
                      {d.name}
                    </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                {viewMode === 'archetypes' && (
                    <motion.div
                        key="archetypes-grid"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {filteredArchetypes.map((archetype) => (
                            <motion.div
                                key={archetype.id}
                                layoutId={`archetype-${archetype.id}`}
                                onClick={() => setSelectedArchetype(archetype)}
                                className="bg-white rounded-[32px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] cursor-pointer hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow group border-t-4 border-[var(--color-warm-accent)]"
                                whileHover={{ y: -4 }}
                            >
                                <div className="flex justify-between items-start mb-4">
                  <span className="font-sans text-xs font-bold tracking-widest uppercase text-[var(--color-warm-accent)] opacity-60">
                    {archetype.religion}
                  </span>
                                    <User className="w-5 h-5 text-[var(--color-warm-muted)] group-hover:text-[var(--color-warm-accent)] transition-colors" />
                                </div>
                                <h2 className="text-2xl font-serif font-medium mb-2">{archetype.name}</h2>
                                <p className="font-sans text-sm text-[var(--color-warm-muted)] leading-relaxed line-clamp-3 mb-6">
                                    {archetype.description}
                                </p>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-xs font-sans text-[var(--color-warm-text)]">
                                        <Shield className="w-4 h-4 text-emerald-600" />
                                        <span className="opacity-80">Strength: {archetype.spiritualFitness.strength}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-sans text-[var(--color-warm-text)]">
                                        <Zap className="w-4 h-4 text-amber-600" />
                                        <span className="opacity-80">Advantage: {archetype.afterlifeStats.advantage.split(':')[0]}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                {viewMode === 'realms' && (
                    <motion.div
                        key="realms-grid"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {filteredRealms.map((realm) => (
                            <motion.div
                                key={realm.id}
                                layoutId={`realm-${realm.id}`}
                                onClick={() => setSelectedRealm(realm)}
                                className="bg-white rounded-[32px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] cursor-pointer hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow group flex flex-col"
                                whileHover={{ y: -4 }}
                            >
                                <div className="h-48 w-full overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                                    <img
                                        src={realm.imageUrl}
                                        alt={realm.name}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start mb-4">
                    <span className="font-sans text-xs font-bold tracking-widest uppercase text-[var(--color-warm-accent)] opacity-60">
                      {realm.religion}
                    </span>
                                        <Map className="w-5 h-5 text-[var(--color-warm-muted)] group-hover:text-[var(--color-warm-accent)] transition-colors" />
                                    </div>
                                    <h2 className="text-3xl font-serif font-medium mb-3">{realm.name}</h2>
                                    <div className="mb-4">
                                        <RealmBadge type={realm.type} />
                                    </div>
                                    <p className="font-sans text-sm text-[var(--color-warm-muted)] leading-relaxed flex-1">
                                        {realm.shortDescription}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {selectedReligion && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedReligion(null)}
                            className="absolute inset-0 bg-[#2c2c2a]/40 backdrop-blur-sm"
                        />
                        <motion.div
                            layoutId={`card-${selectedReligion.id}`}
                            className="bg-[#fcfcfb] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[32px] shadow-2xl relative z-10"
                        >
                            <div className="p-8 md:p-12">
                                <button
                                    onClick={(e) => { e.stopPropagation(); setSelectedReligion(null); }}
                                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 transition-colors"
                                >
                                    <X className="w-6 h-6 text-[var(--color-warm-muted)]" />
                                </button>

                                <div className="mb-10">
                  <span className="font-sans text-xs font-bold tracking-widest uppercase text-[var(--color-warm-accent)] opacity-60 mb-2 block">
                    Religion
                  </span>
                                    <h2 className="text-5xl font-serif font-medium mb-4">{selectedReligion.name}</h2>
                                    <p className="font-sans text-lg text-[var(--color-warm-muted)] leading-relaxed max-w-2xl">
                                        {selectedReligion.description}
                                    </p>
                                </div>

                                <div className="space-y-12">
                                    {selectedReligion.denominations.map((denom, idx) => (
                                        <DenominationSection key={idx} denom={denom} onSelectRealm={(realm) => setSelectedRealm(realm)} />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {selectedArchetype && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedArchetype(null)}
                            className="absolute inset-0 bg-[#2c2c2a]/40 backdrop-blur-sm"
                        />
                        <motion.div
                            layoutId={`archetype-${selectedArchetype.id}`}
                            className="bg-[#fcfcfb] w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[32px] shadow-2xl relative z-10"
                        >
                            <div className="p-8 md:p-12">
                                <button
                                    onClick={(e) => { e.stopPropagation(); setSelectedArchetype(null); }}
                                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 transition-colors"
                                >
                                    <X className="w-6 h-6 text-[var(--color-warm-muted)]" />
                                </button>

                                <div className="mb-8">
                  <span className="font-sans text-xs font-bold tracking-widest uppercase text-[var(--color-warm-accent)] opacity-60 mb-2 block">
                    Believer Archetype
                  </span>
                                    <h2 className="text-4xl font-serif font-medium mb-2">{selectedArchetype.name}</h2>
                                    <div className="inline-block px-3 py-1 bg-[#f5f5f0] rounded-full text-xs font-sans text-[var(--color-warm-text)] opacity-70 mb-6">
                                        {selectedArchetype.religion}
                                    </div>
                                    <p className="font-sans text-lg text-[var(--color-warm-muted)] leading-relaxed">
                                        {selectedArchetype.description}
                                    </p>
                                </div>

                                <div className="space-y-8">
                                    <div className="bg-[#f5f5f0] rounded-2xl p-6">
                                        <h3 className="font-sans text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2 text-[var(--color-warm-accent)]">
                                            <Book className="w-4 h-4" />
                                            Core Beliefs
                                        </h3>
                                        <ul className="space-y-3">
                                            {selectedArchetype.coreBeliefs.map((belief, i) => (
                                                <li key={i} className="flex gap-3 items-start">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-warm-accent)] mt-2 shrink-0"></span>
                                                    <p className="font-serif text-lg leading-snug text-[var(--color-warm-text)]">
                                                        {belief}
                                                    </p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="font-sans text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2 text-[var(--color-warm-accent)]">
                                            <User className="w-4 h-4" />
                                            Spiritual Fitness
                                        </h3>
                                        <div className="grid gap-4">
                                            <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                                                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">Strength</span>
                                                <p className="font-serif text-lg text-emerald-900">{selectedArchetype.spiritualFitness.strength}</p>
                                            </div>
                                            <div className="bg-white p-4 rounded-xl border border-black/5">
                                                <span className="text-xs font-bold text-[var(--color-warm-muted)] uppercase tracking-wider block mb-1">Focus</span>
                                                <p className="font-serif text-lg text-[var(--color-warm-text)]">{selectedArchetype.spiritualFitness.focus}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="font-sans text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2 text-[var(--color-warm-accent)]">
                                            <Info className="w-4 h-4" />
                                            Afterlife Stats
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="bg-white p-5 rounded-2xl border border-black/5 shadow-sm">
                                                <div className="flex items-center gap-2 mb-2 text-emerald-700">
                                                    <Shield className="w-4 h-4" />
                                                    <span className="text-xs font-bold uppercase tracking-wider">Advantage</span>
                                                </div>
                                                <p className="font-sans text-sm text-[var(--color-warm-text)] leading-relaxed">
                                                    {selectedArchetype.afterlifeStats.advantage}
                                                </p>
                                            </div>
                                            <div className="bg-white p-5 rounded-2xl border border-black/5 shadow-sm">
                                                <div className="flex items-center gap-2 mb-2 text-amber-700">
                                                    <AlertTriangle className="w-4 h-4" />
                                                    <span className="text-xs font-bold uppercase tracking-wider">Disadvantage</span>
                                                </div>
                                                <p className="font-sans text-sm text-[var(--color-warm-text)] leading-relaxed">
                                                    {selectedArchetype.afterlifeStats.disadvantage}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {selectedRealm && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedRealm(null)}
                            className="absolute inset-0 bg-[#2c2c2a]/60 backdrop-blur-md"
                        />
                        <motion.div
                            layoutId={`realm-${selectedRealm.id}`}
                            className="bg-[#fcfcfb] w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[32px] shadow-2xl relative z-10 flex flex-col"
                        >
                            <div className="h-64 md:h-80 w-full relative shrink-0">
                                <img
                                    src={selectedRealm.imageUrl}
                                    alt={selectedRealm.name}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#fcfcfb] to-transparent" />
                                <button
                                    onClick={(e) => { e.stopPropagation(); setSelectedRealm(null); }}
                                    className="absolute top-6 right-6 p-2 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-sm transition-colors z-20"
                                >
                                    <X className="w-6 h-6 text-white" />
                                </button>
                            </div>

                            <div className="px-8 pb-8 md:px-12 md:pb-12 -mt-12 relative z-10">
                                <div className="mb-8">
                                    <div className="flex items-center gap-3 mb-4">
                    <span className="font-sans text-xs font-bold tracking-widest uppercase text-[var(--color-warm-accent)] opacity-60">
                      {selectedRealm.religion}
                    </span>
                                        <RealmBadge type={selectedRealm.type} />
                                    </div>
                                    <h2 className="text-5xl font-serif font-medium mb-6">{selectedRealm.name}</h2>

                                    {selectedRealm.quote && (
                                        <blockquote className="mb-8 pl-6 border-l-2 border-[var(--color-warm-accent)] py-2">
                                            <p className="font-serif text-xl italic text-[var(--color-warm-text)] mb-2">
                                                "{selectedRealm.quote.text}"
                                            </p>
                                            <footer className="font-sans text-xs font-bold text-[var(--color-warm-muted)] uppercase tracking-wider">
                                                — {selectedRealm.quote.source}
                                            </footer>
                                        </blockquote>
                                    )}
                                </div>

                                <div className="space-y-10">
                                    <section>
                                        <h3 className="font-sans text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2 text-[var(--color-warm-accent)]">
                                            <Map className="w-4 h-4" />
                                            The Landscape
                                        </h3>
                                        <p className="font-serif text-xl leading-relaxed text-[var(--color-warm-text)]">
                                            {selectedRealm.vividDescription}
                                        </p>
                                    </section>

                                    <section className="bg-[#f5f5f0] p-6 md:p-8 rounded-2xl">
                                        <h3 className="font-sans text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2 text-[var(--color-warm-accent)]">
                                            <User className="w-4 h-4" />
                                            The Experience
                                        </h3>
                                        <p className="font-serif text-lg leading-relaxed text-[var(--color-warm-text)]">
                                            {selectedRealm.experience}
                                        </p>
                                    </section>

                                    <section>
                                        <h3 className="font-sans text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2 text-[var(--color-warm-accent)]">
                                            <Book className="w-4 h-4" />
                                            Entry Criteria
                                        </h3>
                                        <ul className="space-y-4">
                                            {selectedRealm.entryCriteria.map((criteria, i) => (
                                                <li key={i} className="flex gap-4 items-start">
                          <span className="font-mono text-sm text-[var(--color-warm-muted)] mt-1 opacity-50">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                                                    <p className="font-sans text-base text-[var(--color-warm-text)] leading-relaxed">
                                                        {criteria}
                                                    </p>
                                                </li>
                                            ))}
                                        </ul>
                                    </section>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}

const DenominationSection: FC<{ denom: Denomination; onSelectRealm: (realm: DetailedRealm) => void }> = ({ denom, onSelectRealm }) => {
    const nameMap: Record<string, string> = {
        'Heaven': 'christian-heaven',
        'Purgatory': 'purgatory',
        'Jannah (Paradise)': 'jannah',
        'Naraka (Hell)': 'naraka',
        'Moksha': 'moksha',
        'Nirvana': 'moksha',
        'Aaru (Field of Reeds)': 'aaru',
        'Valhalla': 'valhalla'
    };

    const getDetailedRealm = (realmName: string) => {
        const id = nameMap[realmName];
        return id ? detailedRealms.find(r => r.id === id) : undefined;
    };

    return (
        <div className="border-t border-black/5 pt-8">
            <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-6">
                <h3 className="text-3xl font-serif italic text-[var(--color-warm-accent)]">
                    {denom.name}
                </h3>
                <p className="font-sans text-sm text-[var(--color-warm-muted)]">
                    {denom.description}
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                    <h4 className="font-sans text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[var(--color-warm-accent)]"></span>
                        Afterlife Realms
                    </h4>
                    <div className="space-y-4">
                        {denom.afterlifeRealms.map((realm, i) => {
                            const detailedRealm = getDetailedRealm(realm.name);
                            const isClickable = !!detailedRealm;

                            return (
                                <div
                                    key={i}
                                    onClick={() => isClickable && onSelectRealm(detailedRealm)}
                                    className={`bg-white p-4 rounded-2xl border border-black/5 ${isClickable ? 'cursor-pointer hover:border-[var(--color-warm-accent)] hover:shadow-md transition-all group' : ''}`}
                                >
                                    <div className="flex justify-between items-start mb-1">
                    <span className={`font-serif text-lg font-medium flex items-center gap-2 ${isClickable ? 'group-hover:text-[var(--color-warm-accent)] transition-colors' : ''}`}>
                      {realm.name}
                        {isClickable && <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />}
                    </span>
                                        <RealmBadge type={realm.type} />
                                    </div>
                                    <p className="text-sm font-sans text-[var(--color-warm-muted)] leading-snug">
                                        {realm.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div>
                    <h4 className="font-sans text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
                        <Book className="w-4 h-4" />
                        Entry Rules
                    </h4>
                    <ul className="space-y-3">
                        {denom.entryRules.map((rule, i) => (
                            <li key={i} className="flex gap-3 items-start group">
                <span className="font-mono text-xs text-[var(--color-warm-muted)] mt-1 opacity-50">
                  {String(i + 1).padStart(2, '0')}
                </span>
                                <div>
                                    <p className="font-serif text-lg leading-snug group-hover:text-[var(--color-warm-accent)] transition-colors">
                                        {rule.description}
                                    </p>
                                    <span className="inline-block mt-1 text-[10px] uppercase tracking-wider font-sans opacity-40 border border-current px-1.5 rounded">
                    {rule.type}
                  </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {(denom.origins || (denom.quotes && denom.quotes.length > 0)) && (
                <div className="grid md:grid-cols-2 gap-8 bg-[#f5f5f0] rounded-2xl p-6 md:p-8">
                    {denom.origins && (
                        <div>
                            <h4 className="font-sans text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2 text-[var(--color-warm-accent)]">
                                <History className="w-4 h-4" />
                                Origins & Theology
                            </h4>
                            <p className="font-serif text-lg leading-relaxed text-[var(--color-warm-text)]">
                                {denom.origins}
                            </p>
                        </div>
                    )}

                    {denom.quotes && denom.quotes.length > 0 && (
                        <div>
                            <h4 className="font-sans text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2 text-[var(--color-warm-accent)]">
                                <QuoteIcon className="w-4 h-4" />
                                Key Texts
                            </h4>
                            <div className="space-y-6">
                                {denom.quotes.map((quote, i) => (
                                    <blockquote key={i} className="relative pl-4 border-l-2 border-[var(--color-warm-accent)]">
                                        <p className="font-serif text-lg italic text-[var(--color-warm-text)] mb-2">
                                            "{quote.text}"
                                        </p>
                                        <footer className="font-sans text-xs font-bold text-[var(--color-warm-muted)] uppercase tracking-wider">
                                            — {quote.source}
                                        </footer>
                                    </blockquote>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

const RealmBadge: FC<{ type: Realm['type'] }> = ({ type }) => {
    const colors = {
        paradise: 'bg-emerald-100 text-emerald-800',
        purgatory: 'bg-amber-100 text-amber-800',
        punishment: 'bg-rose-100 text-rose-800',
        neutral: 'bg-slate-100 text-slate-800',
        'state-of-being': 'bg-indigo-100 text-indigo-800'
    };

    return (
        <span className={`text-[10px] font-sans uppercase tracking-wider font-medium px-2 py-0.5 rounded-full ${colors[type] || colors.neutral}`}>
      {type}
    </span>
    );
}
