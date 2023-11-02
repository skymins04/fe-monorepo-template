import { PromptObject } from "prompts";

export const CREATE_NEXT_APP_OPTIONS: PromptObject<string>[] = [
  {
    type: "text",
    name: "nextVersion",
    message: "설치할 Next.js 버전",
    initial: "latest",
    hint: "1.x.x",
  },
  {
    type: "confirm",
    name: "useTurbo",
    message: "Next.js turbo 옵션을 사용하실건가요?",
    initial: false,
  },
  {
    type: "text",
    name: "localSSLProxyTargetPort",
    message: "Next.js 구동 포트",
    initial: 4000,
    hint: "Next.js가 구동될 포트 번호를 입력하세요.",
  },
  {
    type: "text",
    name: "localSSLProxySourcePort",
    message: "Next.js SSL 프록시 포트",
    initial: 3000,
    hint: "Next.js에 HTTPS로 접근할 포트번호를 입력하세요.",
  },
];

export type CreateNextAppOptionAnswers = {
  nextVersion: string;
  useTurbo: boolean;
  localSSLProxySourcePort: number;
  localSSLProxyTargetPort: number;
};
