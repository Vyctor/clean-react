export type HttpPostParams = {
  url: string;
  body?: unknown;
};
export default interface HttpPostClient {
  post(params: HttpPostParams): Promise<void>;
}
