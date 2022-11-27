import { Case } from './types'

// 11 est l'index du mois => Décembre
export const cases: Case[] = [
  {
    project: 'ElrondHunt', // 1
    link: ' https://twitter.com/ElrondHunt',
    imgUrl: 'elrond_hunt.png',
    encryptedWord: '$2a$10$uPgzV15gmqBDw5.uOIdWpOo5YxHWoW1V7EmYWxkal/imPCjmOHeTi', // simple
    encryptedWalletWord: 'fill',
    availableDate: new Date(2022, 10, 1),
    hint: 'The word is simple',
  },
  {
    project: 'Dragons Arena', // 1
    link: 'https://discord.gg/h6T9vp3J86',
    imgUrl: 'dragons_arena.png',
    encryptedWord: '$2a$10$uPgzV15gmqBDw5.uOIdWpOSFauGBtCCcv.uv1BA8xv54ad3wHNc6e', // Agate48
    encryptedWalletWord: 'fill',
    availableDate: new Date(2022, 11, 1),
    hint: '🎵',
  },
  {
    project: 'Battle of nodes', // 2
    link: 'https://twitter.com/BattleOfNodeNFT',
    imgUrl: 'battle_of_nodes.png',
    encryptedWord: '$2a$10$uPgzV15gmqBDw5.uOIdWpO/wnNdsCnomPcxHIf4KkEBXBZqPhf9Mi', // Aragonite05
    encryptedWalletWord: 'fill',
    availableDate: new Date(2022, 11, 2),
    hint: 'A new player has entered the game',
  },
  {
    project: 'VSWatch', // 3
    link: 'https://vswatch.club/',
    imgUrl: 'vswatch.png',
    encryptedWord: '$2a$10$uPgzV15gmqBDw5.uOIdWpOoDnTWznpF6WgSWxS/JjVQzqD7BcFgVW', // Spinel02
    encryptedWalletWord: 'fill',
    availableDate: new Date(2022, 11, 3),
    hint: '3 letters in the dark',
  },
  {
    project: 'Demiourgos', // 4
    link: 'https://twitter.com/DemiourgosH',
    imgUrl: 'demiourgos.png',
    encryptedWord: '$2a$10$uPgzV15gmqBDw5.uOIdWpOgNujtQiUeaQZ4aD6A.eFo/L4NROQEQK', // Labradorite12
    encryptedWalletWord: 'fill',
    availableDate: new Date(2022, 11, 4),
    hint: 'Where’s is the Lost Ark ? ',
  },
  {
    project: 'Angry Penguins', // 5
    link: 'https://discord.gg/hfK6CvgF8M',
    imgUrl: 'angry_penguins.png',
    encryptedWord: '$2a$10$uPgzV15gmqBDw5.uOIdWpOJA7UIeJYbq5xKs2t34IDiUCBoUW89ki', // Aventurine22
    encryptedWalletWord: 'fill',
    availableDate: new Date(2022, 11, 5),
    hint: 'Ask a question after 7pm'
  },
  {
    project: 'Calileo', // 6
    link: 'https://calileo.co/ethos',
    imgUrl: 'calileo.png',
    encryptedWord: '$2a$10$uPgzV15gmqBDw5.uOIdWpOMYEpFY95LXrNssk5m9xOPXvXWPgTNYu', // Amethyst09
    encryptedWalletWord: 'fill',
    availableDate: new Date(2022, 11, 6),
    hint: 'Touch the invisible'
  },
  {
    project: 'Elrond Mafia', // 7
    link: 'https://discord.gg/elrondmafia',
    imgUrl: 'elrond_mafia.png',
    encryptedWord: '$2a$10$uPgzV15gmqBDw5.uOIdWpOkW.1y4zQ2TVF6PnDENjp.hcm6kBrIjC', // Topaz58
    encryptedWalletWord: 'fill',
    availableDate: new Date(2022, 11, 7),
    hint: 'Ask yourself the right questions. The mafia does not forgive'
  },
  {
    project: 'CryptoPittz', // 8
    link: 'https://discord.gg/cryptopittz',
    imgUrl: 'crypto_pittz.png',
    encryptedWord: '$2a$10$uPgzV15gmqBDw5.uOIdWpOhzcc.fQ799J5U9beiCiQCkaNVsfAERi', // Emerald20
    encryptedWalletWord: 'fill',
    availableDate: new Date(2022, 11, 8),
    hint: 'We need to talk'
  },
  {
    project: 'Founding 8', // 9
    link: 'https://discord.gg/tC4us5eJ43',
    imgUrl: 'founding_8.png',
    encryptedWord: '$2a$10$uPgzV15gmqBDw5.uOIdWpOPHjaJiFvwnTFlLRt95jx6zCfBbNNyU2', // Carnelian11
    encryptedWalletWord: 'fill',
    availableDate: new Date(2022, 11, 9),
    hint: '1Beauty 3lies in the 5eyes of the beholder'
  },
  {
    project: 'Gaupa Labs', // 10
    link: 'https://twitter.com/GaupaLabs',
    imgUrl: 'gaupa_labs.png',
    encryptedWord: '$2a$10$uPgzV15gmqBDw5.uOIdWpOCe/rv0gyIEWG06yo2xPI0IZ87T1.Nuq', // Tanzanite03
    encryptedWalletWord: 'fill',
    availableDate: new Date(2022, 11, 10),
    hint: 'The X marks the spot'
  },
  {
    project: 'HODLcards', // 11
    link: 'https://dsc.gg/HODLcards',
    imgUrl: 'hodlcards.png',
    encryptedWord: '$2a$10$uPgzV15gmqBDw5.uOIdWpOHuVkD2GzUsHJmb5s0jWeeMc4x6086gS', // Gold12
    encryptedWalletWord: 'fill',
    availableDate: new Date(2022, 11, 11),
    hint: 'Get a tattoo and cash-in !'
  },
  {
    project: 'JCorp', // 12
    link: 'https://play.jcorpbattleofgods.com/',
    imgUrl: 'jcorp.png',
    encryptedWord: '$2a$10$uPgzV15gmqBDw5.uOIdWpOpTp/jrEB58Xq3kWTYm414WNGwOaCWAS', // Kyanite99
    encryptedWalletWord: 'fill',
    availableDate: new Date(2022, 11, 12),
    hint: 'What’s next ?'
  },
  {
    project: 'Monkeys Supremacy', // 13
    link: 'https://discord.gg/jZZRrD8Qbz',
    imgUrl: '/project_logos/elrond_mafia.webp',
    encryptedWord: 'emerald29',
    encryptedWalletWord: 'fill',
    availableDate: new Date(2022, 11, 13),
  },
  {
    project: 'PLATA', // 14
    link: 'https://discord.gg/jZZRrD8Qbz',
    imgUrl: '/project_logos/elrond_mafia.webp',
    encryptedWord: 'emerald29',
    encryptedWalletWord: 'fill',
    availableDate: new Date(2022, 11, 14),
  },
  {
    project: 'TOC', // 15
    link: 'https://discord.gg/jZZRrD8Qbz',
    imgUrl: '/project_logos/elrond_mafia.webp',
    encryptedWord: 'emerald29',
    encryptedWalletWord: 'fill',
    availableDate: new Date(2022, 11, 15),
  },
  {
    project: 'Lucky1000', // 16
    link: 'https://discord.gg/jZZRrD8Qbz',
    imgUrl: '/project_logos/elrond_mafia.webp',
    encryptedWord: 'emerald29',
    encryptedWalletWord: 'fill',
    availableDate: new Date(2022, 11, 16),
  },
  {
    project: 'Wwwatch', // 17
    link: 'https://discord.gg/jZZRrD8Qbz',
    imgUrl: '/project_logos/elrond_mafia.webp',
    encryptedWord: 'emerald29',
    encryptedWalletWord: 'fill',
    availableDate: new Date(2022, 11, 17),
  },
  {
    project: 'Frame it', // 18
    link: 'https://discord.gg/jZZRrD8Qbz',
    imgUrl: '/project_logos/elrond_mafia.webp',
    encryptedWord: 'emerald29',
    encryptedWalletWord: 'fill',
    availableDate: new Date(2022, 11, 18),
  },
  {
    project: 'QoWatt', // 19
    link: 'https://discord.gg/jZZRrD8Qbz',
    imgUrl: '/project_logos/elrond_mafia.webp',
    encryptedWord: 'emerald29',
    encryptedWalletWord: 'fill',
    availableDate: new Date(2022, 11, 19),
  },
  {
    project: 'Dinovox', // 20
    link: 'https://discord.gg/jZZRrD8Qbz',
    imgUrl: '/project_logos/elrond_mafia.webp',
    encryptedWord: 'emerald29',
    encryptedWalletWord: 'fill',
    availableDate: new Date(2022, 11, 20),
  },
  {
    project: 'Drifters', // 21
    link: 'https://discord.gg/jZZRrD8Qbz',
    imgUrl: '/project_logos/elrond_mafia.webp',
    encryptedWord: 'emerald29',
    encryptedWalletWord: 'fill',
    availableDate: new Date(2022, 11, 21),
  },
  {
    project: 'Fightoons', // 22
    link: 'https://discord.gg/jZZRrD8Qbz',
    imgUrl: '/project_logos/elrond_mafia.webp',
    encryptedWord: 'emerald29',
    encryptedWalletWord: 'fill',
    availableDate: new Date(2022, 11, 22),
  },
  {
    project: 'Globees', // 23
    link: 'https://discord.gg/jZZRrD8Qbz',
    imgUrl: '/project_logos/elrond_mafia.webp',
    encryptedWord: 'emerald29',
    encryptedWalletWord: 'fill',
    availableDate: new Date(2022, 11, 23),
  },
  {
    project: 'MultiversX France',
    link: 'https://discord.gg/jZZRrD8Qbz',
    imgUrl: '/project_logos/elrond_mafia.webp',
    encryptedWord: 'emerald29',
    encryptedWalletWord: 'fill',
    availableDate: new Date(2022, 11, 24),
  },
]
