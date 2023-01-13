var c=Object.defineProperty;var e=(r,l)=>c(r,"name",{value:l,configurable:!0});import{T as t,E as n}from"./TextInput-abd35f01.js";import{j as o,a as p}from"./jsx-runtime-89acfd9a.js";import"./index-dbe441b7.js";import"./es.object.get-own-property-descriptor-8e8c6433.js";import"./IconBase.esm-45a0047d.js";import"./index.module-2cd2953e.js";const y={parameters:{storySource:{source:`import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Envelope } from 'phosphor-react';

import { TextInput } from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
} as ComponentMeta<typeof TextInput.Root>;

type TextInputStory = ComponentStory<typeof TextInput.Root>;

export const Default: TextInputStory = () => (
  <TextInput.Root>
    <TextInput.Input type="email" placeholder="Type your e-mail address" />
  </TextInput.Root>
);

export const LeftIcon: TextInputStory = () => (
  <TextInput.Root>
    <TextInput.Icon>
      <Envelope />
    </TextInput.Icon>
    <TextInput.Input type="email" placeholder="Type your e-mail address" />
  </TextInput.Root>
);

export const RightIcon: TextInputStory = () => (
  <TextInput.Root>
    <TextInput.Input type="email" placeholder="Type your e-mail address" />
    <TextInput.Icon>
      <Envelope />
    </TextInput.Icon>
  </TextInput.Root>
);
`,locationsMap:{default:{startLoc:{col:39,line:13},endLoc:{col:1,line:17},startBody:{col:39,line:13},endBody:{col:1,line:17}},"left-icon":{startLoc:{col:40,line:19},endLoc:{col:1,line:26},startBody:{col:40,line:19},endBody:{col:1,line:26}},"right-icon":{startLoc:{col:41,line:28},endLoc:{col:1,line:35},startBody:{col:41,line:28},endBody:{col:1,line:35}}}}},title:"Components/TextInput",component:t.Root},x=e(()=>o(t.Root,{children:o(t.Input,{type:"email",placeholder:"Type your e-mail address"})}),"Default"),T=e(()=>p(t.Root,{children:[o(t.Icon,{children:o(n,{})}),o(t.Input,{type:"email",placeholder:"Type your e-mail address"})]}),"LeftIcon"),f=e(()=>p(t.Root,{children:[o(t.Input,{type:"email",placeholder:"Type your e-mail address"}),o(t.Icon,{children:o(n,{})})]}),"RightIcon"),h=["Default","LeftIcon","RightIcon"];export{x as Default,T as LeftIcon,f as RightIcon,h as __namedExportsOrder,y as default};
//# sourceMappingURL=TextInput.stories-a0cc896a.js.map
