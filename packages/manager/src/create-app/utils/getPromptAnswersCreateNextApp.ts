import {
  CREATE_NEXT_APP_OPTIONS,
  CreateNextAppOptionAnswers,
} from '@create-app/constants';
import prompts from 'prompts';

export const getPromptAnswersCreateNextApp = async () => {
  const answers = await prompts(CREATE_NEXT_APP_OPTIONS);
  return answers as CreateNextAppOptionAnswers;
};
