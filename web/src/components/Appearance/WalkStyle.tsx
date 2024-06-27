import { useNuiState } from '../../hooks/nuiState';

import Section from './components/Section';
import Item from './components/Item';
import SelectInput from './components/SelectInput';

import { WalkStylesSettings } from './interfaces';

interface WalkStyleProps {
  storedData: string;
  data: string;
  handleWalkStyleChange: (value: string) => void;
}

const WalkStyle = ({ storedData, data, handleWalkStyleChange }: WalkStyleProps) => {
  const { locales } = useNuiState();

  if (!locales) {
    return null;
  }

  const walkStyles = [
    {
      title: 'Alien',
      value: 'move_m@alien',
    },
    {
      title: 'Armored',
      value: 'anim_group_move_ballistic',
    },
    {
      title: 'Arrogant',
      value: 'move_f@arrogant@a',
    },
    {
      title: 'Butch',
      value: 'move_m@hurry_butch@a',
    },
    {
      title: 'Butch2',
      value: 'move_m@hurry_butch@b',
    },
    {
      title: 'Butch3',
      value: 'move_m@hurry_butch@c',
    },
    {
      title: 'Buzzed',
      value: 'move_m@buzzed',
    },
    {
      title: 'Brave',
      value: 'move_m@brave',
    },
    {
      title: 'Brave2',
      value: 'move_m@brave@a',
    },
    {
      title: 'Casey',
      value: 'move_casey',
    },
    {
      title: 'Casual',
      value: 'move_m@casual@a',
    },
    {
      title: 'Casual2',
      value: 'move_m@casual@b',
    },
    {
      title: 'Casual3',
      value: 'move_m@casual@c',
    },
    {
      title: 'Casual4',
      value: 'move_m@casual@d',
    },
    {
      title: 'Casual5',
      value: 'move_m@casual@e',
    },
    {
      title: 'Casual6',
      value: 'move_m@casual@f',
    },
    {
      title: 'Chichi',
      value: 'move_f@chichi',
    },
    {
      title: 'Confident',
      value: 'move_m@confident',
    },
    {
      title: 'Cop',
      value: 'move_m@business@a',
    },
    {
      title: 'Cop2',
      value: 'move_m@business@b',
    },
    {
      title: 'Cop3',
      value: 'move_m@business@c',
    },
    {
      title: 'Coward',
      value: 'move_m@coward',
    },
    {
      title: 'Chubbymale',
      value: 'move_chubby',
    },
    {
      title: 'Chubbyfemale',
      value: 'move_f@chubby@a',
    },
    {
      title: 'Dave',
      value: 'move_characters@dave_n',
    },
    {
      title: 'Defaultfemale',
      value: 'move_f@multiplayer',
    },
    {
      title: 'Defaultmale',
      value: 'move_m@multiplayer',
    },
    {
      title: 'Depressed',
      value: 'move_m@depressed@a',
    },
    {
      title: 'Depressed2',
      value: 'move_m@depressed@b',
    },
    {
      title: 'Depressed3',
      value: 'move_f@depressed@a',
    },
    {
      title: 'Depressed4',
      value: 'move_f@depressed@c',
    },
    {
      title: 'Dreyfuss',
      value: 'move_dreyfuss',
    },
    {
      title: 'Drunk',
      value: 'move_m@drunk@a',
    },
    {
      title: 'Drunk2',
      value: 'move_m@buzzed',
    },
    {
      title: 'Drunk3',
      value: 'move_m@drunk@moderatedrunk',
    },
    {
      title: 'Drunk4',
      value: 'move_m@drunk@moderatedrunk_head_up',
    },
    {
      title: 'Drunk5',
      value: 'move_m@drunk@slightlydrunk',
    },
    {
      title: 'Drunk6',
      value: 'move_m@drunk@verydrunk',
    },
    {
      title: 'Fat',
      value: 'move_m@fat@a',
    },
    {
      title: 'Fat2',
      value: 'move_f@fat@a',
    },
    {
      title: 'Fat3',
      value: 'move_m@fat@bulky',
    },
    {
      title: 'Fat4',
      value: 'move_f@fat@a_no_add',
    },
    {
      title: 'Femme',
      value: 'move_f@femme@',
    },
    {
      title: 'Femme2',
      value: 'move_m@femme@',
    },
    {
      title: 'Fire',
      value: 'move_characters@franklin@fire',
    },
    {
      title: 'Fire2',
      value: 'move_characters@michael@fire',
    },
    {
      title: 'Fire3',
      value: 'move_m@fire',
    },
    {
      title: 'Flee',
      value: 'move_f@flee@a',
    },
    {
      title: 'Flee2',
      value: 'move_f@flee@c',
    },
    {
      title: 'Flee3',
      value: 'move_m@flee@a',
    },
    {
      title: 'Flee4',
      value: 'move_m@flee@b',
    },
    {
      title: 'Flee5',
      value: 'move_m@flee@c',
    },
    {
      title: 'Floyd',
      value: 'move_characters@floyd',
    },
    {
      title: 'Franklin',
      value: 'move_p_m_one',
    },
    {
      title: 'Gangster',
      value: 'move_m@gangster@generic',
    },
    {
      title: 'Gangsterb',
      value: 'move_gangster',
    },
    {
      title: 'Gangsterc',
      value: 'move_m@gangster@ng',
    },
    {
      title: 'Gangsterd',
      value: 'move_m@gangster@var_a',
    },
    {
      title: 'Gangstere',
      value: 'move_m@gangster@var_b',
    },
    {
      title: 'Gangsterf',
      value: 'move_m@gangster@var_c',
    },
    {
      title: 'Gangsterg',
      value: 'move_m@gangster@var_d',
    },
    {
      title: 'Gangsterh',
      value: 'move_m@gangster@var_e',
    },
    {
      title: 'Gangsteri',
      value: 'move_m@gangster@var_f',
    },
    {
      title: 'Gangsterj',
      value: 'move_m@gangster@var_g',
    },
    {
      title: 'Gangsterk',
      value: 'move_m@gangster@var_h',
    },
    {
      title: 'Gangsterl',
      value: 'move_m@gangster@var_i',
    },
    {
      title: 'Gangsterm',
      value: 'move_m@gangster@var_j',
    },
    {
      title: 'Gangstern',
      value: 'move_m@gangster@var_k',
    },
    {
      title: 'Generic',
      value: 'move_m@generic',
    },
    {
      title: 'Generic2',
      value: 'move_f@generic',
    },
    {
      title: 'Grooving',
      value: 'anim@move_m@grooving@',
    },
    {
      title: 'Grooving2',
      value: 'anim@move_f@grooving@',
    },
    {
      title: 'Guard',
      value: 'move_m@prison_gaurd',
    },
    {
      title: 'Handcuffs',
      value: 'move_m@prisoner_cuffed',
    },
    {
      title: 'Heels',
      value: 'move_f@heels@c',
    },
    {
      title: 'Heels2',
      value: 'move_f@heels@d',
    },
    {
      title: 'Hiking',
      value: 'move_m@hiking',
    },
    {
      title: 'Hiking2',
      value: 'move_f@hiking',
    },
    {
      title: 'Hipster',
      value: 'move_m@hipster@a',
    },
    {
      title: 'Hobo',
      value: 'move_m@hobo@a',
    },
    {
      title: 'Hobo2',
      value: 'move_m@hobo@b',
    },
    {
      title: 'Injured2',
      value: 'move_f@injured',
    },
    {
      title: 'Intimidation',
      value: 'move_m@intimidation@1h',
    },
    {
      title: 'Intimidation2',
      value: 'move_m@intimidation@cop@unarmed',
    },
    {
      title: 'Intimidation3',
      value: 'move_m@intimidation@unarmed',
    },
    {
      title: 'Janitor',
      value: 'move_p_m_zero_janitor',
    },
    {
      title: 'Janitor2',
      value: 'move_p_m_zero_slow',
    },
    {
      title: 'Jimmy',
      value: 'move_characters@jimmy',
    },
    {
      title: 'Jog',
      value: 'move_m@jog@',
    },
    {
      title: 'Lamar',
      value: 'move_characters@lamar',
    },
    {
      title: 'Lamar2',
      value: 'anim_group_move_lemar_alley',
    },
    {
      title: 'Lester',
      value: 'move_heist_lester',
    },
    {
      title: 'Lester2',
      value: 'move_lester_caneup',
    },
    {
      title: 'Maneater',
      value: 'move_f@maneater',
    },
    {
      title: 'Michael',
      value: 'move_ped_bucket',
    },
    {
      title: 'Money',
      value: 'move_m@money',
    },
    {
      title: 'Muscle',
      value: 'move_m@muscle@a',
    },
    {
      title: 'Nervous',
      value: 'move_characters@jimmy@nervous@',
    },
    {
      title: 'Patricia',
      value: 'move_characters@patricia',
    },
    {
      title: 'Paramedic',
      value: 'move_paramedic',
    },
    {
      title: 'Posh',
      value: 'move_m@posh@',
    },
    {
      title: 'Posh2',
      value: 'move_f@posh@',
    },
    {
      title: 'Quick',
      value: 'move_m@quick',
    },
    {
      title: 'Ron',
      value: 'move_characters@ron',
    },
    {
      title: 'Runner',
      value: 'female_fast_runner',
    },
    {
      title: 'Sad',
      value: 'move_m@sad@a',
    },
    {
      title: 'Sad2',
      value: 'move_m@sad@b',
    },
    {
      title: 'Sad3',
      value: 'move_m@sad@c',
    },
    {
      title: 'Sad4',
      value: 'move_f@sad@a',
    },
    {
      title: 'Sad5',
      value: 'move_f@sad@b',
    },
    {
      title: 'Sassy',
      value: 'move_m@sassy',
    },
    {
      title: 'Sassy2',
      value: 'move_f@sassy',
    },
    {
      title: 'Scared',
      value: 'move_f@scared',
    },
    {
      title: 'Sexy',
      value: 'move_f@sexy@a',
    },
    {
      title: 'Shady',
      value: 'move_m@shadyped@a',
    },
    {
      title: 'Slow',
      value: 'move_characters@jimmy@slow@',
    },
    {
      title: 'Stripper',
      value: 'move_f@stripper@a',
    },
    {
      title: 'Swagger',
      value: 'move_m@swagger',
    },
    {
      title: 'Swagger2',
      value: 'move_m@swagger@b',
    },
    {
      title: 'Tough',
      value: 'move_m@tough_guy@',
    },
    {
      title: 'Tough2',
      value: 'move_f@tough_guy@',
    },
    {
      title: 'Toolbelt',
      value: 'move_m@tool_belt@a',
    },
    {
      title: 'Toolbelt2',
      value: 'move_f@tool_belt@a',
    },
    {
      title: 'Trash',
      value: 'clipset@move@trash_fast_turn',
    },
    {
      title: 'Trash2',
      value: 'missfbi4prepp1_garbageman',
    },
    {
      title: 'Tracey',
      value: 'move_characters@tracey',
    },
    {
      title: 'Trevor',
      value: 'move_p_m_two',
    },
    {
      title: 'Veryslow',
      value: 'move_m@leaf_blower',
    },
    {
      title: 'Wide',
      value: 'move_m@bag',
    },
  ];

  return (
    <Section title={locales.walkstyle.title}>
      <Item>
        <SelectInput
          title={locales.walkstyle.title}
          items={walkStyles.map(style => {
            return style.title;
          })}
          defaultValue={data}
          clientValue={storedData}
          onChange={value =>
            handleWalkStyleChange(walkStyles.find(style => style.title === value)?.value ?? walkStyles[0].value)
          }
        />
      </Item>
    </Section>
  );
};

export default WalkStyle;
