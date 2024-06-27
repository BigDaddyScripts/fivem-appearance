export const Delay = (ms: number): Promise<void> => new Promise(res => setTimeout(res, ms));

export const isPedFreemodeModel = (ped: number): boolean => {
  const entityModel = GetEntityModel(ped);

  const freemodeMale = GetHashKey('mp_m_freemode_01');
  const freemodeFemale = GetHashKey('mp_f_freemode_01');

  return entityModel === freemodeMale || entityModel === freemodeFemale;
};

export const isPedMale = (ped: number): boolean => {
  const entityModel = GetEntityModel(ped);
  const freemodeMale = GetHashKey('mp_m_freemode_01');

  return entityModel === freemodeMale;
};

export function arrayToVector3(coords: number[]): Vector3 {
  return {
    x: coords[0],
    y: coords[1],
    z: coords[2],
  };
}

export const getPedStats = (): Array<number> => {
  const playerPed = PlayerPedId();
  const health = GetEntityHealth(playerPed);
  const armor = GetPedArmour(playerPed);

  return [health, armor];
};

export const setPedStats = (health: number, armor: number): void => {
  const playerPed = PlayerPedId();
  SetEntityHealth(playerPed, health);
  SetPedArmour(playerPed, armor);
};

export const clipsetLookup = (clipsetHash: number): string => {
  const clipsetDict = [
    {
      name: 'move_m@alien',
      hash: GetHashKey('move_m@alien'),
    },
    {
      name: 'anim_group_move_ballistic',
      hash: GetHashKey('anim_group_move_ballistic'),
    },
    {
      name: 'move_f@arrogant@a',
      hash: GetHashKey('move_f@arrogant@a'),
    },
    {
      name: 'move_m@hurry_butch@a',
      hash: GetHashKey('move_m@hurry_butch@a'),
    },
    {
      name: 'move_m@hurry_butch@b',
      hash: GetHashKey('move_m@hurry_butch@b'),
    },
    {
      name: 'move_m@hurry_butch@c',
      hash: GetHashKey('move_m@hurry_butch@c'),
    },
    {
      name: 'move_m@buzzed',
      hash: GetHashKey('move_m@buzzed'),
    },
    {
      name: 'move_m@brave',
      hash: GetHashKey('move_m@brave'),
    },
    {
      name: 'move_m@brave@a',
      hash: GetHashKey('move_m@brave@a'),
    },
    {
      name: 'move_casey',
      hash: GetHashKey('move_casey'),
    },
    {
      name: 'move_m@casual@a',
      hash: GetHashKey('move_m@casual@a'),
    },
    {
      name: 'move_m@casual@b',
      hash: GetHashKey('move_m@casual@b'),
    },
    {
      name: 'move_m@casual@c',
      hash: GetHashKey('move_m@casual@c'),
    },
    {
      name: 'move_m@casual@d',
      hash: GetHashKey('move_m@casual@d'),
    },
    {
      name: 'move_m@casual@e',
      hash: GetHashKey('move_m@casual@e'),
    },
    {
      name: 'move_m@casual@f',
      hash: GetHashKey('move_m@casual@f'),
    },
    {
      name: 'move_f@chichi',
      hash: GetHashKey('move_f@chichi'),
    },
    {
      name: 'move_m@confident',
      hash: GetHashKey('move_m@confident'),
    },
    {
      name: 'move_m@business@a',
      hash: GetHashKey('move_m@business@a'),
    },
    {
      name: 'move_m@business@b',
      hash: GetHashKey('move_m@business@b'),
    },
    {
      name: 'move_m@business@c',
      hash: GetHashKey('move_m@business@c'),
    },
    {
      name: 'move_m@coward',
      hash: GetHashKey('move_m@coward'),
    },
    {
      name: 'move_chubby',
      hash: GetHashKey('move_chubby'),
    },
    {
      name: 'move_f@chubby@a',
      hash: GetHashKey('move_f@chubby@a'),
    },
    {
      name: 'move_characters@dave_n',
      hash: GetHashKey('move_characters@dave_n'),
    },
    {
      name: 'move_f@multiplayer',
      hash: GetHashKey('move_f@multiplayer'),
    },
    {
      name: 'move_m@multiplayer',
      hash: GetHashKey('move_m@multiplayer'),
    },
    {
      name: 'move_m@depressed@a',
      hash: GetHashKey('move_m@depressed@a'),
    },
    {
      name: 'move_m@depressed@b',
      hash: GetHashKey('move_m@depressed@b'),
    },
    {
      name: 'move_f@depressed@a',
      hash: GetHashKey('move_f@depressed@a'),
    },
    {
      name: 'move_f@depressed@c',
      hash: GetHashKey('move_f@depressed@c'),
    },
    {
      name: 'move_dreyfuss',
      hash: GetHashKey('move_dreyfuss'),
    },
    {
      name: 'move_m@drunk@a',
      hash: GetHashKey('move_m@drunk@a'),
    },
    {
      name: 'move_m@buzzed',
      hash: GetHashKey('move_m@buzzed'),
    },
    {
      name: 'move_m@drunk@moderatedrunk',
      hash: GetHashKey('move_m@drunk@moderatedrunk'),
    },
    {
      name: 'move_m@drunk@moderatedrunk_head_up',
      hash: GetHashKey('move_m@drunk@moderatedrunk_head_up'),
    },
    {
      name: 'move_m@drunk@slightlydrunk',
      hash: GetHashKey('move_m@drunk@slightlydrunk'),
    },
    {
      name: 'move_m@drunk@verydrunk',
      hash: GetHashKey('move_m@drunk@verydrunk'),
    },
    {
      name: 'move_m@fat@a',
      hash: GetHashKey('move_m@fat@a'),
    },
    {
      name: 'move_f@fat@a',
      hash: GetHashKey('move_f@fat@a'),
    },
    {
      name: 'move_m@fat@bulky',
      hash: GetHashKey('move_m@fat@bulky'),
    },
    {
      name: 'move_f@fat@a_no_add',
      hash: GetHashKey('move_f@fat@a_no_add'),
    },
    {
      name: 'move_f@femme@',
      hash: GetHashKey('move_f@femme@'),
    },
    {
      name: 'move_m@femme@',
      hash: GetHashKey('move_m@femme@'),
    },
    {
      name: 'move_characters@franklin@fire',
      hash: GetHashKey('move_characters@franklin@fire'),
    },
    {
      name: 'move_characters@michael@fire',
      hash: GetHashKey('move_characters@michael@fire'),
    },
    {
      name: 'move_m@fire',
      hash: GetHashKey('move_m@fire'),
    },
    {
      name: 'move_f@flee@a',
      hash: GetHashKey('move_f@flee@a'),
    },
    {
      name: 'move_f@flee@c',
      hash: GetHashKey('move_f@flee@c'),
    },
    {
      name: 'move_m@flee@a',
      hash: GetHashKey('move_m@flee@a'),
    },
    {
      name: 'move_m@flee@b',
      hash: GetHashKey('move_m@flee@b'),
    },
    {
      name: 'move_m@flee@c',
      hash: GetHashKey('move_m@flee@c'),
    },
    {
      name: 'move_characters@floyd',
      hash: GetHashKey('move_characters@floyd'),
    },
    {
      name: 'move_p_m_one',
      hash: GetHashKey('move_p_m_one'),
    },
    {
      name: 'move_m@gangster@generic',
      hash: GetHashKey('move_m@gangster@generic'),
    },
    {
      name: 'move_gangster',
      hash: GetHashKey('move_gangster'),
    },
    {
      name: 'move_m@gangster@ng',
      hash: GetHashKey('move_m@gangster@ng'),
    },
    {
      name: 'move_m@gangster@var_a',
      hash: GetHashKey('move_m@gangster@var_a'),
    },
    {
      name: 'move_m@gangster@var_b',
      hash: GetHashKey('move_m@gangster@var_b'),
    },
    {
      name: 'move_m@gangster@var_c',
      hash: GetHashKey('move_m@gangster@var_c'),
    },
    {
      name: 'move_m@gangster@var_d',
      hash: GetHashKey('move_m@gangster@var_d'),
    },
    {
      name: 'move_m@gangster@var_e',
      hash: GetHashKey('move_m@gangster@var_e'),
    },
    {
      name: 'move_m@gangster@var_f',
      hash: GetHashKey('move_m@gangster@var_f'),
    },
    {
      name: 'move_m@gangster@var_g',
      hash: GetHashKey('move_m@gangster@var_g'),
    },
    {
      name: 'move_m@gangster@var_h',
      hash: GetHashKey('move_m@gangster@var_h'),
    },
    {
      name: 'move_m@gangster@var_i',
      hash: GetHashKey('move_m@gangster@var_i'),
    },
    {
      name: 'move_m@gangster@var_j',
      hash: GetHashKey('move_m@gangster@var_j'),
    },
    {
      name: 'move_m@gangster@var_k',
      hash: GetHashKey('move_m@gangster@var_k'),
    },
    {
      name: 'move_m@generic',
      hash: GetHashKey('move_m@generic'),
    },
    {
      name: 'move_f@generic',
      hash: GetHashKey('move_f@generic'),
    },
    {
      name: 'anim@move_m@grooving@',
      hash: GetHashKey('anim@move_m@grooving@'),
    },
    {
      name: 'anim@move_f@grooving@',
      hash: GetHashKey('anim@move_f@grooving@'),
    },
    {
      name: 'move_m@prison_gaurd',
      hash: GetHashKey('move_m@prison_gaurd'),
    },
    {
      name: 'move_m@prisoner_cuffed',
      hash: GetHashKey('move_m@prisoner_cuffed'),
    },
    {
      name: 'move_f@heels@c',
      hash: GetHashKey('move_f@heels@c'),
    },
    {
      name: 'move_f@heels@d',
      hash: GetHashKey('move_f@heels@d'),
    },
    {
      name: 'move_m@hiking',
      hash: GetHashKey('move_m@hiking'),
    },
    {
      name: 'move_f@hiking',
      hash: GetHashKey('move_f@hiking'),
    },
    {
      name: 'move_m@hipster@a',
      hash: GetHashKey('move_m@hipster@a'),
    },
    {
      name: 'move_m@hobo@a',
      hash: GetHashKey('move_m@hobo@a'),
    },
    {
      name: 'move_m@hobo@b',
      hash: GetHashKey('move_m@hobo@b'),
    },
    {
      name: 'move_f@injured',
      hash: GetHashKey('move_f@injured'),
    },
    {
      name: 'move_m@intimidation@1h',
      hash: GetHashKey('move_m@intimidation@1h'),
    },
    {
      name: 'move_m@intimidation@cop@unarmed',
      hash: GetHashKey('move_m@intimidation@cop@unarmed'),
    },
    {
      name: 'move_m@intimidation@unarmed',
      hash: GetHashKey('move_m@intimidation@unarmed'),
    },
    {
      name: 'move_p_m_zero_janitor',
      hash: GetHashKey('move_p_m_zero_janitor'),
    },
    {
      name: 'move_p_m_zero_slow',
      hash: GetHashKey('move_p_m_zero_slow'),
    },
    {
      name: 'move_characters@jimmy',
      hash: GetHashKey('move_characters@jimmy'),
    },
    {
      name: 'move_m@jog@',
      hash: GetHashKey('move_m@jog@'),
    },
    {
      name: 'move_characters@lamar',
      hash: GetHashKey('move_characters@lamar'),
    },
    {
      name: 'anim_group_move_lemar_alley',
      hash: GetHashKey('anim_group_move_lemar_alley'),
    },
    {
      name: 'move_heist_lester',
      hash: GetHashKey('move_heist_lester'),
    },
    {
      name: 'move_f@maneater',
      hash: GetHashKey('move_f@maneater'),
    },
    {
      name: 'move_ped_bucket',
      hash: GetHashKey('move_ped_bucket'),
    },
    {
      name: 'move_m@money',
      hash: GetHashKey('move_m@money'),
    },
    {
      name: 'move_m@muscle@a',
      hash: GetHashKey('move_m@muscle@a'),
    },
    {
      name: 'move_characters@jimmy@nervous@',
      hash: GetHashKey('move_characters@jimmy@nervous@'),
    },
    {
      name: 'move_characters@patricia',
      hash: GetHashKey('move_characters@patricia'),
    },
    {
      name: 'move_paramedic',
      hash: GetHashKey('move_paramedic'),
    },
    {
      name: 'move_m@posh@',
      hash: GetHashKey('move_m@posh@'),
    },
    {
      name: 'move_f@posh@',
      hash: GetHashKey('move_f@posh@'),
    },
    {
      name: 'move_m@quick',
      hash: GetHashKey('move_m@quick'),
    },
    {
      name: 'move_characters@ron',
      hash: GetHashKey('move_characters@ron'),
    },
    {
      name: 'female_fast_runner',
      hash: GetHashKey('female_fast_runner'),
    },
    {
      name: 'move_m@sad@a',
      hash: GetHashKey('move_m@sad@a'),
    },
    {
      name: 'move_m@sad@b',
      hash: GetHashKey('move_m@sad@b'),
    },
    {
      name: 'move_m@sad@c',
      hash: GetHashKey('move_m@sad@c'),
    },
    {
      name: 'move_f@sad@a',
      hash: GetHashKey('move_f@sad@a'),
    },
    {
      name: 'move_f@sad@b',
      hash: GetHashKey('move_f@sad@b'),
    },
    {
      name: 'move_m@sassy',
      hash: GetHashKey('move_m@sassy'),
    },
    {
      name: 'move_f@sassy',
      hash: GetHashKey('move_f@sassy'),
    },
    {
      name: 'move_f@scared',
      hash: GetHashKey('move_f@scared'),
    },
    {
      name: 'move_f@sexy@a',
      hash: GetHashKey('move_f@sexy@a'),
    },
    {
      name: 'move_m@shadyped@a',
      hash: GetHashKey('move_m@shadyped@a'),
    },
    {
      name: 'move_characters@jimmy@slow@',
      hash: GetHashKey('move_characters@jimmy@slow@'),
    },
    {
      name: 'move_f@stripper@a',
      hash: GetHashKey('move_f@stripper@a'),
    },
    {
      name: 'move_m@swagger',
      hash: GetHashKey('move_m@swagger'),
    },
    {
      name: 'move_m@swagger@b',
      hash: GetHashKey('move_m@swagger@b'),
    },
    {
      name: 'move_m@tough_guy@',
      hash: GetHashKey('move_m@tough_guy@'),
    },
    {
      name: 'move_f@tough_guy@',
      hash: GetHashKey('move_f@tough_guy@'),
    },
    {
      name: 'move_m@tool_belt@a',
      hash: GetHashKey('move_m@tool_belt@a'),
    },
    {
      name: 'move_f@tool_belt@a',
      hash: GetHashKey('move_f@tool_belt@a'),
    },
    {
      name: 'clipset@move@trash_fast_turn',
      hash: GetHashKey('clipset@move@trash_fast_turn'),
    },
    {
      name: 'missfbi4prepp1_garbageman',
      hash: GetHashKey('missfbi4prepp1_garbageman'),
    },
    {
      name: 'move_characters@tracey',
      hash: GetHashKey('move_characters@tracey'),
    },
    {
      name: 'move_p_m_two',
      hash: GetHashKey('move_p_m_two'),
    },
    {
      name: 'move_m@leaf_blower',
      hash: GetHashKey('move_m@leaf_blower'),
    },
    {
      name: 'move_m@bag',
      hash: GetHashKey('move_m@bag'),
    },
  ];

  const clipset = clipsetDict.find(clipset => clipset.hash === clipsetHash);
  return clipset ? clipset.name : 'Unknown';
};
