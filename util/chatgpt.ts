import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
	apiKey: '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',
});

const openai = new OpenAIApi(configuration);

export default openai;
